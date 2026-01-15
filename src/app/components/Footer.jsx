"use client"

import "../globals.css"
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

  return (
            <footer>
                <div className="main-container">
                    <div className="container2">
                        <h1>{t("container2-title")}</h1>
                        <div className="footer-navigation">
                            <Link className='page-link' href={'/'}>{t("homepage")}</Link>
                            <Link className='page-link' href={'/services'}>{t("dropdown-link-services")}</Link>
                            <Link className='page-link' href={'/projects'}>{t("dropdown-link-project")}</Link>
                            <Link className='page-link' href={'/news'}>{t("dropdown-link-contact")}</Link>
                        </div>
                    </div>
                    <div className="container3">
                        <h1>{t("home-hover-link-about")}</h1>
                        <div className="footer-navigation">
                            <Link className="page-link" href="/services">{t("dropdown-link-services")}</Link>
                            <Link className="page-link" href="/projects">{t("dropdown-link-project")}</Link>
                            <Link className="page-link" href="/news">{t("home-hover-link-licenses")}</Link>
                        </div>
                    </div>
                    <div className="container4">
                        <h1>{t("dropdown-link-contact")}</h1>
                        <div className="contact-info">
                            <p><span className="colored">{t("colored-phone")}:</span> +998 (77) 260-26-26; +998 (77)-179-20-20</p>
                            <p><span className="colored">{t("colored-email")}:</span> ienergy24h@gmail.com</p>
                            <p><span className="colored">{t("colored-address")}:</span> {t("address")}</p>
                        </div>
                    </div>
                    <div className="container5">
                        <a href="https://www.instagram.com/new.ecoenergy?igsh=MXZtdDY5a21vZm16dA==">
                            <svg width={48} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5C22 19.42 19.42 22 16.25 22h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2zm0 1.5C5.41 3.5 3.5 5.41 3.5 7.75v8.5c0 2.34 1.91 4.25 4.25 4.25h8.5c2.34 0 4.25-1.91 4.25-4.25v-8.5c0-2.34-1.91-4.25-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z"/>
                            </svg>
                            {t("inst")}
                        </a>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container5">
                    <p>© Silicon Hub. Barcha huquqlar himoyalangan.</p>
                </div>
            </footer>
  );
}