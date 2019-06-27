import React from "react";
import { Link } from "gatsby";


export default class SiteHeader extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <nav className="p-nav">
        <Link className="p-nav__link" to="/">
        <div className="logo">W</div>
        <div className="logo logo-2"><i class="fas fa-angle-double-down"></i><i class="fas fa-angle-double-up"></i><i className="fas fa-angle-double-down"></i></div>
        <div className="logo logo-3"><i class="fas fa-angle-double-up"></i><i class="fas fa-angle-double-down"></i><i className="fas fa-angle-double-up"></i><i class="fas fa-angle-double-down"></i><i className="fas fa-angle-double-up"></i></div>
        <div className="logo logo-4"><i class="fas fa-angle-double-up"></i><i class="fas fa-angle-double-down"></i><i className="fas fa-angle-double-up"></i><i class="fas fa-angle-double-down"></i><i className="fas fa-angle-double-up"></i></div>Home</Link>
        <Link className="p-nav__link" to="/blog">Blog</Link>
        <Link className="p-nav__link" to="/portfolio">Portfolio</Link>
        <Link className="p-nav__link" to="/resume">Resume</Link>
        <Link className="p-nav__link" to="/contact">Contact</Link>
      
      </nav>
    );
  }
}
