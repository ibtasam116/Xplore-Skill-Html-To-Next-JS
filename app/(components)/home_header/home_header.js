"use client"
import Link from 'next/link';
import Button from '../button/button';

export default function Home_header() {

  // navbar toggle menu start
  function showMenu() {
    document.getElementById("navLinks").style.right = "0";
  }

  function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
  }
  // navbar toggle menu end
  return (
    <>
      <section class="header">
        <nav>
          <Link href="/" class="logo">Xplore
            <i class="fab fa-staylinked"></i>kill
          </Link>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Course</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <i class="fa fa-bars" onClick={showMenu}></i>
        </nav >

        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button btnHref="/blog" btnTitle="Visit Us To Know More" />
          {/* <a href="#" class="hero_btn">Visit Us To Know More</a> */}
        </div>
      </section >
    </>
  )
}
