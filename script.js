document.addEventListener("DOMContentLoaded", () => {
    const NAVIGATION_ITEMS = [
      { name: "HOME", path: "/" },
      { name: "SKILLS", path: "/skills" },
      { name: "PROJECTS", path: "/projects" },
      { name: "RESUME", path: "/resume" },
    ]
  
    const desktopMenu = document.getElementById("desktop-menu")
    const mobileMenuItems = document.getElementById("mobile-menu-items")
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")
    const content = document.getElementById("content")
  
    // Populate navigation menus
    NAVIGATION_ITEMS.forEach((item) => {
      const desktopLink = createNavLink(item)
      desktopMenu.appendChild(desktopLink)
  
      const mobileLink = createNavLink(item)
      mobileMenuItems.appendChild(mobileLink)
    })
  
    // Mobile menu toggle
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  
    // Router function
    function router() {
      const path = window.location.pathname
      switch (path) {
        case "/":
          renderHomePage()
          break
        case "/skills":
          renderSkillsPage()
          break
        case "/projects":
          renderProjectPage()
          break
        case "/resume":
          renderResumePage()
          break
        default:
          renderHomePage()
        
      }
    }
  
    // Initial route
    router()
  
    // Navigation link creator
    function createNavLink(item) {
      const link = document.createElement("a")
      link.href = item.path
      link.textContent = item.name
      link.className = "text-zinc-500 hover:text-zinc-300 transition-colors"
      link.addEventListener("click", (e) => {
        e.preventDefault()
        window.history.pushState({}, "", item.path)
        router()
      })
      return link
    }
  
    // Page render functions
    function renderHomePage() {
        // Cache-busting for image URL
     // const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhmQuVx235_YgiZBbG7BPiA22a7EjlV4qUg&s"
      //console.log("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhmQuVx235_YgiZBbG7BPiA22a7EjlV4qUg&s", imageUrl); // Debug the image path
      content.innerHTML = `
              <div class="container mx-auto px-4 py-16">
                  <div class="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                          <p class="text-blue-500 mb-2">WELCOME TO MY PROFILE</p>
                          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                              Hi, I'm <span class="text-blue-500">Keshav Roka</span>
                              <br />a Software Developer.
                          </h1>
                          <p class="text-zinc-400 mb-6">
                              As a software engineer, I have a strong passion for artificial intelligence and machine learning. 
                              <br /> I enjoy creating intelligent solutions that solve real-world problems 
                              <br/> and am particularly motivated by opportunities to design and build smart, data-driven systems with real impact.
                          </p>
                          <div class="flex space-x-4">
                              <a href="http://github.com/keshavroka55" class="p-2 bg-zinc-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                                  <i data-lucide="github" class="w-6 h-6"></i>
                              </a>
                              <a href="www.linkedin.com/in/keshav-roka-951699312" class="p-2 bg-zinc-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                                  <i data-lucide="linkedin" class="w-6 h-6"></i>
                              </a>
                              <a href="mailto:keshavrokaya1244@gmail.com" class="p-2 bg-zinc-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                                  <i data-lucide="mail" class="w-6 h-6"></i>
                              </a>
                              <!-- Facebook Link -->
                              <a href="https://www.facebook.com/profile.php?id=100056764401853" target="_blank" class="p-2 bg-zinc-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                                  <i data-lucide="facebook" class="w-6 h-6"></i>
                             
                          </div>
                      </div>
                      <div class="relative">
                          <img src="https://wallpapers.com/images/featured/solo-leveling-4k-r0x71qsxnuxe7gzo.jpg" alt="Profile" class="rounded-2xl" width="500" height="600">
                      </div>
                  </div>
              </div>
          `;
            // Re-initialize Lucide icons after a small delay
          setTimeout(() => {
            lucide.createIcons();
          }, 100); // 100ms delay
        }
  // the part to inset the features or attibutes that you have 
    function renderSkillsPage() {
  const skills = [
    {
      name: "Python",
      description: "Proficient in Python programming for data science, backend development, and automation.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "NumPy",
      description: "Efficient numerical operations and array manipulation for scientific computing.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    },
    {
      name: "Pandas",
      description: "Data manipulation and analysis with powerful data structures for tabular data.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    },
    {
      name: "Matplotlib",
      description: "Create static, animated, and interactive visualizations in Python.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    },
    {
      name: "Seaborn",
      description: "Statistical data visualization based on matplotlib with a high-level interface.",
      logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
    },
    {
      name: "Scikit-learn",
      description: "Experienced with machine learning algorithms for classification and regression.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "PyTorch",
      description: "Build and train deep learning models with dynamic computational graphs.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    },
    {
      name: "TensorFlow",
      description: "End-to-end open source platform for machine learning and deep neural networks.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    },
    {
      name: "FastAPI",
      description: "Build high-performance APIs using modern Python web tools.",
      logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    },
  ];

  const content = document.getElementById("content"); // make sure this element exists in your HTML

  content.innerHTML = `
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-2 text-white">Skills</h2>
        <p class="text-lg text-zinc-400">Technologies and tools I'm proficient in</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${skills
          .map(
            (skill) => `
          <div class="bg-zinc-800/50 rounded-lg p-6 transition-transform hover:scale-105">
            <div class="flex items-center justify-center h-16 mb-4">
              <img
                src="${skill.logo}"
                alt="${skill.name} logo"
                class="h-12 object-contain"
                onerror="this.src='/placeholder.svg'"
              />
            </div>
            <h3 class="text-xl font-semibold text-white text-center mb-2">${skill.name}</h3>
            <p class="text-zinc-400 text-center">${skill.description}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}


  // adding the project
    function renderProjectPage() {
      const projects = [1] // here increase the number as you increse the number of project.
  
      content.innerHTML = `
              <div class="container mx-auto px-4 py-16">
                  <div class="text-center mb-12">
                      <h1 class="text-4xl font-bold text-white mb-4">Project</h1>
                      <p class="text-zinc-400">Check out my latest projects</p>
                  </div>
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      ${projects
                        .map(
                          (item) => `
                          <div class="bg-zinc-800/50 rounded-xl overflow-hidden">
                              <div class="aspect-video bg-zinc-700"></div>
                              <div class="p-6">
                                  <h3 class="text-xl font-semibold text-white mb-2">Project ${item}</h3>
                                  <p class="text-zinc-400 mb-4">A brief description of the project and the technologies used.</p>
                                  <button class="button button-outline w-full">View Project</button>
                              </div>
                          </div>
                      `,
                        )
                        .join("")}
                  </div>
              </div>
          `
    }

  // here Resume one.
    // short version of cv certifications of skills that you have.
    function renderResumePage() {
      const experiences = [
        {
          title: "Null",
          company: "Void",
          period: "2025",
          description: "Void",
        },
      ]
  
      content.innerHTML = `
              <div class="container mx-auto px-4 py-16">
                  <div class="text-center mb-12">
                      <h1 class="text-4xl font-bold text-white mb-4">Resume</h1>
                      <p class="text-zinc-400">My professional journey</p>
                  </div>
                  <div class="max-w-3xl mx-auto">
                      ${experiences
                        .map(
                          (exp, index) => `
                          <div class="mb-8 bg-zinc-800/50 p-6 rounded-xl">
                              <h3 class="text-xl font-semibold text-white mb-2">${exp.title}</h3>
                              <p class="text-blue-500 mb-2">${exp.company} | ${exp.period}</p>
                              <p class="text-zinc-400">${exp.description}</p>
                          </div>
                      `,
                        )
                        .join("")}
                  </div>
              </div>
          `;
        }
          
    // Re-initialize Lucide icons after rendering the content
    lucide.createIcons();


    // Listen for popstate events
    window.addEventListener("popstate", router);
  });
