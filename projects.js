/**
 * Selected Work / Projects Case Study Data Store & Interactive Logic
 * Factual, technical, human-designed case study presentation.
 */

const caseStudiesData = {
  "01-cni": {
    number: "01",
    category: "CNI / Smart India Hackathon 2026",
    title: "AI-Powered Criminal Network Analysis System",
    subtitle: "Intelligence Analysis & Relationship Discovery Platform",
    overview:
      "An intelligence analysis platform built for Smart India Hackathon 2026, designed to help investigative teams uncover hidden patterns and relationships across complex multi-entity datasets including persons of interest, phone records, bank accounts, locations, calls, and financial transactions.",
    problem:
      "Investigative workflows frequently encounter fragmented intelligence across telecommunication CDR logs, banking ledger statements, and regional crime records. Analysts traditionally relied on disjointed spreadsheets, resulting in slow link analysis and missed multi-hop associations.",
    solution:
      "Engineered an integrated web platform combining graph databases and relational storage with an interactive Cytoscape.js network canvas. The system allows investigators to query multi-hop entity chains, filter by transaction thresholds or call frequencies, and visually trace relationships with full provenance tracking.",
    keyFeatures: [
      "Multi-entity link visualization across suspects, phone numbers, bank accounts, and geographic locations",
      "Shortest-path discovery and multi-hop relationship traversal between distant nodes",
      "Financial transaction timeline with flow-of-funds tracking and threshold alerts",
      "Telecom CDR call frequency matrix and shared IP/location clustering",
      "Strict provenance tracking for all imported intelligence records for evidentiary audit trails"
    ],
    technology: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Neo4j",
      "Cytoscape.js",
      "Recharts"
    ],
    myContribution:
      "Architected the interactive network visualization frontend using Cytoscape.js and Recharts, integrated REST API endpoints with the FastAPI backend, structured graph query models in Neo4j, and built the SIH 2026 hackathon prototype demonstration.",
    challenges:
      "Rendering high-density graph topologies containing hundreds of interconnected nodes without causing frame drops or browser freezing, and converting complex recursive graph queries into performant real-time API responses.",
    outcome:
      "Delivered a working prototype demonstrated at Smart India Hackathon 2026, successfully demonstrating instant visual discovery of hidden connections across thousands of mock transaction and CDR records.",
    links: {
      demo: "https://peru-oyster-657501.hostingersite.com/",
      hackathon: "Smart India Hackathon 2026"
    }
  },

  "02-fabbit": {
    number: "02",
    category: "Full-Stack E-Commerce & Operations",
    title: "Fabbit",
    subtitle: "Business Management Platform",
    overview:
      "A full-stack business management and e-commerce platform built with Next.js, designed to give businesses and independent manufacturing studios greater control over their product catalog, order workflows, and online operations.",
    problem:
      "Small-scale hardware and specialized custom manufacturing businesses struggle with standard monolithic e-commerce platforms that lack custom workflow control, granular role-based administrative capabilities, or integrated production status tracking.",
    solution:
      "Created a modern full-stack web application featuring a responsive storefront, authenticated role-based operations dashboard, integrated inventory management, and secure Razorpay payment processing.",
    keyFeatures: [
      "Role-based access control (Admin, Operator, Customer) with protected routes",
      "Dynamic product catalog with custom specifications and stock tracking",
      "End-to-end shopping cart and streamlined checkout flow",
      "Integrated Razorpay payment gateway with verified order lifecycle handling",
      "Order status pipeline management from pending payment to fulfillment"
    ],
    technology: [
      "Next.js",
      "React",
      "Node.js",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
      "Razorpay"
    ],
    myContribution:
      "Engineered the full-stack architecture using Next.js App Router, configured Prisma schemas for order and inventory entities, built administrative dashboard views, and integrated the Razorpay checkout and verification workflow.",
    challenges:
      "Managing synchronized server and client component states while implementing reliable role-based authorization middleware across sensitive administrative routes.",
    outcome:
      "Built a self-hosted business operations and commerce platform actively deployed to manage product lines, record customer orders, and process payments without reliance on proprietary third-party storefront locks.",
    links: {
      demo: "https://fabbit.org",
      hackathon: null
    }
  },

  "03-grocery-6d": {
    number: "03",
    category: "AI / Computer Vision",
    title: "Grocery Item 6D Pose Estimation",
    subtitle: "3D Position & Orientation Estimation using Synthetic Falcon Data",
    overview:
      "A computer vision project developed for a Duality AI hackathon focused on predicting the 6D pose (3D Cartesian position x,y,z and 3D rotational orientation roll, pitch, yaw) of grocery products using synthetic data generated on the Falcon platform.",
    problem:
      "Robotic automated checkout and robotic grasping systems require accurate spatial orientation to pick and scan items. Training these models with physical image capture is prohibitively expensive and difficult to scale across thousands of varied grocery packages.",
    solution:
      "Utilized photorealistic synthetic data generated via Duality AI's Falcon platform with ground-truth 3D bounding boxes to train vision models and visualize 6D pose predictions across diverse lighting and camera angles.",
    keyFeatures: [
      "6-Degrees-of-Freedom bounding box prediction (x, y, z translation + roll, pitch, yaw rotation)",
      "Synthetic training data pipeline generated using Duality AI Falcon simulator",
      "Interactive 3D bounding box visual inspection tool",
      "Coordinate axis visualization (RGB standard) representing object orientation vectors",
      "Evaluation against synthetic ground-truth spatial coordinates"
    ],
    technology: [
      "Python",
      "Computer Vision",
      "AI/ML",
      "3D Data",
      "Synthetic Data (Falcon)",
      "OpenCV",
      "Visualization Tools"
    ],
    myContribution:
      "Primary Contribution: Frontend, Presentation/PPT, and Project Visualization. Developed the web inspection interface for visualizing 3D bounding boxes and coordinate axes, prepared the comprehensive technical presentation deck, and led the team pitch during the Duality AI hackathon.",
    challenges:
      "Accurately projecting 3D coordinate frame transformations into clear 2D web visualizations and conveying complex 6D orientation metrics concisely to the judging panel.",
    outcome:
      "Successfully submitted to the Duality AI hackathon with an interactive visualization frontend demonstrating 6D bounding box accuracy on synthetic grocery items.",
    links: {
      demo: null,
      hackathon: "Duality AI Falcon Hackathon"
    }
  },

  "04-page-pulse": {
    number: "04",
    category: "Web Engineering / Training Project",
    title: "Page Pulse",
    subtitle: "Digital Heroes Training Project",
    overview:
      "A web project developed as part of the Digital Heroes training task, focusing on clean modular web development, backend functionality, API integration, and automated cloud deployment.",
    problem:
      "Rigorous industry training tasks require adhering to strict performance, accessibility, and architectural standards while building a cohesive web application and deploying it live.",
    solution:
      "Designed and implemented a modular web platform connecting front-end UI components to backend REST endpoints, with responsive styling and a continuous deployment pipeline configured on Vercel.",
    keyFeatures: [
      "Real-time page status and responsiveness monitoring metrics",
      "RESTful API endpoints for content and state retrieval",
      "Clean, lightweight UI built with semantic HTML, CSS, and modern JavaScript",
      "Automated CI/CD deployment configured via GitHub to Vercel",
      "Fully responsive layout optimized for mobile and desktop screens"
    ],
    technology: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Backend Services",
      "REST APIs",
      "Vercel"
    ],
    myContribution:
      "Executed the training task end-to-end: crafted the client-side interface, programmed backend request handlers, structured API responses, and managed live production deployment on Vercel.",
    challenges:
      "Ensuring lightweight bundle execution and reliable asynchronous error handling without relying on heavy third-party framework overhead.",
    outcome:
      "Successfully fulfilled all Digital Heroes training requirements and delivered a production-ready application deployed on Vercel.",
    links: {
      demo: "https://page-pulse-for-digital-heroes-training-task.vercel.app",
      hackathon: null
    }
  },

  "05-bambu-3d": {
    number: "05",
    category: "Hardware & IoT Systems",
    title: "Bambu 3D Printer Farm Management",
    subtitle: "Centralized Multi-Printer Monitoring & Telemetry",
    overview:
      "A specialized web-based platform for managing, monitoring, and supervising multiple Bambu 3D printers operating concurrently within a maker lab or production print farm.",
    problem:
      "Managing multiple physical 3D printers individually requires manual on-device inspections, leading to unobserved print failures, inefficient spool changes, and scheduling bottlenecks across machines.",
    solution:
      "Developed a centralized multi-printer control dashboard that aggregates live device telemetry, print completion percentages, thermal curves, and print queue allocations into a single responsive web interface.",
    keyFeatures: [
      "Real-time telemetry status cards for each connected printer (Bambu X1, P1S, A1)",
      "Nozzle and heated bed temperature monitoring gauges",
      "Filament spool tracking (material type, color, approximate remaining weight)",
      "Live print progress percentage bars and estimated time remaining (ETA)",
      "Multi-printer job scheduling queue and machine state indicators"
    ],
    technology: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "3D Printing Protocols",
      "IoT Telemetry"
    ],
    myContribution:
      "Designed and programmed the front-end dashboard interface in React, built reusable telemetry status cards, implemented print-progress calculation utilities, and organized multi-device queue states.",
    challenges:
      "Normalizing disparate device telemetry feeds and designing a high-density dashboard that remains scannable at a glance in an active workshop environment.",
    outcome:
      "Created a functional multi-printer management interface providing real-time visibility into print farm operations, reducing physical inspection downtime.",
    links: {
      demo: null,
      hackathon: null
    }
  },

  "06-my-paathshalla": {
    number: "06",
    category: "EdTech & Real-Time Collaboration",
    title: "My Paathshalla",
    subtitle: "Online Learning & Virtual Classroom Platform",
    overview:
      "An educational platform designed around structured live classes, organized lecture recordings, academic scheduling, and role-based experiences tailored for teachers and students.",
    problem:
      "Online educational workflows often scatter meeting links, class announcements, study materials, and recorded sessions across multiple unconnected tools, creating friction for both instructors and learners.",
    solution:
      "Built a consolidated learning portal featuring role-based Google OAuth authentication, integrated live classroom sessions, a lecture archive organized by subject and date, and an interactive schedule calendar.",
    keyFeatures: [
      "Role-based authentication and navigation tailored for Teachers vs. Students",
      "Integrated live class portal with calendar scheduling",
      "Subject-indexed repository of recorded video lectures and resources",
      "Secure user authentication powered by Google OAuth 2.0",
      "Interactive timetable tracking upcoming lectures and assignment due dates"
    ],
    technology: [
      "React",
      "JavaScript",
      "Node.js",
      "Google OAuth 2.0",
      "Web APIs",
      "CSS3"
    ],
    myContribution:
      "Developed core React interface modules, integrated Google OAuth authentication flows, designed role-specific views for students and teachers, and implemented the classroom schedule interface.",
    challenges:
      "Enforcing strict access boundaries between teacher administrative capabilities and student access permissions while maintaining an intuitive, uncluttered user experience.",
    outcome:
      "Delivered a working classroom portal that brings live interaction, calendar scheduling, and archival course materials into a single unified web environment.",
    links: {
      demo: null,
      hackathon: null
    }
  },

  "07-saferoute": {
    number: "07",
    category: "Civic Safety & Navigation",
    title: "SafeRoute",
    subtitle: "Women's Safety Route Planner",
    overview:
      "A safety-oriented route evaluation and navigation web platform created for the GL Bajaj SafeRoute Offline Hackathon, designed to classify walking and transit paths into Safe, Moderate, and High Risk categories based on tangible safety criteria.",
    problem:
      "Mainstream GPS navigation apps optimize strictly for shortest travel time or physical distance, frequently routing pedestrians through unlit, isolated alleyways or areas lacking emergency infrastructure.",
    solution:
      "Developed an algorithmic route safety scoring platform using PHP, MySQL, and JavaScript that assesses path options using quantifiable safety indicators including street lighting levels, police kiosk proximity, and reported incident frequency.",
    keyFeatures: [
      "Categorized route classification into Safe (Green), Moderate (Yellow), and High Risk (Red)",
      "Transparent safety parameter breakdown: street light coverage, active patrols, SOS booths",
      "Interactive route comparison map with color-coded path segments",
      "Quick emergency SOS trigger with immediate localized helpline access",
      "Algorithmic scoring system designed specifically without AI/ML complexity"
    ],
    technology: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Mapping APIs"
    ],
    myContribution:
      "Co-developed the project during the GL Bajaj SafeRoute Offline Hackathon: built the front-end map visualization interface, designed the safety breakdown cards, and contributed to the backend PHP/MySQL route scoring logic.",
    challenges:
      "Formulating a balanced, transparent multi-factor scoring formula under strict offline hackathon time constraints and ensuring users can immediately understand why a slightly longer path is safer.",
    outcome:
      "Presented a functioning civic safety prototype at the GL Bajaj SafeRoute Offline Hackathon, demonstrating practical, transparent safety-first route planning.",
    links: {
      demo: null,
      hackathon: "GL Bajaj SafeRoute Offline Hackathon"
    }
  }
};

