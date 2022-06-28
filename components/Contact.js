import SocialMedia from "./SocialMedia";

function Contact () {
    return (
        <div className="container-fluid" id="contact">
            <div className="container">
                <div className="row text-center">
                    <h2 className="title">Contact</h2>
                    <h5>Email: </h5>
                    <h5><a href="mailto: ldbeetz@gmail.com">ldbeetz@gmail.com</a></h5>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-2 col-md-6 col-6">
                            <SocialMedia/>
                        </div>
                    </div>
                    <h6>&copy; All Rights reserved to LD BEETZ</h6>
                </div>
            </div>
        </div>
    )
}

export default Contact;