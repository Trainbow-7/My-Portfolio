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
      title: 'TrainbowHub - AI-Powered Adaptive Learning Engine',
      category: 'ai-ml',
      categoryName: 'AI & EdTech',
      problem: 'Nigerian students and teachers lack localized, adaptive intelligent tutoring systems that cater to diverse classroom paces and regional curriculum challenges.',
      solution: 'Engineered an intelligent study assistant utilizing custom NLP models, dynamic lesson planning tools, and real-time concept mastery analytics.',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'LLMs', 'JavaScript', 'Tailored NLP'],
      role: 'Lead AI Engineer & System Architect',
      outcome: 'Improved student assessment retention by 42% in pilot cohorts and reduced teacher lesson planning time by 60%.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
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
      title: 'Predictive Modeling on Nigerian Socio-Economic & Agri Datasets',
      category: 'ai-ml',
      categoryName: 'AI / Data Science',
      problem: 'Lack of clean, standardized local datasets for predicting commodity pricing volatility and agricultural harvest yields in Nigeria.',
      solution: 'Built automated ETL pipelines and gradient boosted regression models to forecast harvest prices and regional supply fluctuations.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Streamlit', 'Statsmodels'],
      role: 'Data Scientist & ML Developer',
      outcome: 'Achieved 89.4% prediction accuracy on multi-seasonal food basket index and published open notebooks for developer access.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
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
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
    },
    {
      id: 'proj-5',
      title: 'Computer Vision Defect Detection for Critical Infrastructure',
      category: 'ai-ml',
      categoryName: 'AI & Computer Vision',
      problem: 'Manual inspection of telecommunication masts and transmission lines is perilous, time-consuming, and prone to human oversight.',
      solution: 'Developed a YOLOv8 and PyTorch custom vision pipeline trained on high-altitude drone footage to automatically flag corrosion and structural fractures.',
      technologies: ['YOLOv8', 'OpenCV', 'PyTorch', 'Python', 'UAV Video Streaming'],
      role: 'Computer Vision Engineer',
      outcome: 'Identified structural defects with 94.2% precision, decreasing inspection turnaround time from days to hours.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#'
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
      regNumber: 'LA/R/13543',
      certNumber: '1332802',
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
    if (!localStorage.getItem('to_projects')) {
      localStorage.setItem('to_projects', JSON.stringify(DEFAULT_DATA.projects));
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
            if (!q.certificateImage || q.credentialUrl === '#credential-trcn') {
              q.credentialUrl = 'assets/trcn-certificate.jpg';
              q.certificateImage = 'assets/trcn-certificate.jpg';
              q.regNumber = 'LA/R/13543';
              q.certNumber = '1332802';
              q.issuedDate = 'March 5, 2020';
              updated = true;
            }
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

window.openProjectModal = function(id) {
  const projects = store.getProjects();
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  const modal = document.getElementById('projectDetailModal');
  const body = document.getElementById('projectModalBody');

  body.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h2 style="font-size: 1.8rem; font-weight: 800; color: #09090b;">${proj.title}</h2>
      <p style="color: #0284c7; font-weight: 700; font-size: 0.95rem; margin-top: 4px;">Role: ${proj.role}</p>
    </div>

    <div style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-light);">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;" />
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

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.95rem; color: #09090b; margin-bottom: 10px; font-weight: 700;">Technologies & Tools Deployed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${proj.technologies.map(t => `<span class="tech-pill" style="color: #0284c7; border-color: #bae6fd; background: #f0f9ff; font-weight: 600;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 12px; border-top: 1px solid var(--border-light); padding-top: 20px;">
      <a href="#contact" class="btn btn-primary btn-sm" onclick="closeAllModals(); selectServiceFromProject('${proj.category}')">Discuss Similar Project</a>
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
              <div style="font-size: 1.05rem; font-weight: 800; color: #1d4ed8; font-family: var(--font-mono); margin-top: 2px;">${q.regNumber}</div>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 10px 14px; text-align: center;">
              <div style="font-size: 0.75rem; text-transform: uppercase; color: #166534; font-weight: 700; letter-spacing: 0.5px;">Certificate No.</div>
              <div style="font-size: 1.05rem; font-weight: 800; color: #15803d; font-family: var(--font-mono); margin-top: 2px;">${q.certNumber}</div>
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
            ${q.flyerVerification ? `
              <a href="${q.flyerVerification}" target="_blank" rel="noopener" class="btn btn-outline-sky btn-sm" title="Verify on UK Civil Aviation Authority Register">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                Verify on UK CAA Register
              </a>
            ` : ''}
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

    <div style="background: #f0fdf4; border: 1px dashed #22c55e; border-radius: var(--radius-md); padding: 16px; text-align: center; margin-bottom: 24px;">
      <p style="font-size: 0.85rem; color: #15803d; font-weight: 600;">
        ${isDronePilot 
          ? 'Official proof of completion and registration certified by the United Kingdom Civil Aviation Authority (UK CAA).'
          : (isTrcn
            ? 'Official statutory credential record certified by the Teachers Registration Council of Nigeria under CAP T3 of 2004.'
            : 'Official academic and professional accreditation verified by statutory educational and industry authorities.')}
      </p>
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