/**
 * Initialize Modal and Interactive Features
 */
document.addEventListener("DOMContentLoaded", () => {
  initCaseStudyModal();
  initCategoryFilters();
  initPreviewInteractions();
  initContactForm();
});

/**
 * Case Study Modal Management
 */
function initCaseStudyModal() {
  const modalBackdrop = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const closeFooterBtn = document.getElementById("modal-footer-close-btn");

  if (!modalBackdrop) return;

  // Open modal triggers
  document.querySelectorAll("[data-case-study]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-case-study");
      openCaseStudy(projectId);
    });
  });

  // Close handlers
  const closeModal = () => {
    modalBackdrop.classList.remove("is-active");
    document.body.classList.remove("modal-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener("click", closeModal);

  // Close on backdrop click
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-active")) {
      closeModal();
    }
  });

  window.openCaseStudy = function (projectId) {
    const data = caseStudiesData[projectId];
    if (!data) return;

    // Populate Modal Elements
    const numEl = document.getElementById("modal-project-number");
    const catEl = document.getElementById("modal-project-category");
    const titleEl = document.getElementById("modal-project-title");
    const subEl = document.getElementById("modal-project-subtitle");

    if (numEl) numEl.textContent = data.number;
    if (catEl) catEl.textContent = data.category;
    if (titleEl) titleEl.textContent = data.title;
    if (subEl) subEl.textContent = data.subtitle;

    // Quick Metadata Grid
    const roleVal = document.getElementById("modal-meta-role");
    const techVal = document.getElementById("modal-meta-tech");
    const contextVal = document.getElementById("modal-meta-context");
    const statusVal = document.getElementById("modal-meta-status");

    if (roleVal) roleVal.textContent = data.myContribution.split(".")[0];
    if (techVal) techVal.textContent = data.technology.slice(0, 3).join(", ");
    if (contextVal) contextVal.textContent = data.category;
    if (statusVal) statusVal.textContent = data.links.hackathon || "Completed Project";

    // Text Content Sections
    const overviewEl = document.getElementById("modal-overview-text");
    const problemEl = document.getElementById("modal-problem-text");
    const solutionEl = document.getElementById("modal-solution-text");
    const contribEl = document.getElementById("modal-contrib-text");
    const challengesEl = document.getElementById("modal-challenges-text");
    const outcomeEl = document.getElementById("modal-outcome-text");

    if (overviewEl) overviewEl.textContent = data.overview;
    if (problemEl) problemEl.textContent = data.problem;
    if (solutionEl) solutionEl.textContent = data.solution;
    if (contribEl) contribEl.textContent = data.myContribution;
    if (challengesEl) challengesEl.textContent = data.challenges;
    if (outcomeEl) outcomeEl.textContent = data.outcome;

    // Key Features List
    const featuresListEl = document.getElementById("modal-features-list");
    if (featuresListEl) {
      featuresListEl.innerHTML = "";
      data.keyFeatures.forEach((feat) => {
        const li = document.createElement("li");
        li.textContent = feat;
        featuresListEl.appendChild(li);
      });
    }

    // Technology Tags
    const techContainer = document.getElementById("modal-tech-tags");
    if (techContainer) {
      techContainer.innerHTML = "";
      data.technology.forEach((tech) => {
        const span = document.createElement("span");
        span.className = "tech-tag";
        span.textContent = tech;
        techContainer.appendChild(span);
      });
    }

    // Live Demo Link
    const demoLink = document.getElementById("modal-demo-link");

    if (demoLink) {
      if (data.links.demo) {
        demoLink.href = data.links.demo;
        demoLink.style.display = "inline-flex";
      } else {
        demoLink.style.display = "none";
      }
    }

    // Show Modal
    modalBackdrop.classList.add("is-active");
    document.body.classList.add("modal-open");
    modalBackdrop.setAttribute("aria-hidden", "false");

    // Scroll modal body to top
    const scrollBody = modalBackdrop.querySelector(".modal-scroll-body");
    if (scrollBody) scrollBody.scrollTop = 0;
  };
}

