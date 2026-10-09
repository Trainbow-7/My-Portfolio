/**
 * TEMITAYO OYEDEJI - PROFESSIONAL PORTFOLIO & EXPERTISE HUB
 * Main Application Logic & Interactive State Management
 * Color System: Clean White Base + Vibrant Sky Blue (#0284C7 / #0EA5E9) Accents
 */

// Initial Seed Data (aligned with PRD)
const DEFAULT_DATA = {
  projects: [
    {
      id: 'proj-1',
      title: 'Nigeria Real Estate Valuation & Property Classification ML Engine',
      category: 'ai-ml',
      categoryName: 'AI & Machine Learning',
      problem: 'Nigerian real estate buyers, investors, and property agents grapple with price volatility, valuation opacity, and unstandardized property classifications across regional markets.',
      solution: 'Engineered a machine learning pipeline using monotonic HistGradientBoosting and ensemble regression trained on 24,326 real estate records to accurately predict property market valuations in Naira (₦) and classify property types (Detached Duplex, Terraced Duplex, Semi-Detached, Bungalow) from house features.',
      technologies: ['Python', 'Scikit-Learn', 'FastAPI', 'HistGradientBoosting', 'Pandas', 'Vercel'],
      role: 'Machine Learning Engineer & Pipeline Architect',
      outcome: 'Trained on 24,326 real estate records with 87%+ accuracy across 24 Nigerian states; deployed live web application on Vercel and REST API on Render.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://nigerianhousedataipynb.vercel.app',
      githubUrl: 'https://github.com/Trainbow-7/nigerian_house_data.ipynb'
    },
    {
      id: 'proj-2',
      title: 'Autonomous UAV Precision Mapping & Aerial Inspection Platform',
      category: 'uav',
      categoryName: 'UAV & Drones',
      problem: 'Commercial farms and industrial sites require cost-effective aerial surveillance and photogrammetry without expensive foreign enterprise lock-in.',
      solution: 'Constructed custom telemetry-enabled multicopter drones integrated with edge-based visual inspection pipelines and waypoint autonomous navigation.',
      technologies: ['PX4 Autopilot', 'ArduPilot', 'QGroundControl', 'Edge CV', 'Telemetry RF', '3D Photogrammetry'],
      role: 'UAV Systems Architect & Lead Pilot',
      outcome: 'Successfully mapped over 1,200 hectares with sub-meter spatial accuracy and deployed for agricultural yield estimation.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
    },
    {
      id: 'proj-3',
      title: 'Bitnoxsolution Entry Flow - Enterprise Visitor Management System (VMS)',
      category: 'ai-ml',
      categoryName: 'Enterprise Full-Stack & Analytics',
      problem: 'Multi-unit organizations and technology institutes rely on manual paper registers, resulting in zero visibility into visitor intent, security risks, lack of overstay tracking, and disorganized front-desk operations.',
      solution: 'Architected a full-stack, role-based Visitor Management System (VMS) featuring QR self-service check-in, real-time in-office occupancy tracking, automated overstay alerts, server-side RBAC permissions, and executive analytics dashboards.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
      role: 'Lead Full-Stack Engineer & System Architect',
      outcome: 'Replaced paper registers across multi-unit operations; enabled instant QR/barcode check-in, automated overstay notifications, and real-time peak-hour analytics with 100% audit compliance.',
      image: 'assets/bitnox-entry-flow-vms.jpg',
      demoUrl: 'https://bitnoxsolution-entry-flow.vercel.app',
      githubUrl: 'https://github.com/Trainbow-7/Bitnoxsolution-entry-flow'
    },
    {
      id: 'proj-4',
      title: 'STEM Drone Builders Workshop & Youth Empowerment Kit',
      category: 'stem',
      categoryName: 'STEM Education',
      problem: 'High school students are often taught technology theoretically with minimal access to real-world robotics and aeronautical engineering.',
      solution: 'Created hands-on modular drone kits, soldering guides, and physics simulation curricula for secondary schools across Lagos.',
      technologies: ['Aerodynamics Curriculum', 'Flight Controllers', 'Soldering & Assembly', 'STEM Lab Kits', 'Safety Protocols'],
      role: 'Curriculum Director & Workshop Facilitator',
      outcome: 'Trained 450+ secondary students across 12 institutions; 100% of participants built and test-flew functional micro-quadcopters.',
      image: 'assets/stem-drone-workshop-group.jpg',
      gallery: [
        {
          url: 'assets/stem-drone-workshop-flight.jpg',
          title: 'Live Flight Demonstration',
          caption: 'Outdoor flight test and real-time telemetry demonstration for participating students.'
        },
        {
          url: 'assets/stem-drone-workshop-builder.jpg',
          title: 'Hardware & Avionics Assembly',
          caption: 'Hands-on review of custom carbon-fiber quadcopter airframe, brushless motors, and flight controller.'
        },
        {
          url: 'assets/stem-drone-workshop-presentation.jpg',
          title: 'School-Wide STEM Assembly',
          caption: 'Interactive presentation at Bloomseed Elementary introducing students to aerodynamics and UAV technology.'
        }
      ],
      demoUrl: '#'
    },
    {
      id: 'proj-5',
      title: 'JAMB Score Tier Classification & Student Performance Predictor ML Engine',
      category: 'ai-ml',
      categoryName: 'AI & Educational Data Science',
      problem: 'Secondary school educators, academic counselors, and university admission candidates struggle to identify students at risk of underperforming in high-stakes JAMB examinations early enough to implement targeted academic interventions.',
      solution: 'Architected and deployed an ensemble Gradient Boosting classification model analyzing key student indicators (study hours, attendance rate, teacher quality, school type, and socioeconomic factors) to predict performance tiers (High, Average, Low) via an interactive web app and REST API.',
      technologies: ['Python', 'Scikit-Learn', 'FastAPI', 'Gradient Boosting', 'Pandas', 'Joblib', 'Vercel'],
      role: 'Machine Learning Engineer & Educational Data Scientist',
      outcome: 'Trained a Gradient Boosting classifier achieving ~57.4% test accuracy across three distinct tiers on student educational features; deployed interactive web app on Vercel and REST API on Render.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://jambscoreclassifieripynb.vercel.app',
      githubUrl: 'https://github.com/Trainbow-7/jamb_score_classifier.ipynb'
    },
    {
      id: 'proj-6',
      title: 'Secondary Further Mathematics Interactive Hub',
      category: 'stem',
      categoryName: 'Education / Math',
      problem: 'Students frequently find advanced calculus, mechanics, and abstract algebra disconnected from real-world computational logic.',
      solution: 'Designed digital interactive problem sets linking theoretical Further Mathematics to Python algorithmic animations and UAV flight mechanics.',
      technologies: ['Advanced Calculus', 'Mechanics Simulation', 'Interactive Visuals', 'Secondary Curriculum'],
      role: 'Master Mathematics Educator',
      outcome: 'Over 15 years produced consistent A* and Distinction candidates across secondary examinations.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
    }
  ],
  articles: [
    {
      id: 'art-1',
      title: 'How Drone Technology is Transforming Hands-on STEM Education in Africa',
      category: 'Drone Technology & STEM',
      date: 'September 2026',
      readTime: '6 min read',
      excerpt: 'Moving beyond textbooks: why building, configuring, and piloting UAVs provides the ultimate synthesis of physics, computing, and spatial mathematics for young minds.',
      content: `When a student watches a drone take off, they are not just seeing a flying gadget. They are watching physics, calculus, computer programming, and electrical engineering operate in perfect harmony.

In our workshops at UAV HUB SYSTEMS LIMITED, we introduce students to the direct relationship between rotational torque, telemetry data, and flight stabilization algorithms. This demystifies advanced concepts like vectors and angular momentum in ways a traditional chalkboard never could.

Why Drones are the Ideal STEM Catalyst:

1. Multidisciplinary Rigor: Combines aerodynamics, mechanical assembly, and firmware programming.
2. Immediate Feedback Loops: An incorrectly balanced rotor or wrong PID value yields immediate physical consequences that teach iterative debugging.
3. Career Readiness: Equips students early with skills in aerial surveying, robotics, and automation.`
    },
    {
      id: 'art-2',
      title: 'Practical AI & Automation Opportunities for Nigerian SMEs and Schools',
      category: 'AI & Machine Learning',
      date: 'August 2026',
      readTime: '8 min read',
      excerpt: 'Artificial intelligence is not just for Silicon Valley giants. Here is how local institutions can implement automation today to eliminate operational bottlenecks.',
      content: `Many African businesses and educational administrators believe that artificial intelligence requires multi-million dollar infrastructure. In reality, modern lightweight language models, Python automation scripts, and practical API integrations can resolve everyday challenges immediately.

Key Practical Applications:

- Intelligent Document Parsing: Automating student records, fee reconciliation, and compliance reports.
- Dynamic Lesson Assistance: Empowering teachers to generate differentiated worksheets and rubric assessments in seconds.
- Predictive Inventory and Cashflow: Utilizing simple gradient boosting models to anticipate seasonal demand and cashflow fluctuations.`
    },
    {
      id: 'art-3',
      title: 'Bridging Mathematics Education and Algorithmic Thinking in the AI Era',
      category: 'Mathematics & AI',
      date: 'July 2026',
      readTime: '5 min read',
      excerpt: 'Why mastering Further Mathematics, linear algebra, and calculus remains the true superpower for future AI engineers and problem solvers.',
      content: `As artificial intelligence tools become more ubiquitous, the demand for mere prompt writers will decline while the demand for individuals who understand mathematical foundations like loss functions, gradient descent, and matrix transformations will surge.

Teaching mathematics today means showing students that matrices are not just abstract brackets filled with numbers, but the core engine rendering computer vision images and transforming neural network weights.

Core Pillars of Modern Mathematical Literacy:

1. Linear Algebra for Neural Networks: Vectors, dot products, and matrix transformations represent the fundamental mathematics powering modern machine learning.
2. Calculus for Optimization: Understanding partial derivatives and gradient descent transforms artificial intelligence from an opaque black box into transparent, actionable engineering.
3. Algorithmic Problem Solving: Bridging formal mathematical proofs with practical Python implementations equips students to develop indigenous technology solutions.`
    }
  ],
  qualifications: [
    {
      id: 'qual-0',
      title: 'M.Sc. Applied Mathematics',
      institution: 'University of Lagos (UNILAG)',
      year: '',
      badge: 'Academic Degree',
      grade: '',
      description: 'Advanced postgraduate specialization in mathematical modeling, computational methods, numerical analysis, optimization techniques, and applied mathematical systems.',
      credentialUrl: '#credential-unilag-msc'
    },
    {
      id: 'qual-1',
      title: 'B.Sc. Mathematics Education',
      institution: 'University of Lagos (UNILAG)',
      year: '',
      badge: 'Academic Degree',
      grade: '',
      description: 'Comprehensive pedagogical and mathematical training covering Pure Mathematics, Advanced Calculus, Applied Statistics, Educational Psychology, and Curriculum Development.',
      credentialUrl: '#credential-unilag'
    },
    {
      id: 'qual-2',
      title: 'Diploma in Computer & Technology Studies',
      institution: 'Obafemi Awolowo University (OAU), Ile-Ife',
      year: '',
      badge: 'Diploma',
      grade: '',
      description: 'Rigorous foundation in computer architecture, algorithmic problem solving, structured programming, and digital system workflows.',
      credentialUrl: '#credential-oau'
    },
    {
      id: 'qual-4',
      title: 'TRCN Certified & Licensed Professional Teacher',
      institution: 'Teachers Registration Council of Nigeria',
      year: 'Licensed',
      badge: 'State License',
      grade: 'Certified Practitioner',
      description: 'Official statutory accreditation recognizing professional competence, ethics, and standard classroom pedagogy across primary, secondary, and tertiary levels.',
      credentialUrl: 'assets/trcn-certificate.jpg',
      certificateImage: 'assets/trcn-certificate.jpg',
      regNumber: 'LA/R/***43',
      certNumber: '****802',
      issuedDate: 'March 5, 2020'
    },
    {
      id: 'qual-5',
      title: 'Certified UAV / Drone Pilot & Systems Operator',
      institution: 'United Kingdom Civil Aviation Authority (UK CAA)',
      year: '',
      badge: 'UK CAA Drone Pilot',
      grade: 'Flyer ID: GBR-RP-58MN••••••8',
      description: 'Official United Kingdom Civil Aviation Authority (UK CAA) certified drone and model aircraft pilot (A1 & A3 Open Sub Category, valid through 24 July 2030). Co-Founder and Managing Director at UAV HUB SYSTEMS LIMITED (CAC RC: 8776538).',
      credentialUrl: 'assets/uk-caa-drone-flyer-id.pdf',
      certificatePdf: 'assets/uk-caa-drone-flyer-id.pdf',
      flyerId: 'GBR-RP-58MNWPP79VJ8',
      flyerName: 'TEMITAYO SAMSON OYEDEJI',
      flyerExpiry: '24 July 2030',
      flyerCategory: 'A1 & A3 Open Sub Category',
      flyerVerification: 'https://register-drones.caa.co.uk',
      cacPdf: 'assets/uav-hub-systems-cac-certificate.pdf',
      rcNumber: 'RC: 8776538',
      tinNumber: '33477774-0001',
      dateIncorporated: 'September 2, 2025'
    }
  ],
  enquiries: []
};

