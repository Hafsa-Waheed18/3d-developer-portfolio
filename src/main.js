import './style.css'
import * as THREE from 'three'

document.querySelector('#app').innerHTML = `
  <main class="portfolio">
    <nav class="navbar">
  <a href="#" class="brand">Hafsa Waheed<span>.</span></a>

  <div class="nav-links">
    <a href="#about">About</a>
    <a href="#technologies">Interests</a>
    <a href="#journey">Journey</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <a href="#contact" class="nav-button">Let's connect ↗️</a>
</nav>

    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">WELCOME TO MY DIGITAL SPACE</p>

        <h1>
          Building at the
          <span>intersection</span>
          of technology & ideas.
        </h1>

        <p class="hero-description">
          Exploring Artificial Intelligence, software development
          and digital innovation — one idea at a time.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="primary-button">Explore my work ↗️</a>
          <a href="#about" class="secondary-button">Discover more</a>
        </div>
      </div>

      <div class="scene" id="scene"></div>

      <div class="hero-footer">
        <span>AI · DEVELOPMENT · INNOVATION</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>

    <section class="about" id="about">
      <p class="eyebrow">01 — ABOUT</p>
      <h2>Curiosity drives <span>innovation.</span></h2>
      <p>
        I'm Hafsa Waheed, exploring the world of technology
        through continuous learning, experimentation and building.
      </p>
    </section>
<section class="technologies" id="technologies">
  <p class="eyebrow">02 — AREAS OF INTEREST</p>
  <h2>Technology I'm exploring.</h2>

  <div class="tech-grid">
    <div class="tech-card">
      <span>01</span>
      <h3>Artificial Intelligence</h3>
      <p>Exploring intelligent systems and the possibilities of AI.</p>
    </div>

    <div class="tech-card">
      <span>02</span>
      <h3>Software Development</h3>
      <p>Learning to design and build meaningful digital experiences.</p>
    </div>

    <div class="tech-card">
      <span>03</span>
      <h3>AI Automation</h3>
      <p>Discovering ways to make workflows smarter and more efficient.</p>
    </div>

    <div class="tech-card">
      <span>04</span>
      <h3>SaaS & Innovation</h3>
      <p>Exploring ideas that can become useful digital products.</p>
    </div>
  </div>
</section>
<section class="journey" id="journey">
  <p class="eyebrow">03 — MY LEARNING JOURNEY</p>
  <h2>Always learning. Always building.</h2>

  <div class="journey-list">
    <div class="journey-item">
      <span>01</span>
      <div>
        <h3>Computer Science</h3>
        <p>Building foundational knowledge through Harvard CS50x.</p>
      </div>
      <span class="journey-status">LEARNING</span>
    </div>

    <div class="journey-item">
      <span>02</span>
      <div>
        <h3>Web Development</h3>
        <p>Exploring frontend development and interactive experiences.</p>
      </div>
      <span class="journey-status">BUILDING</span>
    </div>

    <div class="journey-item">
      <span>03</span>
      <div>
        <h3>Artificial Intelligence</h3>
        <p>Exploring AI concepts, tools and practical applications.</p>
      </div>
      <span class="journey-status">EXPLORING</span>
    </div>
  </div>
</section>
    <section class="projects" id="projects">
  <p class="eyebrow">04 — SELECTED WORK</p>
  <h2>Things I've been building.</h2>
  <p class="projects-intro">
    A collection of projects, experiments and ideas
    brought to life through technology.
  </p>

  <div class="project-grid">

    <article class="project-card">
      <div class="project-visual portfolio-visual">
        <span>01 / WEB DEVELOPMENT</span>
        <h3>Personal<br>Portfolio<span>.</span></h3>
        <div class="visual-line"></div>
      </div>

      <div class="project-info">
        <div>
          <h3>Developer Portfolio</h3>
          <p>A personal website showcasing my interests, work and learning journey.</p>
        </div>
        <a href=https://hafsa-waheed18.github.io/my-developer-portfolio
           target="_blank">View GitHub ↗️</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-visual client-visual">
        <span>02 / DIGITAL PRODUCT</span>
        <h3>Client<br>OS<span>.</span></h3>
        <div class="visual-line"></div>
      </div>

      <div class="project-info">
        <div>
          <h3>Client OS</h3>
          <p>A digital product project focused on organising client workflows.</p>
        </div>
        <span class="project-label">PRODUCT DEVELOPMENT</span>
      </div>
    </article>

  </div>
</section>

  <section class="contact" id="contact">
  <p class="eyebrow">05 — GET IN TOUCH</p>

  <h2>Let's create something <span>meaningful.</span></h2>

  <p class="contact-description">
    Have an interesting idea, a project opportunity,
    or simply want to connect? I'd love to hear from you.
  </p>

  <a class="contact-email"
     href="mailto:hafsawaheed1803@gmail.com">
    hafsawaheed1803@gmail.com ↗️
  </a>

 <div class="social-links">
  <a href="https://github.com/Hafsa-Waheed18"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="GitHub">
    <svg viewBox="0 0 24 24">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/in/hafsa-waheed-7a255944a"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="LinkedIn">
    <svg viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
    </svg>
  </a>

  <a href="mailto:hafsawaheed1803@gmail.com" aria-label="Email">
    <svg viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m3 6 9 7 9-7"/>
    </svg>
  </a>
</div>
</section>
`