/**
 * Filter Bar Logic (All, Featured, AI/ML, Full-Stack, Systems)
 */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-tab, .filter-btn");
  const projectCards = document.querySelectorAll("[data-category]");
  const dividerFeatured = document.getElementById("divider-featured");
  const dividerDomain = document.getElementById("divider-domain");
  const dividerCivic = document.getElementById("divider-civic");
  const containerFeatured = document.getElementById("container-featured");
  const containerDomain = document.getElementById("container-domain");

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter") || "all";

      let visibleInFeatured = 0;
      let visibleInDomain = 0;
      let visibleInCivic = 0;

      projectCards.forEach((card) => {
        const cardCats = (card.getAttribute("data-category") || "").split(/\s+/);
        const isMatch = filterVal === "all" || cardCats.includes(filterVal);

        if (isMatch) {
          card.style.display = "";
          card.style.opacity = "1";
          if (containerFeatured && containerFeatured.contains(card)) {
            visibleInFeatured++;
          } else if (containerDomain && containerDomain.contains(card)) {
            visibleInDomain++;
          } else if (card.id === "project-saferoute") {
            visibleInCivic++;
          }
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });

      // Show/Hide section dividers according to whether any projects in that section are visible
      if (dividerFeatured) dividerFeatured.style.display = visibleInFeatured > 0 ? "" : "none";
      if (containerFeatured) containerFeatured.style.display = visibleInFeatured > 0 ? "" : "none";

      if (dividerDomain) dividerDomain.style.display = visibleInDomain > 0 ? "" : "none";
      if (containerDomain) containerDomain.style.display = visibleInDomain > 0 ? "" : "none";

      if (dividerCivic) dividerCivic.style.display = visibleInCivic > 0 ? "" : "none";
    });
  });
}

