import Link from "next/link";

function SocialMedia() {
    return (
        <div className="container-fluid">
                <ul className="navbar-nav ms-auto">
                    <div className="d-flex justify-content-center">
                        <li className="nav-item col-2">
                            <Link href="https://www.youtube.com/"><a className="nav-link"><i className="fab fa-youtube"></i></a></Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link href="https://www.instagram.com/"><a className="nav-link"><i className="fab fa-instagram"></i></a></Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link href="https://www.twitter.com/"><a className="nav-link"><i className="fab fa-twitter"></i></a></Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link href="https://www.soundcloud.com/"><a className="nav-link"><i className="fab fa-soundcloud"></i></a></Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link href="https://www.bandcamp.com/"><a className="nav-link"><i className="fab fa-bandcamp"></i></a></Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link href="https://www.tiktok.com/"><a className="nav-link"><i className="fab fa-tiktok"></i></a></Link>
                        </li>
                    </div>
                </ul>
        </div>
    )
}

export default SocialMedia;