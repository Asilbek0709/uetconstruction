"use client"

import { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import "../globals.css"
import Modal from "../components/Modal" // добавим модальное окно
import { useTranslation } from "react-i18next"



export default function ProjectsPage() {

  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t("homepage"),
      description: "A full-featured online store with payment integration and inventory management.",
      status: "successful",
      details: "This project included payment gateways, inventory management, and responsive UI."
    },
    {
      id: 2,
      title: "Mobile App Redesign",
      description: "Complete UI/UX overhaul of the existing mobile application.",
      status: "successful",
      details: "Redesigned for better usability and performance across devices."
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning for customer support.",
      status: "planned",
      details: "Will provide automated responses and analytics for customer queries."
    },
    // остальные проекты...
  ]

  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null) // выбранный проект
  const [isOpen, setIsOpen] = useState(false) // состояние модалки

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.status === filter)

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Successful", value: "successful" },
    { label: "Planned", value: "planned" },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsOpen(false)
  }

  return (
    <div>
      <div className="projects-main">
        <Header />
        <div className="destination">
          <Link className='destination-link' href={'/'}>Homepage</Link>
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
          <Link className='destination-link-located' href={'/contact'}>Projects</Link>
        </div>

        <div className="projects-container-main" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <div className="filterContainer">
            {filters.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`${"filterBtn"} ${filter === btn.value ? "filterBtnActive" : "filterBtnInactive"}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="projectsGrid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="projectCard"
                  onClick={() => openModal(project)} // добавляем клик для открытия модалки
                  style={{cursor: "pointer"}}
                >
                  <div className="badgeContainer">
                    <span className={`${"badge"} ${project.status === "successful" ? "badgeSuccess" : "badgePlanned"}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                </div>
              ))
            ) : (
              <div className="noResults">
                <p>No projects found for the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {isOpen && selectedProject && (
        <Modal onClose={closeModal}>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.details}</p>
        </Modal>
      )}
    </div>
  )
}