// State Management with LocalStorage
class Store {
  constructor() {
    this.init();
  }

  init() {
    const storedProjects = localStorage.getItem('to_projects');
    if (!storedProjects) {
      localStorage.setItem('to_projects', JSON.stringify(DEFAULT_DATA.projects));
    } else {
      try {
        let parsedProjects = JSON.parse(storedProjects);
        let updated = false;
        const p1Index = parsedProjects.findIndex(p => p.id === 'proj-1');
        if (p1Index >= 0 && (parsedProjects[p1Index].title.includes('TrainbowHub') || !parsedProjects[p1Index].githubUrl || parsedProjects[p1Index].demoUrl === '#')) {
          parsedProjects[p1Index] = DEFAULT_DATA.projects[0];
          updated = true;
        }
        const p3Index = parsedProjects.findIndex(p => p.id === 'proj-3');
        if (p3Index >= 0 && (parsedProjects[p3Index].title.includes('Predictive Modeling') || !parsedProjects[p3Index].githubUrl || parsedProjects[p3Index].demoUrl === '#' || (parsedProjects[p3Index].image && parsedProjects[p3Index].image.includes('unsplash')))) {
          parsedProjects[p3Index] = DEFAULT_DATA.projects[2];
          updated = true;
        }
        const p4Index = parsedProjects.findIndex(p => p.id === 'proj-4');
        if (p4Index >= 0 && (parsedProjects[p4Index].image && (parsedProjects[p4Index].image.includes('unsplash') || !parsedProjects[p4Index].gallery))) {
          parsedProjects[p4Index] = DEFAULT_DATA.projects[3];
          updated = true;
        }
        const p5Index = parsedProjects.findIndex(p => p.id === 'proj-5');
        if (p5Index >= 0 && (parsedProjects[p5Index].title.includes('Computer Vision') || !parsedProjects[p5Index].githubUrl || parsedProjects[p5Index].demoUrl === '#')) {
          parsedProjects[p5Index] = DEFAULT_DATA.projects[4];
          updated = true;
        }
        if (updated) {
          localStorage.setItem('to_projects', JSON.stringify(parsedProjects));
        }
      } catch (e) {
        localStorage.setItem('to_projects', JSON.stringify(DEFAULT_DATA.projects));
      }
    }
    // Always refresh articles with clean formatting
    localStorage.setItem('to_articles', JSON.stringify(DEFAULT_DATA.articles));
    const storedQuals = localStorage.getItem('to_qualifications');
    if (!storedQuals) {
      localStorage.setItem('to_qualifications', JSON.stringify(DEFAULT_DATA.qualifications));
    } else {
      try {
        let parsedQuals = JSON.parse(storedQuals);
        let updated = false;
        if (!parsedQuals.some(q => q.id === 'qual-0' || (q.title && q.title.includes('M.Sc.')))) {
          parsedQuals.unshift(DEFAULT_DATA.qualifications[0]);
          updated = true;
        }
        if (parsedQuals.some(q => q.id === 'qual-3' || (q.title && q.title.includes('Google AI Essentials')))) {
          parsedQuals = parsedQuals.filter(q => q.id !== 'qual-3' && !(q.title && q.title.includes('Google AI Essentials')));
          updated = true;
        }
        parsedQuals.forEach(q => {
          if (q.id === 'qual-1') {
            if (q.year === '2020' || q.year) {
              q.year = '';
              updated = true;
            }
            if (q.grade && q.grade.includes('CGPA')) {
              q.grade = '';
              updated = true;
            }
          }
          if (q.id === 'qual-2') {
            if (q.year === 'Specialized Track' || q.year) {
              q.year = '';
              updated = true;
            }
            if (q.grade === 'Distinction Track' || q.grade) {
              q.grade = '';
              updated = true;
            }
          }
          if (q.id === 'qual-4') {
            q.credentialUrl = 'assets/trcn-certificate.jpg';
            q.certificateImage = 'assets/trcn-certificate.jpg';
            q.regNumber = 'LA/R/***43';
            q.certNumber = '****802';
            q.issuedDate = 'March 5, 2020';
            updated = true;
          }
          if (q.id === 'qual-5') {
            q.credentialUrl = 'assets/uk-caa-drone-flyer-id.pdf';
            q.certificatePdf = 'assets/uk-caa-drone-flyer-id.pdf';
            q.institution = 'United Kingdom Civil Aviation Authority (UK CAA)';
            q.year = '';
            q.badge = 'UK CAA Drone Pilot';
            q.grade = 'Flyer ID: GBR-RP-58MN••••••8';
            q.description = 'Official United Kingdom Civil Aviation Authority (UK CAA) certified drone and model aircraft pilot (A1 & A3 Open Sub Category, valid through 24 July 2030). Co-Founder and Managing Director at UAV HUB SYSTEMS LIMITED (CAC RC: 8776538).';
            q.flyerId = 'GBR-RP-58MNWPP79VJ8';
            q.flyerName = 'TEMITAYO SAMSON OYEDEJI';
            q.flyerExpiry = '24 July 2030';
            q.flyerCategory = 'A1 & A3 Open Sub Category';
            q.flyerVerification = 'https://register-drones.caa.co.uk';
            q.cacPdf = 'assets/uav-hub-systems-cac-certificate.pdf';
            q.rcNumber = 'RC: 8776538';
            q.tinNumber = '33477774-0001';
            q.dateIncorporated = 'September 2, 2025';
            updated = true;
          }
        });
        if (updated) {
          localStorage.setItem('to_qualifications', JSON.stringify(parsedQuals));
        }
      } catch (e) {
        localStorage.setItem('to_qualifications', JSON.stringify(DEFAULT_DATA.qualifications));
      }
    }
    if (!localStorage.getItem('to_enquiries')) {
      localStorage.setItem('to_enquiries', JSON.stringify(DEFAULT_DATA.enquiries));
    }
  }

