import React from "react";
import { Link } from "gatsby";


export default class SiteHeader extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <nav class="p-nav">
        <Link class="p-nav__link" to="/">Home</Link>
        <Link class="p-nav__link" to="/blog">Blog</Link>
        <Link class="p-nav__link" to="/portfolio">Portfolio</Link>
        <Link class="p-nav__link" to="/resume">Resume</Link>
        <Link class="p-nav__link" to="/contact">Contact</Link>
      
      </nav>
    );
  }
}
