param(
    [int]$Port = 3000
)

$baseDir = $PSScriptRoot
if (-not $baseDir) {
    $baseDir = (Get-Location).Path
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
    ".eot"  = "application/vnd.ms-fontobject"
    ".otf"  = "font/otf"
    ".mp4"  = "video/mp4"
    ".webm" = "video/webm"
    ".mp3"  = "audio/mpeg"
    ".mpeg" = "audio/mpeg"
    ".m4a"  = "audio/mp4"
    ".aac"  = "audio/aac"
    ".ogg"  = "audio/ogg"
    ".wav"  = "audio/wav"
    ".pdf"  = "application/pdf"
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start listener on $prefix : $_"
    exit 1
}

Write-Host "=========================================="
Write-Host "  Development server running at: $prefix"
Write-Host "  Serving files from: $baseDir"
Write-Host "=========================================="

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        try {
            $request = $context.Request
            $response = $context.Response

            $rawUrl = $request.RawUrl.Split('?')[0].Split('#')[0]
            $decodedUrl = [System.Uri]::UnescapeDataString($rawUrl)
            if ($decodedUrl -eq '/' -or [string]::IsNullOrWhiteSpace($decodedUrl)) {
                $decodedUrl = '/index.html'
            }

            # Normalize relative path to prevent directory traversal
            $relative = $decodedUrl.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $targetPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($baseDir, $relative))

            # Check directory traversal
            if (-not $targetPath.StartsWith($baseDir, [System.StringComparison]::OrdinalIgnoreCase)) {
                $response.StatusCode = 403
                $response.ContentType = "text/plain; charset=utf-8"
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                $response.Close()
                continue
            }

            if (Test-Path -Path $targetPath -PathType Container) {
                $targetPath = [System.IO.Path]::Combine($targetPath, "index.html")
            }

            if (-not (Test-Path -Path $targetPath -PathType Leaf)) {
                $response.StatusCode = 404
                $response.ContentType = "text/html; charset=utf-8"
                $escaped = [System.Net.WebUtility]::HtmlEncode($decodedUrl)
                $html = "<h1>404 Not Found</h1><p>File not found: $escaped</p>"
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                $response.Close()
                continue
            }

            $ext = [System.IO.Path]::GetExtension($targetPath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $response.StatusCode = 200
            $response.ContentType = $contentType
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            if ($request.HttpMethod -eq 'HEAD') {
                $fileInfo = New-Object System.IO.FileInfo($targetPath)
                $response.ContentLength64 = $fileInfo.Length
                $response.Close()
                continue
            }

            $fileStream = $null
            try {
                $fileStream = [System.IO.File]::OpenRead($targetPath)
                $response.ContentLength64 = $fileStream.Length
                $fileStream.CopyTo($response.OutputStream)
            } finally {
                if ($fileStream) { $fileStream.Dispose() }
                $response.Close()
            }
        } catch {
            Write-Warning "Error processing request: $_"
            try { $context.Response.Close() } catch {}
        }
    }
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