  getProjects() {
    return JSON.parse(localStorage.getItem('to_projects')) || DEFAULT_DATA.projects;
  }

  saveProject(project) {
    const projects = this.getProjects();
    const existingIndex = projects.findIndex(p => p.id === project.id);
    if (existingIndex >= 0) {
      projects[existingIndex] = project;
    } else {
      project.id = 'proj-' + Date.now();
      projects.unshift(project);
    }
    localStorage.setItem('to_projects', JSON.stringify(projects));
  }

  deleteProject(id) {
    let projects = this.getProjects();
    projects = projects.filter(p => p.id !== id);
    localStorage.setItem('to_projects', JSON.stringify(projects));
  }

  getArticles() {
    return JSON.parse(localStorage.getItem('to_articles')) || DEFAULT_DATA.articles;
  }

  saveArticle(article) {
    const articles = this.getArticles();
    const existingIndex = articles.findIndex(a => a.id === article.id);
    if (existingIndex >= 0) {
      articles[existingIndex] = article;
    } else {
      article.id = 'art-' + Date.now();
      articles.unshift(article);
    }
    localStorage.setItem('to_articles', JSON.stringify(articles));
  }

  getQualifications() {
    return JSON.parse(localStorage.getItem('to_qualifications')) || DEFAULT_DATA.qualifications;
  }

  getEnquiries() {
    return JSON.parse(localStorage.getItem('to_enquiries')) || [];
  }

  saveEnquiry(enquiry) {
    const enquiries = this.getEnquiries();
    enquiry.id = 'enq-' + Date.now();
    enquiry.createdAt = new Date().toLocaleString();
    enquiry.status = 'New';
    enquiries.unshift(enquiry);
    localStorage.setItem('to_enquiries', JSON.stringify(enquiries));
    return enquiry;
  }

  resetDefaults() {
    localStorage.setItem('to_projects', JSON.stringify(DEFAULT_DATA.projects));
    localStorage.setItem('to_articles', JSON.stringify(DEFAULT_DATA.articles));
    localStorage.setItem('to_qualifications', JSON.stringify(DEFAULT_DATA.qualifications));
  }
}

const store = new Store();

// UI Rendering and Controllers
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjects();
  renderQualifications();
  renderInsights();
  initModals();
  initContactForm();
  initAdminDashboard();
  initLenis();
  initMotionAnimations();
});

// Lenis Smooth Inertial Scrolling Engine
let lenis = null;
function initLenis() {
  if (typeof Lenis === 'undefined') return;

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  try {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      if (lenis) lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll for anchor navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#' || targetId.startsWith('#!')) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -80,
            duration: 1.2
          });
        }
      });
    });
  } catch (e) {
    console.warn('Lenis initialization note:', e);
  }
}

// Framer Motion / Motion Engine Animation System
function initMotionAnimations() {
  if (typeof Motion === 'undefined') return;

  const { animate, inView, stagger } = Motion;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  try {
    // 1. Hero Entrance Animation
    animate(
      '.hero-badge, .hero-title, .hero-lead, .hero-cta-group, .hero-metrics',
      { opacity: [0, 1], y: [24, 0] },
      { delay: stagger(0.1), duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );

    animate(
      '.hero-visual',
      { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] },
      { delay: 0.25, duration: 0.9, easing: [0.16, 1, 0.3, 1] }
    );

    // 2. Section Headers Reveal on Scroll
    inView('.section-header', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [22, 0] },
        { duration: 0.65, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.2 });

    // 3. Problem/Solution Cards
    inView('.problem-solution-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.65, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 4. Expertise Cards
    inView('.expertise-category-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.65, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 5. Service Cards
    inView('.service-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.65, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 6. Project Cards
    inView('.project-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.7, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 7. Document Cards
    inView('.doc-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.6, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 8. UAV HUB Banner Reveal
    inView('.uavhub-banner', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], scale: [0.97, 1], y: [24, 0] },
        { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });

    // 9. Insights Blog Cards
    inView('.insight-card', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [28, 0] },
        { duration: 0.65, easing: [0.16, 1, 0.3, 1] }
      );
    }, { amount: 0.15 });
  } catch (err) {
    console.warn('Motion animation note:', err);
  }
}

// Navbar scroll effects and mobile drawer
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightNavOnScroll();
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking standard links or dropdown items
    document.querySelectorAll('.nav-link:not(.nav-dropdown-btn), .dropdown-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });

    // Handle touch/click for dropdown toggles on mobile
    document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const parent = btn.closest('.nav-item-dropdown');
          if (parent) {
            parent.classList.toggle('active');
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add('active');
    } else {
      if (navLink) navLink.classList.remove('active');
    }
  });
}

