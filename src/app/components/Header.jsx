"use client"

import '../globals.css'
import Link from 'next/link'

export default function Header() {

    return(
        <header>
                <Link className='logoLink' href={'/'}>
                <div className="left-container">
                    <img src="/logo2-footer.svg" alt="" />
                </div>
                </Link>
                <div className="right-container">
                    <div className="navigation">
                        <div className="dropdown">
                            <Link className='page-link' href={'/'}>
                            About
                                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" fill="none" stroke="#000" strokeWidth="2"/>
                                </svg>
                            </Link>
                        
                        <div className="dropdown-menu">
                            <Link className='dropdown-link' href={'/about/#about'}>About</Link>
                            <Link className='dropdown-link' href={'/about/#structure'}>Structure</Link>
                            <Link className='dropdown-link' href={'/about/#vision'}>Our vision</Link>
                            <Link className='dropdown-link' href={'/about/#partners'}>Partners</Link>
                            <Link className='dropdown-link' href={'/about/#licenses'}>Licenses</Link>
                        </div>
                        </div>
                        <Link className='page-link' href={'/services'}>Services</Link>
                        <Link className='page-link' href={'/projects'}>Projects</Link>
                        <Link className='page-link' href={'/news'}>News</Link>
                        <Link className='hover-link' href={'/contact'}>Contact</Link>
                        <p>EN</p>
                    </div>
                </div>
        </header>
    )
}