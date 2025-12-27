"use client"

import '../globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import PhoneIcon from '@/assets/icons/phone.svg'
import EmailIcon from '@/assets/icons/email.svg'
import LocationIcon from '@/assets/icons/location.svg'
import MapIcon from '@/assets/icons/map.svg'
import HoursIcon from '@/assets/icons/hours.svg'
import ArrowIcon from '@/assets/icons/arrow.svg'

export default function Contact() {
  return (
    <section className="contactpage">
      <Header></Header>
      <div className="destination">
          <Link className='destination-link' href={'/'} >Homepage</Link>
            <ArrowIcon></ArrowIcon>
          <Link className='destination-link-located' href={'/contact'} >Contacts</Link>
      </div>
      <h1 style={{textAlign: "center", fontSize: "54px"}}>Contacts</h1>
      <section className="location">
        <div className="location-info">
          <div className="phone">
            <PhoneIcon></PhoneIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}> Phone</p>
              <p style={{fontWeight: "bold"}}>+998 77 443 00 33</p>
            </div>
          </div>
          <div className="email">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12V25C4 25.2652 4.10536 25.5196 4.29289 25.7071C4.48043 25.8946 4.73478 26 5 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V12L16 4L4 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.8125 19L4.3125 25.7125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M27.6875 25.7125L18.1875 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 12L18.1875 19H13.8125L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Email</p>
              <p style={{fontWeight: "bold"}}>info@uetconstruction.com</p>
            </div>
          </div>
          <div className="adress">
            <svg width="54" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Address</p>
              <p style={{fontWeight: "bold"}}>Abdulla Kahhar st. 17, Yakkasaroy District, Tashkent city, Uzbekistan</p>
            </div>
          </div>
          <div className="map">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 23L4 25V7L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 27L12 23V5L20 9V27Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 9L28 7V25L20 27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Reference point</p>
              <p style={{fontWeight: "bold"}}>“Gruzinskiy dvorik”, “Felicita” Residence</p>
            </div>
          </div>
          <div className="hours">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M16 9V16H23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Working hours</p>
              <p style={{fontWeight: "bold"}}>Everyday 09:00 - 19:00</p>
            </div>
          </div>
        </div>      
        <iframe
          className='google-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1380823475724!2d69.25632537587313!3d41.2840991713132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9ab898b5c3%3A0x16cdb4f4b504f05f!2sUET%20Construction!5e0!3m2!1sru!2s!4v1766754801752!5m2!1sru!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
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
      <Footer></Footer>
    </section>
  );
}