// Render Projects with Filtering
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const projects = store.getProjects();
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No projects found in this category.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-id="${p.id}">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="project-body">
        <div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-problem-solution"><strong>Problem:</strong> ${p.problem.substring(0, 110)}...</p>
        </div>
        <div>
          <div class="project-tech-stack">
            ${p.technologies.slice(0, 4).map(t => `<span class="project-tech-item">${t}</span>`).join('')}
            ${p.technologies.length > 4 ? `<span class="project-tech-item">+${p.technologies.length - 4}</span>` : ''}
          </div>
          <div class="project-actions">
            <button class="btn btn-primary btn-sm" onclick="openProjectModal('${p.id}')">View Case Study</button>
            ${p.demoUrl && p.demoUrl !== '#' ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Launch Live Web App" style="display: inline-flex; align-items: center; gap: 5px;">
                <span>Live Demo</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : ''}
            ${p.githubUrl && p.githubUrl !== '#' ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source Code on GitHub" style="display: inline-flex; align-items: center; gap: 5px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// Setup Project Filter Buttons
window.filterProjects = function(category, element) {
  document.querySelectorAll('#projectFilters .tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProjects(category);
};

// Render Qualifications Timeline
function renderQualifications() {
  const container = document.getElementById('qualificationsTimeline');
  if (!container) return;

  const quals = store.getQualifications();
  container.innerHTML = quals.map(q => {
    const displayGrade = (q.id === 'qual-5' || (q.title && q.title.includes('Drone Pilot')))
      ? 'Flyer ID: GBR-RP-58MN••••••8'
      : q.grade;

    return `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h4 class="timeline-title">${q.title}</h4>
            <div class="timeline-org">${q.institution}</div>
          </div>
          <div style="text-align: right;">
            ${q.year ? `<span class="timeline-year">${q.year}</span>` : ''}
            ${displayGrade ? `<div style="font-size: 0.8rem; color: var(--color-sky); font-weight: 700; margin-top: 4px;">${displayGrade}</div>` : ''}
          </div>
        </div>
        <p class="timeline-body">${q.description}</p>
        <div style="margin-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-outline-sky btn-sm" onclick="openCredentialModal('${q.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View Credential Details
          </button>
          ${q.id === 'qual-4' ? `
            <button class="btn btn-secondary btn-sm" onclick="openDocRequestModal('TRCN Certificate')" title="Request Official TRCN Certificate">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request Certificate
            </button>
          ` : ''}
          ${(q.id === 'qual-5' || q.flyerId) ? `
            <button class="btn btn-secondary btn-sm" onclick="openDocRequestModal('UK CAA Flyer ID')" title="Request UK CAA Drone Pilot Flyer ID Document">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request Flyer ID
            </button>
            <button class="btn btn-secondary btn-sm" onclick="openDocRequestModal('CAC Certificate')" title="Request Official CAC Certificate of Incorporation">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request CAC Certificate
            </button>
          ` : ''}
          ${(q.certificateImage && q.id !== 'qual-4' && q.id !== 'qual-5') ? `
            <a href="${q.certificateImage}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="View Original Certificate Document">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              View Certificate
            </a>
          ` : ''}
          ${(q.certificatePdf && q.id !== 'qual-4' && q.id !== 'qual-5' && !q.flyerId) ? `
            <a href="${q.certificatePdf}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="View Official Document">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Document (PDF)
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
  }).join('');
}

// Render Insights & Knowledge
function renderInsights() {
  const container = document.getElementById('insightsGrid');
  if (!container) return;

  const articles = store.getArticles();
  container.innerHTML = articles.map(a => `
    <article class="insight-card">
      <div>
        <div class="insight-cat">${a.category}</div>
        <h3 class="insight-title">${a.title}</h3>
        <p class="insight-excerpt">${a.excerpt}</p>
      </div>
      <div>
        <div class="insight-footer">
          <span>${a.date} · ${a.readTime}</span>
          <button class="btn btn-outline-sky btn-sm" onclick="openArticleModal('${a.id}')">Read Full Article</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Modals Handling
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
  if (typeof lenis !== 'undefined' && lenis) lenis.start();
};

// Image Lightbox State & Controls
let currentLightboxGallery = [];
let currentLightboxIndex = 0;

window.openImageLightbox = function(indexOrUrl) {
  const overlay = document.getElementById('imageLightboxOverlay');
  if (!overlay) return;

  if (typeof indexOrUrl === 'number') {
    currentLightboxIndex = Math.max(0, Math.min(indexOrUrl, currentLightboxGallery.length - 1));
  } else if (typeof indexOrUrl === 'string') {
    const foundIdx = currentLightboxGallery.findIndex(item => item.url === indexOrUrl);
    currentLightboxIndex = foundIdx >= 0 ? foundIdx : 0;
  }

  updateLightboxView();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

function updateLightboxView() {
  if (!currentLightboxGallery || currentLightboxGallery.length === 0) return;
  const item = currentLightboxGallery[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('imageLightboxImg');
  const titleEl = document.getElementById('imageLightboxTitle');
  const descEl = document.getElementById('imageLightboxDesc');
  const counterEl = document.getElementById('imageLightboxCounter');
  const prevBtn = document.querySelector('.image-lightbox-prev');
  const nextBtn = document.querySelector('.image-lightbox-next');

  if (imgEl) {
    imgEl.style.opacity = '0.2';
    setTimeout(() => {
      imgEl.src = item.url;
      imgEl.alt = item.title || 'Enlarged photo';
      imgEl.style.opacity = '1';
    }, 80);
  }

  if (titleEl) titleEl.textContent = item.title || 'Project Photo';
  if (descEl) descEl.textContent = item.caption || '';
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxGallery.length}`;

  if (prevBtn) prevBtn.style.display = currentLightboxGallery.length > 1 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = currentLightboxGallery.length > 1 ? 'flex' : 'none';
}

window.lightboxNextImage = function() {
  if (!currentLightboxGallery || currentLightboxGallery.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxGallery.length;
  updateLightboxView();
};

window.lightboxPrevImage = function() {
  if (!currentLightboxGallery || currentLightboxGallery.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxGallery.length) % currentLightboxGallery.length;
  updateLightboxView();
};

window.closeImageLightbox = function(e) {
  if (e && e.target && e.target.closest('.image-lightbox-container') && !e.target.classList.contains('image-lightbox-close')) {
    return;
  }
  const overlay = document.getElementById('imageLightboxOverlay');
  if (overlay) overlay.classList.remove('active');
  const projModal = document.getElementById('projectDetailModal');
  if (projModal && projModal.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined' && lenis) lenis.start();
  }
};

document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('imageLightboxOverlay');
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeImageLightbox();
      return;
    }
    if (e.key === 'ArrowRight') {
      lightboxNextImage();
      return;
    }
    if (e.key === 'ArrowLeft') {
      lightboxPrevImage();
      return;
    }
  }
});

window.switchProjectModalHero = function(imgUrl, label, el) {
  const heroImg = document.getElementById('projectModalHeroImg');
  const heroLabel = document.getElementById('modalHeroLabel');
  const resetBtn = document.getElementById('resetModalHeroBtn');
  if (!heroImg) return;

  heroImg.style.opacity = '0.2';
  setTimeout(() => {
    heroImg.src = imgUrl;
    heroImg.style.opacity = '1';
  }, 120);

  if (heroLabel && label) {
    heroLabel.textContent = label;
  }

  document.querySelectorAll('.project-gallery-card').forEach(card => {
    card.style.borderColor = 'var(--border-light)';
    card.style.boxShadow = 'none';
  });

  if (el && el.classList && el.classList.contains('project-gallery-card')) {
    el.style.borderColor = '#0284c7';
    el.style.boxShadow = '0 0 0 2px rgba(2, 132, 199, 0.25)';
    if (resetBtn) resetBtn.style.display = 'block';
  } else {
    if (resetBtn) resetBtn.style.display = 'none';
  }
};

