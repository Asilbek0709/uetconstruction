"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function ProjectPage() {

    
    return(
        <section className="projectpage">
            <Header></Header>
                <div className="destination">
            <Link className='destination-link' href={'/'} >Homepage</Link>
                        <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path 
                d="M6 3L11 8L6 13" 
                stroke="#828282" 
                strokeWidth="1.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
                />
            </svg>
            <Link className='destination-link-located' href={'/contact'} >Projects</Link>
        </div>
        <main className="projects-main">
            <h1>Projects</h1>
            <div className="projects-buttons">
                <button class="filter-btn active" data-filter="all">All projects</button>
                <button class="filter-btn" data-filter="ongoing">Ongoing</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
            <div className="projectspage-container">
                <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card ongoing">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card completed">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Completed
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
            </div>
        </main>
            <Footer></Footer>
        </section>
    )
}