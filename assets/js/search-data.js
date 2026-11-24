// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of projects I have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-brownian-motion-in-lean",
          title: 'Brownian Motion in Lean',
          description: "Formalising Brownian motion and stochastic integration in Lean 4.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brownian-motion-contributor/";
            },},{id: "projects-undergraduate-mathematics-notes-king-39-s-college-london",
          title: 'Undergraduate Mathematics Notes (King&amp;#39;s College London)',
          description: "My undergraduate maths notes from King&#39;s College London",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bsc-mathematics-notes-kcl/";
            },},{id: "projects-bsc-thesis",
          title: 'BSc Thesis',
          description: "Algorithmic Problems in Group Theory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bsc-thesis/";
            },},{id: "projects-formal-conjectures",
          title: 'Formal Conjectures',
          description: "Contributing to Google DeepMind&#39;s Formal Conjectures repository in Lean 4.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/formal-conjectures/";
            },},{id: "projects-mathlib-contributor",
          title: 'Mathlib Contributor',
          description: "Contributing to Lean 4&#39;s official community mathematics library.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mathlib-contributor/";
            },},{id: "projects-msc-pure-mathematics-notes-imperial-college-london",
          title: 'MSc Pure Mathematics Notes (Imperial College London)',
          description: "My postgraduate maths notes from Imperial College London",
          section: "Projects",handler: () => {
              window.location.href = "/projects/msc-pure-mathematics-notes-imperial/";
            },},{id: "projects-msc-thesis",
          title: 'MSc Thesis',
          description: "Towards a Formalisation of the Kakeya Conjecture in ℝ²",
          section: "Projects",handler: () => {
              window.location.href = "/projects/msc-thesis/";
            },},{id: "projects-rockstar-games-gta-vi",
          title: 'Rockstar Games — GTA VI',
          description: "Data Scientist intern in Player Insights &amp; Analytics at Rockstar London, credited in Grand Theft Auto VI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rockstar-games-gta-vi/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6E%63%32%34@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fchotuck", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FrankieNC", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];