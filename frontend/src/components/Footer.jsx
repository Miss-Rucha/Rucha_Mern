import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} Music Album Manager | Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;