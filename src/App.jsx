import React from 'react';

function Trainer(){
  return <svg className="trainer" viewBox="0 0 24 36" role="img" aria-label="Pixel trainer with brown skin and black hair" shapeRendering="crispEdges">
    <path fill="#172e50" d="M7 1h10v2h3v7H5V4h2z"/><path fill="#ae693f" d="M6 8h13v9h-3v3H9v-3H6z"/><path fill="#d18b56" d="M8 9h10v7H8z"/><path fill="#172e50" d="M9 10h2v2H9zm6 0h2v2h-2z"/><path fill="#713d32" d="M11 15h4v1h-4z"/>
    <path fill="#e84043" d="M6 18h12v3h3v9H3v-9h3z"/><path fill="#fcfaf4" d="M10 18h5v11h-5z"/>
    <path className="trainer-arm trainer-arm-left" fill="#ae693f" d="M1 23h4v8H1z"/><path className="trainer-arm trainer-arm-right" fill="#ae693f" d="M19 23h4v8h-4z"/>
    <g className="trainer-leg trainer-leg-left"><path fill="#265a9a" d="M6 29h6v5H6z"/><path fill="#172e50" d="M4 34h7v2H4z"/><path fill="#fff" d="M4 34h5v1H4z"/></g>
    <g className="trainer-leg trainer-leg-right"><path fill="#265a9a" d="M13 29h5v5h-5z"/><path fill="#172e50" d="M13 34h7v2h-7z"/><path fill="#fff" d="M15 34h5v1h-5z"/></g>
  </svg>;
}
function Ball({className=''}){return <span aria-hidden="true" className={`pokeball ${className}`}><i/></span>}
const publicAsset = path => `${import.meta.env.BASE_URL}${path}`;
// Dates and metrics: October 2026 resume. Project details also use the linked repo READMEs.
export const PORTFOLIO_DATA = {
  work: [
    {
      id: 'europ-assistance',
      title: 'AI Engineer',
      company: 'Europ Assistance (Redion)',
      period: 'Sep 2026 – Present',
      note: 'Placement through Apr 2027',
      current: true,
      bullets: [
        'Engineered Python AI pipelines to optimize data workflows and eliminate manual processing.',
        'Built a Python RAG market intelligence system that retrieves and summarizes relevant data, reaching 90% accuracy across 100 questions.',
        'Integrated emerging LLMs into enterprise architecture and built SQL tracking for deployed AI performance and business impact.',
        'Designed secure, human-in-the-loop AI workflows for cross-functional teams.',
      ],
      tech: ['Python', 'SQL', 'RAG', 'AI orchestration'],
    },
    {
      id: 'utfr',
      title: 'Machine Learning Engineer',
      company: 'U of T Formula Racing',
      period: 'Jul 2026 – Present',
      current: true,
      bullets: [
        'Engineered a real-time perception pipeline using a custom YOLO network to process camera feeds for autonomous racecar navigation.',
        'Built cone detection and classification by colour and size to map track boundaries.',
        'Optimized inference to stream localized bounding boxes and confidence scores to downstream systems in real time.',
      ],
      // The resume names YOLO but does not specify the version or implementation stack.
      tech: ['YOLO', 'Computer vision', 'Real-time inference'],
    },
    {
      id: 'amacss',
      title: 'Software Engineer',
      company: 'AMACSS · University of Toronto',
      period: 'Sep 2025 – Present',
      current: true,
      bullets: [
        'Engineered a modular React front end for AMACSS web tools.',
        'Implemented internal software to automate event update pipelines.',
        'Improved client-side rendering and built scalable UI components to optimize web application performance.',
      ],
      tech: ['React', 'JavaScript', 'HTML/CSS'],
    },
    {
      id: 'flyrank',
      title: 'Software Engineer',
      company: 'Flyrank',
      // User-supplied role; dates and specific technologies are not in the local resume.
      period: 'Jun 2025 - Aug 2025',
      current: false,
      bullets: ['Built automated data pipelines and AI workflow delegation architectures.'],
      tech: ['Data pipelines', 'AI workflows'],
    },
  ],
  projects: [
    {
      id: 'refai',
      title: 'RefAI',
      subtitle: 'Automated Ping-Pong Referee',
      description: 'I built a referee that tracks the ball, detects table bounces, and scores rallies. A FastAPI backend sends live game state to the React interface.',
      metric: '90% bounce-detection accuracy · 7 fps',
      tech: ['Python', 'OpenCV', 'Kalman filter', 'FastAPI', 'React', 'NumPy'],
      sprite: publicAsset('sprites/charmander.gif'),
      links: [
        {label: 'Backend', url: 'https://github.com/ParamPate/AI-referee'},
        {label: 'Frontend', url: 'https://github.com/ParamPate/RefAI_FrontEnd'},
      ],
    },
    {
      id: 'nba-analysis',
      title: 'NBA Playoff AI',
      subtitle: 'Match Analysis System',
      description: 'I trained a Random Forest on 40 seasons of NBA metrics and built a dashboard for comparing teams and testing what-if scenarios. Matchup estimates derive from championship probabilities.',
      metric: '40 seasons · 78% holdout accuracy',
      tech: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Supabase', 'pandas', 'NumPy'],
      sprite: publicAsset('sprites/gengar.gif'),
      links: [{label: 'Repository', url: 'https://github.com/ParamPate/NBA-Playoff-AI-Match-Analysis-System'}],
    },
    {
      id: 'hands',
      title: 'H.A.N.D.S.',
      subtitle: 'Haptic Assisted Navigation & Detection',
      description: 'Our team built an accessibility prototype that locates Braille signs and tracks hand landmarks. It gives audio directions to guide a user’s finger toward the sign.',
      metric: '90% Braille detection accuracy · 7 fps',
      // The repo describes a laptop prototype; Raspberry Pi and haptics are future work.
      tech: ['Python', 'PyTorch', 'YOLOv8', 'MediaPipe', 'OpenCV', 'NumPy'],
      sprite: publicAsset('sprites/greninja.gif'),
      links: [{label: 'Repository', url: 'https://github.com/ParamPate/H.A.N.D.S'}],
    },
    {
      id: 'taam',
      title: 'Artifact Management System',
      subtitle: 'Toronto Asian Art Museum',
      description: 'Our team built an Android artifact management app for the Toronto Asian Art Museum, with Firebase-backed records and cloud image storage.',
      metric: 'The museum asked to use the system.',
      tech: ['Java', 'Android', 'Firebase', 'XML'],
      sprite: publicAsset('sprites/snivy.gif'),
      links: [{label: 'Repository', url: 'https://github.com/ParamPate/TAAM-Artifact-Management-System'}],
    },
  ],
  skills: [
    {category: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL', 'HTML/CSS']},
    {category: 'AI & Vision', items: ['PyTorch', 'YOLOv8', 'OpenCV', 'MediaPipe', 'scikit-learn', 'NumPy', 'pandas']},
    {category: 'Full-stack', items: ['React', 'Node.js', 'FastAPI', 'Flask', 'Supabase', 'SQLite']},
    {category: 'Systems & Hardware', items: ['Docker', 'AWS', 'Git', 'Linux/SSH', 'SLURM', 'Raspberry Pi', 'Arduino']},
  ],
};

function TechTags({items}) {
  return <div className="card-tags">
    {items.map(item => <span key={item}>{item}</span>)}
  </div>;
}

export default function App(){
 return <div className="site-shell">
  <a className="skip" href="#about">Skip to content</a>
  <header className="site-header">
   <a className="wordmark" href="#about" aria-label="Param Patel home">
    <Ball/>param<span>patel</span><span className="wordmark-dot">.</span>
   </a>
   <nav aria-label="Main navigation">
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
   </nav>
   <nav className="social-nav" aria-label="Social and contact links">
    <a href="https://github.com/ParamPate" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    <a href="https://www.linkedin.com/in/param-patel-9589b226a/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
    <a className="contact-link" href="mailto:para.patel@mail.utoronto.ca">Say hello <span aria-hidden="true">↗</span></a>
   </nav>
  </header>
  <main>
   <section id="about" className="intro" aria-labelledby="intro-title" tabIndex={-1}>
    <div className="intro-copy">
     <img className="charmander-accent" src={publicAsset('sprites/4.png')} alt="" width="96" height="96"/>
     <p className="eyebrow"><span/>TORONTO, ON · PLAYER ONE</p>
     <h1 id="intro-title">Hey, I’m<br/><span>Param.</span></h1>
<p className="bio">CS @ <strong>U of T</strong>. I write code, train neural networks, and build systems that see and think. Usually splitting my time between multi-agent workflows, perception pipelines, and way too many Valorant games.</p>
     <a className="hello-button" href="mailto:para.patel@mail.utoronto.ca">Let’s talk <span aria-hidden="true">↗</span></a>
     <div className="tiny-note"><span className="small-line"/> Always up for a good project.</div>
    </div>
    <div className="profile-side">
     <img className="rayquaza-accent" src={publicAsset('sprites/384.png')} alt="" width="96" height="96"/>
     <div className="profile-card">
      <div className="card-header"><span>TRAINER CARD</span><span>No. 001</span></div>
      <div className="trainer-scene">
       <div className="scene-orbit"/>
       <div className="scene-orbit inner"/>
       <span className="scene-plus p1">+</span>
       <span className="scene-plus p2">+</span>
       <div className="trainer-ground"/>
       <Trainer/>
       <img className="companion" src={publicAsset('sprites/25.png')} alt="" width="96" height="96"/>
       <span className="scene-caption">PARAM & PIKACHU</span>
      </div>
      <div className="card-info">
       <div><h2>Param Patel</h2><p>Developer. Teammate. Pokémon enthusiast.</p></div>
       <Ball/>
      </div>
      <div className="card-tags">
       <span>CS @ U OF T</span><span>AI + VISION</span><span>SOFTWARE DEVELOPER</span>
      </div>
     </div>
     <div className="card-footnote"><span aria-hidden="true">↳</span> A new adventure is always a good idea.</div>
    </div>
   </section>
   <section id="work" className="portfolio-section" aria-labelledby="work-title" tabIndex={-1}>
    <div className="section-heading">
     <div>
      <p className="eyebrow"><span/>QUEST LOG // WORK</p>
      <h2 id="work-title">Work experience</h2>
     </div>
     <p className="section-counter">GYM BADGES & QUEST LOG <Ball/></p>
    </div>
    <div className="work-list">
     {PORTFOLIO_DATA.work.map((role, index) => (
      <article id={role.id} key={role.id} tabIndex={-1}
        className="profile-card work-card">
       <div className="card-header">
        <span>LOG No. {String(index + 1).padStart(2, '0')}</span>
        <span className="role-status"><i className={role.current ? 'status-dot current-role' : 'status-dot'}/>{role.current ? 'CURRENT' : 'PAST'}</span>
       </div>
       <div className="work-body">
        <div className="role-summary">
         <h3>{role.title}</h3>
         <p className="company">{role.company}</p>
         <p className="role-period">{role.period}</p>
         {role.note && <p className="role-note">{role.note}</p>}
        </div>
        <div className="role-detail">
         <ul>{role.bullets.map(point => <li key={point}>{point}</li>)}</ul>
         <TechTags items={role.tech}/>
        </div>
       </div>
      </article>
     ))}
    </div>
   </section>

   <section id="projects" className="portfolio-section" aria-labelledby="projects-title" tabIndex={-1}>
    <div className="section-heading">
     <div>
      <p className="eyebrow"><span/>POKÉDEX // PROJECTS</p>
      <h2 id="projects-title">Featured projects</h2>
     </div>
     <p className="section-counter">FIELD RESEARCH / {String(PORTFOLIO_DATA.projects.length).padStart(2, '0')} ENTRIES</p>
    </div>
    <div className="project-grid">
     {PORTFOLIO_DATA.projects.map((project, index) => (
      <article id={project.id} key={project.id} tabIndex={-1}
        className="profile-card project-card">
       <div className="card-header">
        <span>ENTRY No. {String(index + 1).padStart(3, '0')}</span>
        <span aria-hidden="true">[ + ]</span>
       </div>
       <div className="project-body">
        <div className="project-heading">
         <div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div>
         <div className="sprite-slot" aria-hidden="true">
          <img src={project.sprite} alt="" width="96" height="96" loading="lazy"/>
         </div>
        </div>
        <p className="project-description">{project.description}</p>
        <p className="project-metric">{project.metric}</p>
        <TechTags items={project.tech}/>
        <div className="project-links">
         {project.links.map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
             aria-label={`${project.title}: ${link.label} on GitHub`}>
           {link.label} <span aria-hidden="true">↗</span>
          </a>
         ))}
        </div>
       </div>
      </article>
     ))}
    </div>
   </section>

   <section id="skills" className="portfolio-section" aria-labelledby="skills-title" tabIndex={-1}>
    <div className="section-heading">
     <div>
      <p className="eyebrow"><span/>TM CASE // SKILLS</p>
      <h2 id="skills-title">Technical skills</h2>
     </div>
     <p className="section-counter">MOVE POOL & INVENTORY</p>
    </div>
    <div className="profile-card skills-card">
     <div className="card-header"><span>SPEC SHEET</span></div>
     <div className="skill-matrix">
      {PORTFOLIO_DATA.skills.map(group => (
       <div className="skill-row" key={group.category}>
        <h3>{group.category}</h3>
        <div className="skill-pills">
         {group.items.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
  </main>
  <footer>
   <span>© {new Date().getFullYear()} Param Patel</span>
   <span>Built with curiosity. Fueled by friendly competition.</span>
   <a href="https://github.com/PokeAPI/sprites" target="_blank" rel="noreferrer">Sprite credits ↗</a>
  </footer>
 </div>;
}
