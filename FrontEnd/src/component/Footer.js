import React from "react";
import "./style/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer id="sticky-footer" className=" text-white-50">
      <div className="container py-1">
        <div className="row">
          <div>
            <small>
              Copyright &copy; 2022 | All Right Reserved | Capgemini India
              Private Limited{" "}
            </small>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex float-right">
              <FacebookIcon />
              <InstagramIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
