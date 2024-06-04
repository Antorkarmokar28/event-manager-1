import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
                <Link to='blog' className="link link-hover">Blog</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;