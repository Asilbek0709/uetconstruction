"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

import Link from "next/link"

export default function AboutPage() {
    return(
        <section className="aboutpage">
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
                <Link className='destination-link-located' href={'/contact'} >About Company</Link>
              </div>
              <main className="aboutmain">
                <nav className="aboutnavbar">
                    <div className="about-card">
                      <p>About</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="about-card">
                      <p>Company history</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="about-card">
                      <p>Vision and Mission</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="about-card">
                      <p>Structure</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="about-card">
                      <p>Partners</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="about-card">
                      <p>Licenses and certificates</p>
                      <svg className="about-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </div>
                </nav>
                <div className="aboutinformation">
                  <div className="aboutinformation-card">
                    <h1>About</h1>
                    <p><strong>UET Construction,</strong> <br /> established in 2023, provides engineering, procurement, and construction services across various sectors, including power generation, renewable energy, industrial facilities, roads, hospitals, waste water treatment, airports, pumping stations, real estate, bridges and civil infrastructure. We are dedicated to delivering projects that uphold the highest standards of quality, safety, and integrity.</p>
                    <img src="/about1.png" alt="" />
                  </div>
                  <div className="aboutinformation-card">
                    <h1>Company history</h1> <br /> 
                    <div className="aboutinformation-card-desc">
                      <div className="card-desc-info">
                        <p><strong>Embracing Technological Advancements</strong></p> <br />
                        <p>One of the hallmarks of modern construction companies is their adeptness at leveraging technological advancements. Embracing Building Information Modeling (BIM), drones for site surveying, virtual reality for project visualization, and cloud-based project management software are just a few examples of how technology can revolutionize traditional construction processes. We do investing in these technologies and providing training to employees will enhance efficiency, accuracy, and collaboration, ultimately leading to improved project outcomes.</p> <br />
                        <p><strong>Adopting Sustainable Practices</strong></p>
                        <p>In today’s environmentally conscious world, sustainability is no longer a luxury but a necessity. UET do prioritize sustainable practices, including energy-efficient building designs, use of</p>
                      </div>
                      <div className="card-desc-img">
                        <img src="/about2.jpg" alt="" />
                      </div>
                    </div>
                    <p>eco-friendly materials, and construction techniques that minimize environmental impact.</p>
                  </div>
                  <div className="aboutinformation-card">
                    <h1>Our vision</h1>
                    <div className="aboutinformation-card-desc">
                        <div className="card-desc-info">
                          <p>Our vision is to be the premier EPC construction company, known for delivering excellence in every project we undertake. We envision a future where we are recognized for our innovation, integrity, and commitment to exceeding client expectations. Through our dedication to quality, safety, and sustainability, we aim to leave a lasting legacy of transformative infrastructure that enhances the lives of communities around the world.</p>
                        </div>
                        <div className="card-desc-img">
                          <img src="/about3_3.jpg" alt="" />
                        </div>
                    </div>
                    <h1>Our mission</h1>
                    <div className="aboutinformation-card-desc">
                        <div className="card-desc-info">
                          <p>Our mission is to exemplify proficiency and excellence in the construction management of complex projects. We are dedicated to achieving utmost satisfaction among customers, stakeholders, and partners. UET Construction is committed to the successful completion of projects, meeting customer expectations under competitive conditions</p>
                        </div>
                        <div className="card-desc-img">
                          <img src="/about4.jpg" alt="" />
                        </div>
                    </div>
                  </div>
                  <div className="aboutinformation-card">
                    <h1>Organizational management structure</h1>
                  </div>
                  <div className="aboutinformation-card">
                    <h1>Partners</h1>
                  </div>
                  <div className="aboutinformation-card">
                    <div className="licenses">
                      <h1>Licenses and certificates</h1> <br />
                      <h2>ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018</h2> <br />
                      <p>We proudly hold locally and internationally recognized certifications and licenses that validate our commitment to excellence, safety, and sustainability.</p>
                      <div className="licenses-photo">
                        <img src="/license1.png" alt="" />
                        <img src="/license2.png" alt="" />
                        <img src="/license3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <section className="feedback">
                  <div className="feedback-info">
                    <h1>Work with us</h1>
                    <p>Join our innovative and collaborative team! We are always looking for talented individuals ready to make a difference. Upload resume and start your journey with us.</p>
                    <Link href={'/contact'} className='cv-link'>UPLOAD YOUR RESUME</Link>
                  </div>
                  <div className="feedback-photo">
                  <img src="/feedback.jpg" alt="" />
                  </div>
              </section>
              <div className="marquee">
                  <div className="marquee-bg-text">
                    <span>HAVE QUESTIONS?</span><span>HAVE QUESTIONS?</span>
                  </div>
                  <div className="marquee-content">
                    <div className="marquee-about-arrow-cont">
                      <svg 
                        className="marquee-about-arrow"
                        width="18" 
                        height="18" 
                        viewBox="4 4 16 16" 
                        aria-hidden="true"
                      >
                        <path 
                          d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
            <Footer></Footer>
        </section>
    )
}