window.openProjectModal = function(id) {
  const projects = store.getProjects();
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  const modal = document.getElementById('projectDetailModal');
  const body = document.getElementById('projectModalBody');

  const hasGallery = proj.gallery && Array.isArray(proj.gallery) && proj.gallery.length > 0;

  // Build lightbox playlist with all high-resolution photos:
  currentLightboxGallery = [
    {
      url: proj.image,
      title: proj.title,
      caption: 'Cover Showcase Photo — ' + (proj.role || 'Featured Project')
    }
  ];
  if (hasGallery) {
    proj.gallery.forEach((g, i) => {
      currentLightboxGallery.push({
        url: g.url,
        title: g.title || `Workshop Photo ${i + 1}`,
        caption: g.caption || ''
      });
    });
  }

  body.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h2 style="font-size: 1.8rem; font-weight: 800; color: #09090b;">${proj.title}</h2>
      <p style="color: #0284c7; font-weight: 700; font-size: 0.95rem; margin-top: 4px;">Role: ${proj.role}</p>
    </div>

    <div style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-light); position: relative; background: #09090b; cursor: zoom-in;" onclick="openImageLightbox(0)" title="Click to enlarge in full-screen">
      <img id="projectModalHeroImg" src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; transition: opacity 0.25s ease;" />
      <div style="position: absolute; top: 12px; right: 12px; background: rgba(9, 9, 11, 0.85); backdrop-filter: blur(8px); color: #ffffff; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: var(--radius-full); border: 1px solid rgba(255, 255, 255, 0.25); display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        <span>Click to Enlarge</span>
      </div>
      ${hasGallery ? `
        <div id="modalHeroBadge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(9, 9, 11, 0.78); backdrop-filter: blur(8px); color: #ffffff; font-size: 0.75rem; font-weight: 600; padding: 4px 10px; border-radius: var(--radius-full); border: 1px solid rgba(255, 255, 255, 0.15); display: inline-flex; align-items: center; gap: 6px;">
          <span style="width: 6px; height: 6px; border-radius: 50%; background: #38bdf8;"></span>
          <span id="modalHeroLabel">Featured Project Photo</span>
        </div>
        <button id="resetModalHeroBtn" onclick="event.stopPropagation(); switchProjectModalHero('${proj.image}', 'Featured Project Photo', this)" style="display: none; position: absolute; top: 12px; right: 140px; background: rgba(9, 9, 11, 0.82); backdrop-filter: blur(8px); color: #ffffff; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: var(--radius-full); border: 1px solid rgba(255, 255, 255, 0.2); cursor: pointer; transition: all 0.2s ease;">
          ↺ View Cover
        </button>
      ` : ''}
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #f97316; padding: 14px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h4 style="color: #ea580c; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;">The Challenge / Problem</h4>
        <p style="font-size: 0.92rem; color: #334155; line-height: 1.6;">${proj.problem}</p>
      </div>

      <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-left: 3px solid #0284c7; padding: 14px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h4 style="color: #0284c7; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;">The Technical Solution</h4>
        <p style="font-size: 0.92rem; color: #334155; line-height: 1.6;">${proj.solution}</p>
      </div>

      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-left: 3px solid #10b981; padding: 14px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h4 style="color: #16a34a; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;">Measurable Outcome & Impact</h4>
        <p style="font-size: 0.92rem; color: #334155; line-height: 1.6;">${proj.outcome}</p>
      </div>
    </div>

    <div style="margin-bottom: ${hasGallery ? '20px' : '24px'};">
      <h4 style="font-size: 0.95rem; color: #09090b; margin-bottom: 10px; font-weight: 700;">Technologies & Tools Deployed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${proj.technologies.map(t => `<span class="tech-pill" style="color: #0284c7; border-color: #bae6fd; background: #f0f9ff; font-weight: 600;">${t}</span>`).join('')}
      </div>
    </div>

    ${hasGallery ? `
      <div style="margin-bottom: 24px; background: #f8fafc; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <h4 style="font-size: 0.95rem; color: #09090b; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; margin: 0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Workshop & Field Photo Gallery</span>
          </h4>
          <span style="font-size: 0.75rem; color: #0284c7; font-weight: 700; background: #f0f9ff; border: 1px solid #bae6fd; padding: 4px 12px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 5px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            Click any photo to enlarge full-screen
          </span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
          ${proj.gallery.map((item, idx) => `
            <div class="project-gallery-card" onclick="openImageLightbox(${idx + 1}); switchProjectModalHero('${item.url}', '${item.title}', this);" style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden; cursor: zoom-in; display: flex; flex-direction: column;" title="Click to enlarge ${item.title}">
              <div style="width: 100%; aspect-ratio: 4/3; overflow: hidden; background: #0f172a; position: relative;">
                <img src="${item.url}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease;" />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%); opacity: 0.8;"></div>
                <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(9, 9, 11, 0.75); color: #ffffff; font-size: 0.7rem; font-weight: 600; padding: 2px 7px; border-radius: 4px; backdrop-filter: blur(4px);">
                  Photo ${idx + 1}
                </span>
                <span style="position: absolute; top: 8px; right: 8px; background: rgba(9, 9, 11, 0.82); color: #38bdf8; font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; backdrop-filter: blur(4px); display: inline-flex; align-items: center; gap: 4px; border: 1px solid rgba(56, 189, 248, 0.3);">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  Enlarge
                </span>
              </div>
              <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <strong style="font-size: 0.85rem; color: #0f172a; display: block; margin-bottom: 4px; line-height: 1.3;">${item.title}</strong>
                  <p style="font-size: 0.78rem; color: #64748b; line-height: 1.45; margin: 0;">${item.caption}</p>
                </div>
                <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between;">
                  <span style="font-size: 0.75rem; color: #0284c7; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    Click to Enlarge
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="display: flex; gap: 12px; border-top: 1px solid var(--border-light); padding-top: 20px; flex-wrap: wrap; align-items: center;">
      ${proj.demoUrl && proj.demoUrl !== '#' ? `
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Launch Live Demo</span>
        </a>
      ` : ''}
      <a href="${proj.githubUrl && proj.githubUrl !== '#' ? proj.githubUrl : 'https://github.com/Trainbow-7'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>GitHub Repository</span>
      </a>
      <a href="#contact" class="btn btn-secondary btn-sm" onclick="closeAllModals(); selectServiceFromProject('${proj.category}')">Discuss Similar Project</a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

