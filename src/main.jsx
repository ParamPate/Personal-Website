import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function Trainer(){
  return <svg className="trainer" viewBox="0 0 24 36" role="img" aria-label="Pixel trainer with brown skin and black hair" shapeRendering="crispEdges">
    <path fill="#172e50" d="M7 1h10v2h3v7H5V4h2z"/><path fill="#ae693f" d="M6 8h13v9h-3v3H9v-3H6z"/><path fill="#d18b56" d="M8 9h10v7H8z"/><path fill="#172e50" d="M9 10h2v2H9zm6 0h2v2h-2z"/><path fill="#713d32" d="M11 15h4v1h-4z"/>
    <path fill="#e84043" d="M6 18h12v3h3v9H3v-9h3z"/><path fill="#fcfaf4" d="M10 18h5v11h-5z"/><path fill="#ae693f" d="M1 23h4v8H1zm18 0h4v8h-4z"/><path fill="#265a9a" d="M6 29h12v5h-5v-3h-2v3H6z"/><path fill="#172e50" d="M4 34h7v2H4zm9 0h7v2h-7z"/><path fill="#fff" d="M4 34h5v1H4zm11 0h5v1h-5z"/>
  </svg>;
}
function Ball({className=''}){return <span aria-hidden="true" className={`pokeball ${className}`}><i/></span>}
function App(){
 return <div className="site-shell">
  <a className="skip" href="#about">Skip to content</a>
  <header><a className="wordmark" href="#about" aria-label="Param Patel home"><Ball/>param<span>patel</span><span className="wordmark-dot">.</span></a><nav aria-label="Main navigation"><a className="current" href="#about">About me</a><a href="https://github.com/ParamPate" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/param-patel-9589b226a/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a className="contact-link" href="mailto:para.patel@mail.utoronto.ca">Say hello <span aria-hidden="true">↗</span></a></nav></header>
  <main id="about">
   <section className="intro" aria-labelledby="intro-title">
    <div className="intro-copy">
     <img className="charmander-accent" src="/sprites/4.png" alt="" width="96" height="96"/>
     <p className="eyebrow"><span/>TORONTO, ON · PLAYER ONE</p>
     <h1 id="intro-title">Hey, I’m<br/><span>Param.</span></h1>
     <p className="lead">A curious mind.<br/>A competitive streak.</p>
     <p className="bio">I’m a computer science student at <strong>U of T</strong>, interested in software engineering and AI. Outside class, I’m usually playing basketball, ping-pong, tennis, or soccer—sometimes finding a way to bring the two together.</p>
     <a className="hello-button" href="mailto:para.patel@mail.utoronto.ca">Let’s talk <span aria-hidden="true">↗</span></a>
     <div className="tiny-note"><span className="small-line"/> Always up for a good project.</div>
    </div>
    <div className="profile-side">
     <img className="rayquaza-accent" src="/sprites/384.png" alt="" width="96" height="96"/>
     <div className="profile-card">
      <div className="card-header"><span>TRAINER CARD</span><span>No. 001</span></div>
      <div className="trainer-scene">
       <div className="scene-orbit"/>
       <div className="scene-orbit inner"/>
       <span className="scene-plus p1">+</span>
       <span className="scene-plus p2">+</span>
       <span className="scene-label">JUST ONE MORE GAME.</span>
       <div className="trainer-ground"/>
       <Trainer/>
       <img className="companion" src="/sprites/25.png" alt="" width="96" height="96"/>
       <span className="scene-caption">PARAM & PIKACHU</span>
      </div>
      <div className="card-info">
       <div><h2>Param Patel</h2><p>Developer. Teammate. Pokémon enthusiast.</p></div>
       <Ball/>
      </div>
      <div className="card-tags">
       <span>CS @ U OF T</span><span>AI + VISION</span><span>TEAM PLAYER</span>
      </div>
     </div>
     <div className="card-footnote"><span aria-hidden="true">↳</span> A new adventure is always a good idea.</div>
    </div>
   </section>
  </main><footer><span>© {new Date().getFullYear()} Param Patel</span><span>Built with curiosity. Fueled by friendly competition.</span><a href="https://github.com/PokeAPI/sprites" target="_blank" rel="noreferrer">Sprite credits ↗</a></footer>
 </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
