/* ==========================================================================
   YOUR CONTENT: edit everything about you in this one file.

   * Change the text between the quotes. Keep the commas and the quotes.
   * Save the file and refresh the page. No build step is needed.
   * Lines marked  PLACEHOLDER  are NOT real. Replace them with your own.
   * Nothing here claims years of experience, clients, jobs or qualifications.
   ========================================================================== */

window.PORTFOLIO = {

  /* ======================================================================
     1. SITE
     ====================================================================== */
  site: {
    /* Brand shown in the navbar and footer. */
    brand: 'Ethel-devs',
    role: 'Web Developer',

    /* ---- PLACEHOLDER personal details ----------------------------------- */
    name: 'Ethelbert Emmanuel', // PLACEHOLDER
    email: 'mikedavies0236@gmail.com', // PLACEHOLDER
    location: 'Lagos, Nigeria', // PLACEHOLDER
    phone: '+234 901 260 1193, +234 707 472 8451', // Optional. Leave '' to hide it. Example: '+234 800 000 0000'
    availability: 'Open to new projects', // PLACEHOLDER: change to what is true for you

    /* ---- Your photo (optional) -------------------------------------------
       Put your picture in the "images" folder, then write its path here,
       for example: 'images/portrait.png'. Leave '' to show the illustration.
       A transparent PNG of your head and shoulders looks best.              */
    portrait: 'images/potrait.png',

    /* ---- Contact form (optional) ------------------------------------------
       Paste the address of a form service (for example a Formspree form URL)
       to make the contact form really send messages. While this is '' the
       form runs in demo mode and says clearly that nothing is delivered.    */
    formEndpoint: 'https://formspree.io/f/xbggdgdb',

    /* ---- Social links -----------------------------------------------------
       PLACEHOLDER: these point to each site's home page. Replace them with
       your own profile links. Set a url to '' to hide that icon.
       Supported ids: github, linkedin, twitter, instagram                    */
    socials: [
      { id: 'github', label: 'GitHub', url: 'https://github.com/ethelbert-ways' },
      { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { id: 'twitter', label: 'X (Twitter)', url: 'https://x.com/CEOetheldevs' },
      { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/ceoetheldevs' },
    ],

    /* ---- Navigation (the five sections of the page). Leave as it is. ---- */
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],

    /* ---- Hero (top of the page) ------------------------------------------ */
    hero: {
      intro:
        "I'm a web developer passionate about building responsive interfaces, intuitive digital experiences, and reliable web applications. I work with modern frontend technologies and continue expanding my knowledge of backend development.",
      line: 'I build, design and improve web experiences.',
    },

    /* ---- About ------------------------------------------------------------ */
    about: {
      heading: 'A Developer Who Loves Solving Problems',
      paragraphs: [
        "I enjoy turning ideas into clean, responsive interfaces. I care about how a website feels as much as how it's built: quick to load, easy to use, and simple to maintain.",
        "I work mainly with HTML, CSS, JavaScript and React, and I'm actively learning backend development with Node.js so I can build complete, reliable web applications. I like solving problems step by step, writing readable code, and building with accessibility in mind.",
      ],
      /* icon must be one of: code, responsive, access, learn */
      approach: [
        { icon: 'code', label: 'Clean, readable code' },
        { icon: 'responsive', label: 'Responsive by default' },
        { icon: 'access', label: 'Accessible interfaces' },
        { icon: 'learn', label: 'Always learning' },
      ],
      quote: 'Write clean code, build for everyone, and never stop learning.', // PLACEHOLDER: write your own
    },

    /* ---- Contact ---------------------------------------------------------- */
    contact: {
      heading: 'Have a Project in Mind?',
      text: "I'm always happy to talk about new ideas, collaborations and challenges. Send a message and I'll get back to you.",
    },

    tagline: 'Code. Create. Build. Improve.',
  },

  /* ======================================================================
     2. SKILLS
     - "icon" must be one of: html, css, javascript, react, node, express,
       mongodb, git, github, vscode
     - placeholder: true  adds a "Placeholder" tag to the card. Delete that
       part once the skill is true for you.
     - No skill levels are shown on purpose.
     ====================================================================== */
  skillGroups: [
    {
      id: 'frontend',
      label: 'Frontend',
      note: 'What I build interfaces with.',
      items: [
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'React', icon: 'react' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      note: 'Placeholders until confirmed. I am still learning here.',
      items: [
        { name: 'Node.js', icon: 'node', placeholder: true },
        { name: 'Express.js', icon: 'express', placeholder: true },
        { name: 'MongoDB', icon: 'mongodb', placeholder: true },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      note: 'How I work day to day.',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
      ],
    },
  ],

  /* ======================================================================
     3. PROJECTS
     While this list is empty, the Projects section shows one "coming soon"
     placeholder card. To add a project, put it between the square brackets:

       {
         title: 'Project name',
         description: 'One or two sentences about what it does.',
         tags: ['React', 'CSS'],
         image: 'projects/my-project.png',   // file inside the "projects" folder
         liveUrl: 'https://example.com',
         repoUrl: 'https://github.com/you/repo',
       },

     Only "title" is required. Separate projects with a comma.
     ====================================================================== */
  projects: [],
}
