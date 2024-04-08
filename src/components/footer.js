import React from "react";
import "../styles/footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} sample Blog
        </footer>
    )
}

export default Footer;