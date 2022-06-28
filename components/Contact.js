import SocialMedia from "./SocialMedia";

function Contact () {
    return (
        <div className="container">
            <div className="row text-center">
                <h2>Contact</h2>
                <h5>Email: </h5>
                <h5><a href="mailto: ldbeetz@gmail.com">ldbeetz@gmail.com</a></h5>
                <SocialMedia/>
                <h6>&copy; All Rights reserved to LD BEETZ</h6>
            </div>
        </div>
    )
}

export default Contact;