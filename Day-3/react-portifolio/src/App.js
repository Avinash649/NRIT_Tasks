import React from 'react';
import './App.css'; 

function Card({ title, description, image }) {
  return (
    <article className="project-card">
      {}
      {image && <img src={image} alt={`${title} screenshot`} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <h1>Avinash</h1>
        <p>Aspiring Software Developer</p>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about-section container">
      <img src="image.jpg" alt="Your Name" className="profile-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate and aspiring software developer with a strong interest in creating user-friendly and efficient web applications. I enjoy learning new technologies and applying them to build cool projects.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  
  const projectData = [
    {
      title: "Project 1: Personal Blog",
      description: "A simple and responsive blog built with HTML and CSS. This project focuses on semantic HTML and a clean, readable layout for blog posts.",
    },
    {
      title: "Project 2: To-Do List App",
      description: "A minimalist to-do list application to practice core concepts. It features a clean interface for adding and tracking tasks.",
    },
    {
      title: "Project 3: E-commerce App",
      description: "The homepage for a fictional e-commerce store, designed to be visually appealing and responsive, showcasing various products."
    }
  ];

  return (
    <section className="projects-section container">
      <h2>My Projects</h2>
      <div className="project-container">
        {}
        {projectData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>Contact me at: <a href="mailto:allaavinash2002@gmail.com">allaavinash2002@gmail.com</a></p>
      <p>28/08/2025. Avinash. Day-3 Assignment.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;