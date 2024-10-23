'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<section
    data-bs-version="5.1"
    className="menu menu2 cid-uryiHhYxdN"
    once="menu"
    id="menu-5-uryiHhYxdN">
    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <img
              src="assets/images/HkcqL2rMkyaB.jpeg"
              alt="Mobirise Website Builder"
              style={{ height: "4.3rem" }}
            />
          </span>
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-black display-4" href="#">
Air Fryer Magic
            </a>
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-toggle="collapse"
          data-target="#navbarSupportedContent"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <div className="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item">
              <Link
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/category/air-frying-articles/"
              >
                Hacks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/"
                aria-expanded="false"
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/"
              >
                Tips
              </Link>
            </li>
          </ul>
          <div className="navbar-buttons mbr-section-btn">
            <Link
              className="btn btn-primary display-4"
              href="https://airfryerwonder.com/"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </section>
    );
}
