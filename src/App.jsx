import React from "react";
import "./App.css";

const projects = [
  {
    title: "Movie Ranking Project",
    description: "A simple HTML project showcasing my top 3 favorite movies with descriptions.",
    image: "https://i.ibb.co/rG0y3X2h/movie-ranking.jpg",
    link: "https://cerulean-parfait-3ae422.netlify.app/",
    tags: ["#HTML"],
  },
  {
    title: "Mondrian Project",
    description: "A CSS Grid-based recreation of Piet Mondrian's famous abstract art style.",
    image: "https://i.ibb.co/kgQ8bwBm/10mondrian.jpg",
    link: "https://dainty-babka-cfb559.netlify.app/",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "TinDog Project",
    description: "A responsive dating website for dogs, built using Bootstrap framework.",
    image: "https://i.ibb.co/HD82JTC4/tindog.jpg",
    link: "https://magnificent-mochi-09dc16.netlify.app/",
    tags: ["#HTML", "#CSS", "#Bootstrap"],
  },
  {
    title: "Capstone Project 2",
    description: "A comprehensive web development project showcasing advanced HTML and CSS skills.",
    image: "https://i.ibb.co/rfKmm6bQ/capstone2.jpg",
    link: "https://keen-vacherin-86a048.netlify.app/",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "Dicee Challenge",
    description: "An interactive dice game built with JavaScript that simulates rolling dice.",
    image: "https://i.ibb.co/jkZtr0t7/12dice-challenge.jpg",
    link: "https://grand-sorbet-97c025.netlify.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Drum Kit",
    description: "An interactive drum kit that plays sounds when keys are pressed or clicked.",
    image: "https://i.ibb.co/ccnvcvBy/13drumkit.jpg",
    link: "https://admirable-eclair-d850b2.netlify.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "QR Code Project",
    description: "A project demonstrating QR code generation and scanning functionality.",
    image: "https://i.ibb.co/tM8gLcW7/qr-code.jpg",
    link: "https://qr-code-generator-one-zeta.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Secrets Access Project",
    description: "A secure web application for sharing secrets with authentication features.",
    image: "https://i.ibb.co/zWhgwyQX/16secrets.jpg",
    link: "https://secrets-project-chi.vercel.app/",
    tags: ["#Node.js", "#Express", "#MongoDB"],
  },
  {
    title: "Band Name Generator",
    description: "A fun project that generates creative band names using JavaScript.",
    image: "https://i.ibb.co/SXF24HJV/17-adjective.jpg",
    link: "https://band-name-silk.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Blog Webapp",
    description: "A full-stack blog application with CRUD operations and user authentication.",
    image: "https://i.ibb.co/xSB3JGpg/blog-webapp.jpg",
    link: "https://blogapp-one-chi.vercel.app/", // Replace with working backend app link if needed
    tags: ["#Node.js", "#Express", "#MongoDB"],
  },
  {
    title: "JSON Tacos Generator",
    description: "A project demonstrating JSON data handling and API integration for taco recipes.",
    image: "https://i.ibb.co/LDbQjPny/19taco-town.jpg",
    link: "https://tacos-recipe.vercel.app/",
    tags: ["#JavaScript", "#JSON", "#API"],
  },
  {
    title: "Axios Weather Finder",
    description: "A project using Axios to fetch and display random cities weather using APIs.",
    image: "https://i.ibb.co/svtbdzhy/20-activity-generator.jpg",
    link: "https://weather-finder-api.vercel.app/",
    tags: ["#JavaScript", "#Axios", "#API"],
  },
  {
    title: "API Authentication Game",
    description: "A game implementing API authentication and user management features.",
    image: "https://i.ibb.co/yc704RYN/21-auth-game.jpg",
    link: "https://api-auth-game.vercel.app/",
    tags: ["#Node.js", "#Express", "#JWT"],
  },
  {
    title: "API Selector Game",
    description: "A game implementing API authentication and user management features.",
    image: "https://i.ibb.co/TxX6fdpq/Screenshot-2025-04-14-013709.jpg",
    link: "https://apis-game-rho.vercel.app/",
    tags: ["#Node.js", "#Express", "#JWT"],
  },
  {
    title: "Book Notes",
    description: "A web application for managing and organizing book notes and summaries.",
    image: "https://i.ibb.co/xKR0HLJj/booknotes.jpg",
    link: "https://readers-toolkit.vercel.app/",
    tags: ["#Node.js", "#Express", "#MongoDB"],
  },
  {
    title: "Flag Quiz",
    description: "An interactive quiz game testing knowledge of world flags.",
    image: "https://i.ibb.co/HpTJQCNJ/22-flag-game.jpg",
    link: "https://flag-quiz-gamma.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "World Capital Quiz",
    description: "A quiz application testing knowledge of world capitals with score tracking.",
    image: "https://i.ibb.co/JjR1X6V0/22-1-Capitalcity.jpg",
    link: "https://city-capital-quiz.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Simon Game",
    description: "A classic memory game implementation with sound and visual feedback.",
    image: "https://i.ibb.co/vvg3kjtm/14simongame.jpg",
    link: "/1HOST/20.0 Simon Game Challenge Completed/index.html",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Visited Countries Map",
    description: "An interactive map application for tracking and displaying visited countries.",
    image: "https://i.ibb.co/21qvjL7h/22-2-countries-map.jpg",
    link: "https://travel-tracker-react-psi.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript", "#API"],
  },
  {
    title: "Permalist Project",
    description: "A persistent to-do list application with local storage functionality.",
    image: "https://i.ibb.co/rKcFnNGg/perma.jpg",
    link: "https://permalist-angelayu-proj.vercel.app/",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Keeper App",
    description: "A note-taking application inspired by Google Keep with React.",
    image: "https://i.ibb.co/jkV02FXf/keeperapp.jpg",
    link: "https://23-39-0-keeper-app-angela-yu.vercel.app/",
    tags: ["#React", "#CSS", "#JavaScript"],
  },
  {
    title: "Todolist",
    description: "A full-stack to-do list application with database integration.",
    image: "https://i.ibb.co/Q79GxH2H/todolist.jpg",
    link: "https://26-40-0-todolist-angela-yu.vercel.app/",
    tags: ["#Node.js", "#Express", "#MongoDB"],
  },
  {
    title: "Color Vocab Project",
    description: "An educational project for learning color vocabulary in different languages.",
    image: "https://i.ibb.co/LzTPG15X/colorlearn.jpg",
    link: "/1HOST/27-5.4+Color+Vocab+Project/index.html",
    tags: ["#HTML", "#CSS", "#JavaScript"],
  },
  {
    title: "Motivation Meme Project",
    description: "A CSS project creating motivational memes with text overlays.",
    image: "https://i.ibb.co/gMnB8j6S/6-Motivation-meme.jpg",
    link: "/1HOST/28-6.4 Motivation Meme Project/index.html",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "CSS Flag Project",
    description: "A project demonstrating CSS skills by recreating various country flags.",
    image: "https://i.ibb.co/xKM6hFcC/7-Css-Flag.jpg",
    link: "/1HOST/29-7.3 CSS Flag Project/index.html",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "Web Design Agency Project",
    description: "A responsive website for a fictional web design agency.",
    image: "https://i.ibb.co/XZ1kfQRD/8-Design-Agency.jpg",
    link: "/1HOST/30-8.4 Web Design Agency Project/index.html",
    tags: ["#HTML", "#CSS"],
  },
  {
    title: "Flexbox Pricing Table",
    description: "A responsive pricing table built using CSS Flexbox.",
    image: "https://i.ibb.co/qqz2BmD/9pricing-table.jpg",
    link: "/1HOST/31-9.4+Flexbox+Pricing+Table+Project/index.html",
    tags: ["#HTML", "#CSS","#Flexbox"],
  },
];

function ProjectCard({ title, description, image, link, tags }) {
  return (
    <div className="card" onClick={() => window.open(link, "_blank")} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="hashtags">
        {tags.map((tag, index) => (
          <span key={index} className="hashtag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header>
        <nav className="navbar ">
          <h2>Angela Yu Course Projects</h2>
          <ul className="navbar-nav">
            <li><a className="nav-link nav-item1">CWH Course Portfolio?</a></li>
            <li>
              <a className="nav-link nav-item1" onClick={() => window.open('https://fccprojectsreact-tail-sukku.netlify.app/', '_blank')}>
                FCC Course Portfolio?
              </a>
            </li>
            <li><a className="nav-link nav-item1">Sukrit Chopra</a></li>
          </ul>
        </nav>
        <div className="header-waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </header>

      <main className="container">
        <h1>My Projects</h1>
        <div className="card-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="http://github.com/nottysukku/" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://www.linkedin.com/in/sukrit-chopra-5923a9215/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <ul className="menu">
          <li><a href="#">Click</a></li>
          <li><a href="#">Here</a></li>
          <li><a href="#">To</a></li>
          <li><a href="#">Go</a></li>
          <li><a href="#">Up</a></li>
        </ul>
      </footer>
    </>
  );
}