/**
 * Interactive Preview Widgets inside mockups
 */
function initPreviewInteractions() {
  // CNI Graph Interactive Node Hover/Click
  const cniNodes = document.querySelectorAll(".cni-interactive-node");
  const cniTargetName = document.querySelector(".cni-target-name");
  const cniTargetRole = document.querySelector(".cni-target-role");

  if (cniNodes.length && cniTargetName) {
    cniNodes.forEach((node) => {
      node.addEventListener("click", () => {
        const name = node.getAttribute("data-node-name") || "Vikram R.";
        const type = node.getAttribute("data-node-type") || "Suspect (Node #842)";
        cniTargetName.textContent = name;
        if (cniTargetRole) cniTargetRole.textContent = type;

        cniNodes.forEach((n) => n.setAttribute("fill-opacity", "0.6"));
        node.setAttribute("fill-opacity", "1");
      });
    });
  }

  // SafeRoute Interactive Route Selector
  const routeCards = document.querySelectorAll(".route-choice-card");
  const routePaths = document.querySelectorAll(".map-route-path");

  if (routeCards.length && routePaths.length) {
    routeCards.forEach((card) => {
      card.addEventListener("click", () => {
        routeCards.forEach((c) => (c.style.opacity = "0.65"));
        card.style.opacity = "1";

        const routeId = card.getAttribute("data-route-id");
        routePaths.forEach((path) => {
          if (path.getAttribute("data-route-path") === routeId) {
            path.setAttribute("stroke-width", "4.5");
            path.setAttribute("opacity", "1");
          } else {
            path.setAttribute("stroke-width", "2");
            path.setAttribute("opacity", "0.4");
          }
        });
      });
    });
  }
}

