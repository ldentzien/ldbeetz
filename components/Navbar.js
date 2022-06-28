import React, { useState } from 'react';
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Navbar = props => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (

    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/"><a className="navbar-brand" href="#">LD BEETZ</a></Link>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link href="/"><a className="nav-link" href="#">Home<span className="sr-only"></span></a></Link>
            </li>
            <li className="nav-item">
              <Link href="/"><a className="nav-link" href="#">Beats</a></Link>
            </li>
            <li className="nav-item">
                <Link href="/"><a className="nav-link" href="#">Licenses</a></Link>
            </li>
            <li className="nav-item">
                <Link href="/"><a className="nav-link" href="#">Contact</a></Link>
            </li>
            <li className="nav-item">
              <SocialMedia />
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

// function Navbar() {

//     return (
//         <div className="container">
//             <div className="row">
//                 <nav className="navbar navbar-expand-lg navbar-light">
//                       <Link href="/"><a className="navbar-brand" href="#">LD BEETZ</a></Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                       <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                       <ul className="navbar-nav ms-auto">
//                         <li className="nav-item active">
//                           <Link href="/About"><a className="nav-link" href="#">Home<span className="sr-only"></span></a></Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link href="/Photos"><a className="nav-link" href="#">Photos</a></Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/Podcasts"><a className="nav-link" href="#">Contact</a></Link>
//                         </li>
//                         <li className="nav-item">
//                           <SocialMedia />
//                         </li>
//                       </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


