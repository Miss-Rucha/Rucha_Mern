import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container text-center py-4">

        <h5> Music Album Manager..</h5>
        <p>Manage your favorite music albums easily</p>

        <div className="mb-3">
          <a href="#" target="blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" target="blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" target="blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" target="blank" rel="noopener noreferrer" className="text-light">
            <i className="bi bi-github"></i>
          </a>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} Music Album Manager | Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;