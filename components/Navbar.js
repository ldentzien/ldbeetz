import React, { useState } from 'react';
import Image from "next/image"
import Logo from "../public/images/ldbeetz_logo.png";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Navbar = props => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (

    <div className="container">
      <div className="row">

        <nav className="navbar navbar-expand-md navbar-light">
          <div className={`${isNavCollapsed ? 'collapse' : 'text-center'} navbar-collapse w-100 order-1 order-md-0 dual-collapse2`}>
            <SocialMedia />
          </div>
          <div className="">
            <div className="navbar-brand mx-auto order-0">
            <Image src={Logo} width="100%" height="100%" alt="Logo Pic"/>
            </div>
          </div>
          <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className={`${isNavCollapsed ? 'collapse' : 'text-center'} navbar-collapse w-100 order-3 dual-collapse2`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link href="#beats"><a className="nav-link" href="#">Beats<span className="sr-only"></span></a></Link>
                </li>
                <li className="nav-item">
                    <Link href="#licenses"><a className="nav-link" href="#">Licenses</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="#about"><a className="nav-link" href="#">About</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="#contact"><a className="nav-link" href="#">Contact</a></Link>
                </li>
              </ul>
            </div>
        </nav>

        <hr/>

      </div>
    </div>


  );
}

export default Navbar;