/**
 * Asynchronous Contact Form Submission to sharmadiv888@gmail.com
 * Powered by FormSubmit.co API with instant feedback & email fallback
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = document.getElementById("contactSubmitBtn");
  const btnText = document.getElementById("submitBtnText");
  const btnIcon = document.getElementById("submitBtnIcon");
  const statusBox = document.getElementById("contactFormStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim() || "New Portfolio Inquiry";
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showStatus("Please fill in your name, email, and message.", "warning");
      return;
    }

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Sending Message...";
    if (btnIcon) btnIcon.textContent = "hourglass_empty";

    const payload = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      _template: "table",
      _captcha: "false",
      _subject: `Portfolio Message from ${name}: ${subject}`
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/sharmadiv888@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        form.reset();
        showStatus(
          "Thank you! Your message has been sent directly to Divyansh's email (sharmadiv888@gmail.com). You will receive a response shortly.",
          "success"
        );
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (err) {
      console.warn("Direct API submission note:", err);
      // Fallback: Provide direct mailto trigger so the user's message is never lost
      const mailtoLink = `mailto:sharmadiv888@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
      showStatus(
        `Unable to reach the automated dispatch service. <a href="${mailtoLink}" class="underline font-bold text-primary hover:text-white">Click here to send directly via your email client</a>.`,
        "error"
      );
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Send Message";
      if (btnIcon) btnIcon.textContent = "send";
    }
  });

  function showStatus(htmlMessage, type) {
    if (!statusBox) return;
    statusBox.classList.remove(
      "hidden",
      "bg-emerald-950/80",
      "text-emerald-300",
      "border-emerald-500/40",
      "bg-rose-950/80",
      "text-rose-300",
      "border-rose-500/40",
      "bg-amber-950/80",
      "text-amber-300",
      "border-amber-500/40"
    );
    statusBox.classList.add("border");

    if (type === "success") {
      statusBox.classList.add("bg-emerald-950/80", "text-emerald-300", "border-emerald-500/40");
    } else if (type === "error") {
      statusBox.classList.add("bg-rose-950/80", "text-rose-300", "border-rose-500/40");
    } else {
      statusBox.classList.add("bg-amber-950/80", "text-amber-300", "border-amber-500/40");
    }

    statusBox.innerHTML = htmlMessage;
    statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}
