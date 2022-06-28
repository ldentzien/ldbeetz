import Link from "next/link";

function SocialMedia() {
    return (
        <div className="container-fluid">
            <a href="https://www.youtube.com/" className="social-links"><i className="fab fa-youtube"></i></a>  
            <a href="https://www.instagram.com/" className="social-links"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com/" className="social-links"><i className="fab fa-twitter"></i></a>
            <a href="https://www.soundcloud.com/" className="social-links"><i className="fab fa-soundcloud"></i></a>
            <a href="https://www.bandcamp.com/" className="social-links"><i className="fab fa-bandcamp"></i></a>
            <a href="https://www.tiktok.com/" className="social-links"><i className="fab fa-tiktok"></i></a>
        </div>
    )
}

export default SocialMedia;