// Create our first 3D scene
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  45,
  1,
  0.1,
  100
)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.querySelector('#scene').appendChild(renderer.domElement)

// Create a glowing 3D sphere
const geometry = new THREE.IcosahedronGeometry(1.25, 5)

const material = new THREE.MeshStandardMaterial({
  color: 0x398cff,
  metalness: 0.7,
  roughness: 0.25,
  wireframe: true
})

const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// Add lighting
const light = new THREE.PointLight(0x4b91ff, 35)
light.position.set(2, 3, 4)
scene.add(light)

scene.add(new THREE.AmbientLight(0xffffff, 1.5))
// Create floating background particles
const particleCount = 350
const particlePositions = new Float32Array(particleCount * 3)

for (let i = 0; i < particleCount; i++) {
  particlePositions[i * 3] = (Math.random() - 0.5) * 8
  particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6
  particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5
}

const particleGeometry = new THREE.BufferGeometry()

particleGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(particlePositions, 3)
)

const particleMaterial = new THREE.PointsMaterial({
  color: 0x5798ff,
  size: 0.025,
  transparent: true,
  opacity: 0.65,
  depthWrite: false,
  blending: THREE.AdditiveBlending
})

const particles = new THREE.Points(
  particleGeometry,
  particleMaterial
)

scene.add(particles)

// Keep the 3D scene responsive
function resizeScene() {
  const container = document.querySelector('#scene')
  const width = container.clientWidth
  const height = container.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

window.addEventListener('resize', resizeScene)
resizeScene()

// Make the sphere respond to pointer movement
let targetX = 0
let targetY = 0

let mouseRotationX = 0
let mouseRotationY = 0

let normalRotationX = 0
let normalRotationY = 0

const sceneContainer = document.querySelector('#scene')

sceneContainer.addEventListener('pointermove', (event) => {
  const rect = sceneContainer.getBoundingClientRect()

  targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
  targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2
})

sceneContainer.addEventListener('pointerleave', () => {
  targetX = 0
  targetY = 0
})

function animate() {
  requestAnimationFrame(animate)

  // Continuous natural rotation
  normalRotationX += 0.002
  normalRotationY += 0.004

  // Smooth mouse interaction
  mouseRotationX += (targetY * 0.65 - mouseRotationX) * 0.09
  mouseRotationY += (targetX * 0.9 - mouseRotationY) * 0.09

  // Combine both rotations
  sphere.rotation.x = normalRotationX + mouseRotationX
  sphere.rotation.y = normalRotationY + mouseRotationY

  renderer.render(scene, camera)
  particles.rotation.y += 0.0008
particles.rotation.x += 0.0003
particles.position.y = Math.sin(Date.now() * 0.0005) * 0.08
}

animate()
// Scroll reveal animation

const revealElements = document.querySelectorAll(
  '.about, .technologies, .journey, .projects, .contact, .project-card, .tech-card'
)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.1
})

revealElements.forEach((element) => {
  element.classList.add('reveal')
  observer.observe(element)
})
