import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131228785!2d80.04419819043571!3d13.047473316234447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722848861193!5m2!1sen!2sin";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">Guest Room Booking</h1>
                </Link>
                <p className="text-white mb-0">
                  Build a professional website for your hotel business and grab
                  the attention of new visitors upon your site’s launch.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href={val.link}>
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
            <div className="col-lg-12 mt-8">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Our Location
              </h6>
              <iframe
                src={mapSrc}
                width="500"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
            </div>
          </div>
          <div  className="text-center my-10 mt-3 text-primary"><p className="mb-4">All Rights Reserved &copy; Ram Room Bookings - 2024</p>
          <p className='mb-0'>Developed by - Ramakrishnan</p>
          </div>
        </div>
      </div>
    </>
  );
}
