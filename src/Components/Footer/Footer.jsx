import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../../src/assets/logo.png (1).png"
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-bs-orange-100 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
           <img src={logo} alt="" />
            <p className="mt-4 text-sm leading-6">
              Connecting volunteers with meaningful social development events.
              Join hands to build a cleaner, greener, and better community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title font-bold text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upcoming-events" className="hover:text-primary transition">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="hover:text-primary transition">
                  Create Event
                </Link>
              </li>
              <li>
                <Link to="/manage-events" className="hover:text-primary transition">
                  Manage Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title font-bold text-blue-600">Contact</h3>

            <p className="mb-2"><span ><GrLocation /></span> Dhaka, Bangladesh</p>

            <p className="mb-2 flex items-center gap-2">
              <FaEnvelope />
              support@socialevents.com
            </p>

            <p><BsTelephone /><span>+8801704578909</span></p>
          </div>

          {/* Social */}
          <div>
            <h3 className="footer-title font-bold text-blue-600">Follow Us</h3>

            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline hover:bg-black hover:text-white"
              >
                <FaGithub />
              </a>
                <a
    href="https://x.com"
    target="_blank"
    rel="noreferrer"
    className="btn btn-circle btn-outline hover:bg-black hover:text-white"
  >
    <FaXTwitter />
  </a>


              
            </div>
          </div>

        </div>

        <div className="border-t border-base-200 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">SocialEvents</span>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;