function formatArticleContent(text) {
  if (!text) return '';
  const lines = text.trim().split('\n');
  let html = '';
  let inList = null;

  lines.forEach(line => {
    let trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        html += `</${inList}>`;
        inList = null;
      }
      return;
    }

    // Markdown / custom heading detection (### or ## or #)
    if (trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
      if (inList) { html += `</${inList}>`; inList = null; }
      const headingText = trimmed.replace(/^#+\s*/, '').replace(/\*\*/g, '').replace(/:$/, '').trim();
      html += `<h4 style="font-size: 1.18rem; font-weight: 700; color: #0f172a; margin: 26px 0 12px 0; letter-spacing: -0.01em;">${headingText}</h4>`;
      return;
    }

    // Numbered list items: "1. Item" or "1) Item"
    const numMatch = trimmed.match(/^(\d+)[\.\)]\s*(.*)/);
    if (numMatch) {
      if (inList !== 'ol') {
        if (inList) html += `</${inList}>`;
        html += `<ol style="margin: 12px 0 20px 20px; padding-left: 10px; display: flex; flex-direction: column; gap: 10px; color: #334155; line-height: 1.7;">`;
        inList = 'ol';
      }
      let rawContent = numMatch[2];
      let itemContent = rawContent.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0f172a;">$1</strong>');
      if (!itemContent.includes('<strong') && itemContent.includes(':')) {
        const colonIndex = itemContent.indexOf(':');
        const title = itemContent.substring(0, colonIndex);
        const rest = itemContent.substring(colonIndex + 1);
        itemContent = `<strong style="color: #0f172a;">${title}:</strong>${rest}`;
      }
      itemContent = itemContent.replace(/\*\*/g, '').replace(/^#+\s*/, '');
      html += `<li>${itemContent}</li>`;
      return;
    }

    // Bullet list items: "- Item" or "• Item" or "* Item"
    const bulletMatch = trimmed.match(/^[-•*]\s*(.*)/);
    if (bulletMatch) {
      if (inList !== 'ul') {
        if (inList) html += `</${inList}>`;
        html += `<ul style="margin: 12px 0 20px 20px; padding-left: 10px; display: flex; flex-direction: column; gap: 10px; color: #334155; line-height: 1.7; list-style-type: disc;">`;
        inList = 'ul';
      }
      let rawContent = bulletMatch[1];
      let itemContent = rawContent.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0f172a;">$1</strong>');
      if (!itemContent.includes('<strong') && itemContent.includes(':')) {
        const colonIndex = itemContent.indexOf(':');
        const title = itemContent.substring(0, colonIndex);
        const rest = itemContent.substring(colonIndex + 1);
        itemContent = `<strong style="color: #0f172a;">${title}:</strong>${rest}`;
      }
      itemContent = itemContent.replace(/\*\*/g, '').replace(/^#+\s*/, '');
      html += `<li>${itemContent}</li>`;
      return;
    }

    // Standalone headings ending with a colon or short titles without punctuation
    if (trimmed.endsWith(':') && trimmed.length < 70 && !trimmed.includes('.')) {
      if (inList) { html += `</${inList}>`; inList = null; }
      const cleanHeading = trimmed.replace(/\*\*/g, '').replace(/^#+\s*/, '').replace(/:$/, '').trim();
      html += `<h4 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 24px 0 10px 0;">${cleanHeading}</h4>`;
      return;
    }

    // Regular paragraph
    if (inList) {
      html += `</${inList}>`;
      inList = null;
    }

    let formattedText = trimmed
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0f172a;">$1</strong>')
      .replace(/\*\*/g, '')
      .replace(/^#+\s*/, '');
    html += `<p style="margin-bottom: 16px; color: #334155; line-height: 1.8; font-size: 1rem;">${formattedText}</p>`;
  });

  if (inList) {
    html += `</${inList}>`;
  }

  return html;
}

window.openArticleModal = function(id) {
  const articles = store.getArticles();
  const art = articles.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById('genericModal');
  const body = document.getElementById('genericModalBody');

  body.innerHTML = `
    <div style="margin-bottom: 24px;">
      <span class="insight-cat" style="margin-bottom: 10px; display: inline-block;">${art.category}</span>
      <h2 style="font-size: 1.7rem; font-weight: 800; color: #09090b; line-height: 1.3;">${art.title}</h2>
      <div style="font-size: 0.85rem; color: #64748b; margin-top: 8px; font-weight: 500;">Published by Temitayo Oyedeji · ${art.date} · ${art.readTime}</div>
    </div>

    <div style="color: #334155; font-size: 1rem; line-height: 1.8;">
      ${formatArticleContent(art.content)}
    </div>

    <div style="margin-top: 32px; border-top: 1px solid var(--border-light); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
      <span style="font-size: 0.85rem; color: #64748b;">Author: Temitayo Oyedeji | UAV HUB SYSTEMS</span>
      <a href="#contact" class="btn btn-primary btn-sm" onclick="closeAllModals()">Reach Out / Collaborate</a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

window.openCredentialModal = function(id) {
  const quals = store.getQualifications();
  const q = quals.find(item => item.id === id);
  if (!q) return;

  const modal = document.getElementById('genericModal');
  const body = document.getElementById('genericModalBody');

  const isDronePilot = q.id === 'qual-5' || q.flyerId;
  const isTrcn = q.id === 'qual-4';

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px;">
      <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main);">${q.title}</h2>
      <p style="font-size: 1rem; color: var(--brand-teal); font-weight: 600; margin-top: 4px;">${q.institution}</p>
      ${q.year ? `<span style="font-size: 0.85rem; color: var(--text-muted);">Attainment: ${q.year}</span>` : ''}
    </div>

    ${(q.regNumber || q.flyerId || q.rcNumber) ? `
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
        <div style="border-bottom: 1px solid var(--border-light); padding-bottom: 12px; margin-bottom: 14px;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">Statutory Authority</div>
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-top: 2px;">${q.institution}</div>
        </div>

        ${isTrcn ? `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; margin-top: 12px;">
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #1e40af; font-weight: 700; letter-spacing: 0.5px;">Teacher Registration No.</div>
              <div style="font-size: 1.05rem; font-weight: 800; color: #1d4ed8; font-family: var(--font-mono); margin-top: 2px;" title="Masked for privacy — Official verification available via request">LA/R/***43</div>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #166534; font-weight: 700; letter-spacing: 0.5px;">Certificate No.</div>
              <div style="font-size: 1.05rem; font-weight: 800; color: #15803d; font-family: var(--font-mono); margin-top: 2px;" title="Masked for privacy — Official verification available via request">****802</div>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #475569; font-weight: 700; letter-spacing: 0.5px;">Date of Certification</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #334155; margin-top: 2px;">${q.issuedDate}</div>
            </div>
          </div>
        ` : ''}

        ${isDronePilot ? `
          <div style="display: flex; justify-content: center; gap: 10px; margin-top: 12px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" onclick="closeAllModals(); openDocRequestModal('UK CAA Flyer ID');">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request Flyer ID
            </button>
            <button class="btn btn-secondary btn-sm" onclick="closeAllModals(); openDocRequestModal('CAC Certificate');">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request CAC Certificate
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; margin-top: 14px;">
            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #0369a1; font-weight: 700; letter-spacing: 0.5px;">UK CAA Flyer ID</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: #0284c7; font-family: var(--font-mono); margin-top: 2px;">GBR-RP-58MN••••••8</div>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #166534; font-weight: 700; letter-spacing: 0.5px;">Operational Category</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: #15803d; margin-top: 2px;">${q.flyerCategory}</div>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #475569; font-weight: 700; letter-spacing: 0.5px;">Expiry Date</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #334155; margin-top: 2px;">${q.flyerExpiry}</div>
            </div>
          </div>
        ` : (q.rcNumber || q.tinNumber ? `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 12px;">
            ${q.rcNumber ? `
              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
                <div style="font-size: 0.75rem; text-transform: uppercase; color: #166534; font-weight: 700; letter-spacing: 0.5px;">Company Registration No.</div>
                <div style="font-size: 1rem; font-weight: 800; color: #15803d; font-family: var(--font-mono); margin-top: 2px;">${q.rcNumber}</div>
              </div>` : ''}
            ${q.tinNumber ? `
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
                <div style="font-size: 0.75rem; text-transform: uppercase; color: #1e40af; font-weight: 700; letter-spacing: 0.5px;">Tax Identification No (TIN)</div>
                <div style="font-size: 1rem; font-weight: 800; color: #1d4ed8; font-family: var(--font-mono); margin-top: 2px;">${q.tinNumber}</div>
              </div>` : ''}
            ${q.dateIncorporated ? `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
                <div style="font-size: 0.75rem; text-transform: uppercase; color: #475569; font-weight: 700; letter-spacing: 0.5px;">Date of Incorporation</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #334155; margin-top: 2px;">${q.dateIncorporated}</div>
              </div>` : ''}
          </div>
        ` : '')}
      </div>
    ` : ''}

    <div style="background: #f8fafc; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; margin-bottom: 24px;">
      <h4 style="font-size: 0.95rem; color: #09090b; margin-bottom: 8px; font-weight: 700;">Qualification Summary & Scope</h4>
      <p style="font-size: 0.95rem; color: #475569; line-height: 1.7;">${q.description}</p>
    </div>

    <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
      <button class="btn btn-secondary btn-sm" onclick="closeAllModals()">Close</button>
      ${isTrcn ? `
        <button class="btn btn-primary btn-sm" onclick="closeAllModals(); openDocRequestModal('TRCN Certificate');">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Request Certificate
        </button>
      ` : ''}
      ${isDronePilot ? `
        <button class="btn btn-primary btn-sm" onclick="closeAllModals(); openDocRequestModal('UK CAA Flyer ID');">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Request Flyer ID
        </button>
        <button class="btn btn-secondary btn-sm" onclick="closeAllModals(); openDocRequestModal('CAC Certificate');">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Request CAC Certificate
        </button>
      ` : ''}
      ${(q.certificateImage && !isTrcn && !isDronePilot) ? `
        <a href="${q.certificateImage}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Open Original Certificate
        </a>
      ` : ''}
      ${(q.certificatePdf && !isTrcn && !isDronePilot) ? `
        <a href="${q.certificatePdf}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Open Document (PDF)
        </a>
      ` : ''}
      <a href="#contact" class="btn btn-outline-sky btn-sm" onclick="closeAllModals(); selectService('UAV / Drone Services')">Request Engagement / Hire</a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

// Contact Form & Enquiry System (Linked Directly to WhatsApp)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const organization = document.getElementById('contactOrg').value.trim();
    const service = document.getElementById('contactService').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !service || !message) {
      showToast('Please fill in all required fields (Name, Email, Service, Message)', 'error');
      return;
    }

    const enquiry = {
      name,
      email,
      phone: phone || 'N/A',
      organization: organization || 'Individual',
      service,
      message
    };

    // Store in CRM for record keeping
    store.saveEnquiry(enquiry);

    // Format pre-filled WhatsApp message with client details
    const waMessage = 'Hi Temitayo, I would like to make an enquiry from your portfolio:\n\n' +
      '*Name:* ' + name + '\n' +
      '*Email:* ' + email + '\n' +
      '*Phone/WhatsApp:* ' + (phone || 'N/A') + '\n' +
      '*Organization:* ' + (organization || 'N/A') + '\n' +
      '*Service of Interest:* ' + service + '\n\n' +
      '*Message:*\n' + message;

    const waUrl = 'https://wa.me/2348035472186?text=' + encodeURIComponent(waMessage);

    form.reset();
    showToast('Enquiry saved! Opening WhatsApp to send your message...', 'success');

    const win = window.open(waUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = waUrl;
    }
  });
}

window.selectService = function(serviceName) {
  const select = document.getElementById('contactService');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName) || select.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
};

window.selectServiceFromProject = function(category) {
  if (category === 'ai-ml') selectService('AI / Machine Learning');
  else if (category === 'uav') selectService('UAV / Drone');
  else if (category === 'stem') selectService('STEM Education');
};

// Document Download Handlers
window.downloadDocument = function(docType) {
  if (docType === 'cv') {
    const link = document.createElement('a');
    link.href = 'assets/Temitayo_Oyedeji_Professional_CV.pdf';
    link.download = 'Temitayo_Oyedeji_Professional_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading Temitayo Oyedeji Professional CV (PDF)...', 'success');
  } else if (docType === 'profile') {
    const link = document.createElement('a');
    link.href = 'assets/Oyedeji_Temitayo_Samson_Executive_Profile.pdf';
    link.download = 'Oyedeji_Temitayo_Samson_Executive_Profile.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading Temitayo Oyedeji Executive Profile (PDF)...', 'success');
  } else if (docType === 'uavhub') {
    const link = document.createElement('a');
    link.href = 'assets/UAV_HUB_SYSTEMS_Company_Profile.pdf';
    link.download = 'UAV_HUB_SYSTEMS_Company_Profile.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading UAV HUB SYSTEMS Official Company Profile (PDF)...', 'success');
  }
};

function generateAndDownloadDoc(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Toast System
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderColor = '#ef4444';
  } else if (type === 'success') {
    toast.style.borderColor = '#0284c7';
  }

  toast.innerHTML = `
    <span style="color: ${type === 'error' ? '#ef4444' : '#0284c7'}; font-weight: bold;">${type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Admin Dashboard & CMS Functionality
function initAdminDashboard() {
  const adminToggle = document.getElementById('adminToggleBtn');
  const adminModal = document.getElementById('adminModal');
  if (!adminToggle || !adminModal) return;

  adminToggle.addEventListener('click', () => {
    openAdminModal();
  });
}

window.openAdminModal = function() {
  const modal = document.getElementById('adminModal');
  renderAdminEnquiries();
  renderAdminProjects();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

window.switchAdminTab = function(tabName, element) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  document.querySelectorAll('.admin-tab-content').forEach(tab => tab.style.display = 'none');
  const target = document.getElementById(`adminTab-${tabName}`);
  if (target) target.style.display = 'block';
};

function renderAdminEnquiries() {
  const container = document.getElementById('adminEnquiriesTableContainer');
  if (!container) return;

  const enquiries = store.getEnquiries();
  if (enquiries.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 20px 0;">No client enquiries received yet. Test by submitting the contact form on the home page!</p>`;
    return;
  }

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Organization</th>
          <th>Service</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        ${enquiries.map(e => `
          <tr>
            <td>${e.createdAt}</td>
            <td><strong style="color: #09090b;">${e.name}</strong></td>
            <td>${e.email}<br/><small style="color: var(--text-muted);">${e.phone}</small></td>
            <td>${e.organization}</td>
            <td><span class="tech-pill" style="color: #0284c7; border-color: #bae6fd; background: #f0f9ff; font-weight: 600;">${e.service}</span></td>
            <td><small style="color: #334155;">${e.message}</small></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderAdminProjects() {
  const container = document.getElementById('adminProjectsList');
  if (!container) return;

  const projects = store.getProjects();
  container.innerHTML = projects.map(p => `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8fafc; border: 1px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 8px;">
      <div>
        <strong style="color: #09090b;">${p.title}</strong>
        <div style="font-size: 0.8rem; color: #0284c7; font-weight: 600;">${p.categoryName || p.category} · Role: ${p.role}</div>
      </div>
      <div>
        <button class="btn btn-secondary btn-sm" onclick="deleteAdminProject('${p.id}')" style="color: #ef4444;">Delete</button>
      </div>
    </div>
  `).join('');
}

window.handleCreateProject = function(e) {
  e.preventDefault();
  const title = document.getElementById('newProjTitle').value.trim();
  const category = document.getElementById('newProjCategory').value;
  const role = document.getElementById('newProjRole').value.trim();
  const problem = document.getElementById('newProjProblem').value.trim();
  const solution = document.getElementById('newProjSolution').value.trim();
  const outcome = document.getElementById('newProjOutcome').value.trim();
  const technologies = document.getElementById('newProjTech').value.split(',').map(s => s.trim()).filter(Boolean);
  const image = document.getElementById('newProjImage').value.trim() || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
  const githubUrl = document.getElementById('newProjGithub').value.trim();

  if (!title || !problem || !solution) {
    showToast('Please provide Title, Problem, and Solution', 'error');
    return;
  }

  const newProj = {
    title,
    category,
    categoryName: category === 'ai-ml' ? 'AI & Machine Learning' : category === 'uav' ? 'UAV & Drones' : 'STEM Education',
    role: role || 'Lead Developer',
    problem,
    solution,
    outcome: outcome || 'Successful implementation and deployment.',
    technologies: technologies.length ? technologies : ['Python', 'AI/ML', 'STEM'],
    image,
    githubUrl: githubUrl || '#'
  };

  store.saveProject(newProj);
  renderProjects();
  renderAdminProjects();
  document.getElementById('addProjectForm').reset();
  showToast('New project created and published live!', 'success');
};

window.deleteAdminProject = function(id) {
  if (confirm('Are you sure you want to delete this project?')) {
    store.deleteProject(id);
    renderProjects();
    renderAdminProjects();
    showToast('Project removed.', 'info');
  }
};


// ==================== DOCUMENT VERIFICATION REQUEST SYSTEM ====================
const DOC_CONFIGS = {
  'TRCN Certificate': {
    title: 'TRCN Professional Teacher Certificate',
    subject: 'Document Request: TRCN Certificate',
    defaultReason: 'Please share your TRCN certificate for verification purposes.'
  },
  'UK CAA Flyer ID': {
    title: 'UK CAA Drone Pilot Flyer ID Document',
    subject: 'Document Request: UK CAA Flyer ID',
    defaultReason: 'Please share your UK CAA Flyer ID for verification purposes.'
  },
  'CAC Certificate': {
    title: 'UAV HUB SYSTEMS CAC Certificate',
    subject: 'Document Request: CAC Certificate',
    defaultReason: 'Please share your CAC Certificate for verification purposes.'
  }
};

window.openDocRequestModal = function(docType) {
  const config = DOC_CONFIGS[docType] || {
    title: docType,
    subject: 'Document Request: ' + docType,
    defaultReason: 'Please share your ' + docType + ' for verification purposes.'
  };

  const modal = document.getElementById('docRequestModal');
  const mailtoUrl = 'mailto:tplusonice@gmail.com?subject=' + encodeURIComponent(config.subject) + '&body=' + encodeURIComponent(config.defaultReason);

  if (!modal) {
    window.location.href = mailtoUrl;
    return;
  }

  const typeInput = document.getElementById('docReqDocType');
  const heading = document.getElementById('docReqModalHeading');
  const reasonInput = document.getElementById('docReqReason');
  const mailtoLink = document.getElementById('docReqMailtoLink');

  if (typeInput) typeInput.value = docType;
  if (heading) heading.textContent = 'Request ' + config.title;
  if (reasonInput) reasonInput.value = config.defaultReason;
  if (mailtoLink) mailtoLink.href = mailtoUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lenis !== 'undefined' && lenis) lenis.stop();
};

window.handleDocRequestSubmit = function(e) {
  e.preventDefault();
  const docType = document.getElementById('docReqDocType') ? document.getElementById('docReqDocType').value : 'Certificate';
  const config = DOC_CONFIGS[docType] || {
    title: docType,
    subject: 'Document Request: ' + docType,
    defaultReason: 'Please share your ' + docType + ' for verification purposes.'
  };

  const name = document.getElementById('docReqName') ? document.getElementById('docReqName').value.trim() : '';
  const email = document.getElementById('docReqEmail') ? document.getElementById('docReqEmail').value.trim() : '';
  const org = document.getElementById('docReqOrg') ? document.getElementById('docReqOrg').value.trim() : '';
  const reason = document.getElementById('docReqReason') ? document.getElementById('docReqReason').value.trim() : '';

  if (!name || !email || !reason) {
    if (typeof showToast === 'function') showToast('Please fill in Name, Email, and Reason for request.', 'error');
    return;
  }

  // Record submission in CRM
  if (typeof store !== 'undefined' && store.saveEnquiry) {
    store.saveEnquiry({
      name: name,
      email: email,
      phone: 'N/A',
      organization: org || 'Independent Verifier',
      service: 'Document Request: ' + docType,
      message: 'Requested: ' + config.title + '\nReason: ' + reason
    });
  }

  const mailBody = 'Full Name: ' + name + '\nEmail: ' + email + '\nOrganization: ' + (org || 'N/A') + '\nDocument: ' + config.title + '\n\nReason for Request:\n' + reason;
  const mailtoUrl = 'mailto:tplusonice@gmail.com?subject=' + encodeURIComponent(config.subject) + '&body=' + encodeURIComponent(mailBody);

  if (typeof closeAllModals === 'function') closeAllModals();
  const form = document.getElementById('docRequestForm');
  if (form) form.reset();

  if (typeof showToast === 'function') {
    showToast('Document request recorded! Opening email client to send verification notice...', 'success');
  }

  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 400);
};

// ==========================================================================
// AUDIO EXECUTIVE PROFILE PLAYER & CONTINUOUS AUTO-REPEAT CONTROLLER
// ==========================================================================

let isAudioProfileInitialized = false;

function initAudioProfilePlayer() {
  if (isAudioProfileInitialized) return;
  isAudioProfileInitialized = true;

  const audio = document.getElementById('audioProfile');
  const heroBtn = document.getElementById('heroAudioToggleBtn');

  // Portrait image dock elements
  const portraitDock = document.getElementById('portraitAudioDock');
  const portraitPlayBtn = document.getElementById('portraitAudioPlayBtn');
  const portraitMuteBtn = document.getElementById('portraitAudioMuteBtn');
  const portraitTimeEl = document.getElementById('portraitAudioTime');
  const portraitProgressFill = document.getElementById('portraitAudioProgressFill');

  if (!audio) return;

  // Enforce auto-repeat loop attribute and ended listener fallback
  audio.loop = true;
  audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play().catch(function(err) {
      console.log('Audio loop restart notice:', err);
    });
  });

  // Restore saved volume preference if available
  const savedVolume = localStorage.getItem('temitayo_audio_volume');
  if (savedVolume !== null) {
    audio.volume = parseFloat(savedVolume);
  } else {
    audio.volume = 0.85;
  }

  // Format seconds to mm:ss helper
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  // Update playback UI State
  function updatePlayState(isPlaying) {
    if (portraitDock) {
      if (isPlaying) {
        portraitDock.classList.add('is-playing');
      } else {
        portraitDock.classList.remove('is-playing');
      }
    }

    if (portraitPlayBtn) {
      const playIcon = portraitPlayBtn.querySelector('.audio-ctrl-play');
      const pauseIcon = portraitPlayBtn.querySelector('.audio-ctrl-pause');
      if (playIcon && pauseIcon) {
        playIcon.style.display = isPlaying ? 'none' : 'inline-block';
        pauseIcon.style.display = isPlaying ? 'inline-block' : 'none';
      }
    }

    if (heroBtn) {
      if (isPlaying) {
        heroBtn.classList.add('is-playing');
      } else {
        heroBtn.classList.remove('is-playing');
      }
      const playIcon = heroBtn.querySelector('.audio-icon-play');
      const pauseIcon = heroBtn.querySelector('.audio-icon-pause');
      const btnText = heroBtn.querySelector('.audio-btn-text');
      if (playIcon && pauseIcon) {
        playIcon.style.display = isPlaying ? 'none' : 'inline-block';
        pauseIcon.style.display = isPlaying ? 'inline-block' : 'none';
      }
      if (btnText) {
        btnText.textContent = isPlaying ? 'Pause Audio' : 'Audio Profile';
      }
    }
  }

  audio.addEventListener('play', function() {
    updatePlayState(true);
  });

  audio.addEventListener('pause', function() {
    updatePlayState(false);
  });

  audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      if (portraitProgressFill) portraitProgressFill.style.width = percent + '%';
      if (portraitTimeEl) {
        portraitTimeEl.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
      }
    }
  });

  audio.addEventListener('loadedmetadata', function() {
    if (portraitTimeEl && audio.duration) {
      portraitTimeEl.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
    }
  });

  // Autoplay handler with graceful interaction fallback
  function startAutoplay() {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(function() {
        updatePlayState(true);
      }).catch(function(error) {
        // Modern browser autoplay policy prevented immediate unmuted playback
        // Set one-time listener on user interaction to start playing smoothly
        const startOnUserInteraction = function() {
          audio.play().then(function() {
            updatePlayState(true);
          }).catch(function(e) {
            console.log('Interaction play fallback notice:', e);
          });
          window.removeEventListener('click', startOnUserInteraction);
          window.removeEventListener('touchstart', startOnUserInteraction);
          window.removeEventListener('keydown', startOnUserInteraction);
          window.removeEventListener('scroll', startOnUserInteraction);
        };

        window.addEventListener('click', startOnUserInteraction, { once: true, passive: true });
        window.addEventListener('touchstart', startOnUserInteraction, { once: true, passive: true });
        window.addEventListener('keydown', startOnUserInteraction, { once: true, passive: true });
        window.addEventListener('scroll', startOnUserInteraction, { once: true, passive: true });
      });
    }
  }

  // Attempt initial playback
  setTimeout(startAutoplay, 600);
}

// Global Audio Profile Control Functions
window.toggleAudioProfile = function() {
  const audio = document.getElementById('audioProfile');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(function() {
      if (typeof showToast === 'function' && !sessionStorage.getItem('audio_toast_shown')) {
        showToast('🎙️ Playing Executive Audio Profile (Auto-Repeat ON)', 'info');
        sessionStorage.setItem('audio_toast_shown', 'true');
      }
    }).catch(function(err) {
      console.warn('Playback request error:', err);
    });
  } else {
    audio.pause();
  }
};

window.toggleAudioMute = function() {
  const audio = document.getElementById('audioProfile');
  const portraitMuteBtn = document.getElementById('portraitAudioMuteBtn');
  if (!audio) return;

  audio.muted = !audio.muted;

  if (portraitMuteBtn) {
    const volHigh = portraitMuteBtn.querySelector('.vol-icon-high');
    const volMuted = portraitMuteBtn.querySelector('.vol-icon-muted');
    if (volHigh && volMuted) {
      volHigh.style.display = audio.muted ? 'none' : 'inline-block';
      volMuted.style.display = audio.muted ? 'inline-block' : 'none';
    }
  }
};

window.setAudioVolume = function(val) {
  const audio = document.getElementById('audioProfile');
  if (!audio) return;
  const num = parseFloat(val);
  audio.volume = num;
  audio.muted = (num === 0);
  localStorage.setItem('temitayo_audio_volume', num.toString());

  const portraitMuteBtn = document.getElementById('portraitAudioMuteBtn');
  if (portraitMuteBtn) {
    const volHigh = portraitMuteBtn.querySelector('.vol-icon-high');
    const volMuted = portraitMuteBtn.querySelector('.vol-icon-muted');
    if (volHigh && volMuted) {
      volHigh.style.display = (audio.muted || num === 0) ? 'none' : 'inline-block';
      volMuted.style.display = (audio.muted || num === 0) ? 'inline-block' : 'none';
    }
  }
};

window.seekAudio = function(e) {
  const audio = document.getElementById('audioProfile');
  const targetBar = e.currentTarget;
  if (!audio || !targetBar || !audio.duration) return;

  const rect = targetBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const fraction = Math.max(0, Math.min(1, clickX / rect.width));
  audio.currentTime = fraction * audio.duration;
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAudioProfilePlayer);
} else {
  initAudioProfilePlayer();
}



