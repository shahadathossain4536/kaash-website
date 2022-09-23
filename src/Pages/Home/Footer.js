import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-dark footer py-5">
      <h2 className="text-white fs-2">kaash.eu</h2>
      <div className="py-2">
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          Home
        </Link>
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          Agent
        </Link>
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          About
        </Link>
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          Listing
        </Link>
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          Blog
        </Link>
        <Link
          to="/"
          className="pe-2 fs-5 text-white text-uppercase text-decoration-none"
        >
          Contact
        </Link>
      </div>
      <div className="text-white py-4 ">
        <a
          className="text-decoration-none "
          style={{ color: "orange" }}
          href=""
        >
          {" "}
          <IoLogoFacebook className="fs-3 me-3" />
        </a>
        <a
          className="text-decoration-none "
          style={{ color: "orange" }}
          href=""
        >
          {" "}
          <IoLogoLinkedin className="fs-3 me-3" />
        </a>
        <a
          className="text-decoration-none "
          style={{ color: "orange" }}
          href=""
        >
          {" "}
          <IoLogoGithub className="fs-3 me-3" />
        </a>
      </div>
      <div>
        <p className="text-white">
          Copyright ©2022 All rights reserved | This template is made with by
          Kaash.eu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
