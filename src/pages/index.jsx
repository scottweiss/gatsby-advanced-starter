import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import LandingSection from "../components/LandingSection/LandingSection";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="o-page">
            <header className="o-page__header">
              <h1 className="large">Design Systems-<br /> Accessibility- <br/>   Progressive Enhancement- <br/>Responsive Design-<br/>  Style Architecture-</h1>
              <p className="">Scott Weiss is a Front-End/UI Developer (and amateur leatherworker) currently based in Portland, Oregon</p>
            </header>
           
            <Link to='/portfolio' className=" o-post  c-card">
              <header class="o-post__header">
                <h2>Portfolio</h2>
                <p className="m-0">Work that I'm proud of; a mix of professional work and personal projects</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1" id="confit-portfolio"  colors={[[ 171, 157, 242], [255, 97, 136]]} shapes={["circle"]}></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2" max="13" size="2" id="confit-portfolio-2"  clock="-1" colors={[[255, 216, 102]]} shapes={["circle"]}></LandingSection>
            </Link>
            <Link to='/resume' className="  c-card o-post">
             <header class="o-post__header">
                <h2>Resume</h2>
                <p className="m-0">Where I come from and what I've done</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1" id="Resume-blog"   size="2" shapes={["circle"]} animate={false} colors={[[255, 216, 102]]} shapes={["circle"]}></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2" max="40" size="1" id="Resume-blog-2" shapes={["circle"]} animate={false} colors={[[ 171, 157, 242], [255, 97, 136]]} shapes={["circle"]}></LandingSection>
            </Link>
            <Link to='/blog' className="  c-card o-post">     
             <header class="o-post__header">
                <h2>Blog</h2>
                <p className="m-0">Discover exciting new CSS, deep dive into my workflow, and intresting challenges I've overcome</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-blog-1" size="5" animate={false} colors={[[255, 97, 136]]} shapes={["circle"]} ></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  max="20" size="2" id="confit-blog-2" animate={false} colors={[[255, 216, 102]]} shapes={["circle"]}></LandingSection>
            </Link>
            <Link to='/experiments' className="  c-card o-post">
              <header class="o-post__header">
                <h2>Experiments</h2>
                <p className="m-0">A place for small micro projects and codepen best-ofs</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-experiments-1" animate={false} size="20" max="3" shapes={["circle"]}  colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} clock="-1"></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  max="13" size="2" shapes={["circle"]}  id="confit-experiments-2" colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} animate={false}  clock="-1"></LandingSection>
            </Link>
            <Link to='/leathercraft' className="  c-card o-post">
              <header class="o-post__header">
                <h2>Leather Work</h2>
                <p className="m-0">A journey from complete amateur, to a slighlty less amateur leatherworker</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-leather-1" animate={false} colors={[[255, 216, 102], [255, 97, 136]]} shapes={["circle"]}></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  max="13" size="2" id="confit-leather-2" animate={false} colors={[[255, 216, 102], [255, 97, 136]]} shapes={["circle"]}></LandingSection>
            </Link>
            <Link to='/contact' className="  c-card o-post">
              <header class="o-post__header">
                <h2>Contact</h2>
                <p className="m-0">Send me a message</p>
              </header>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-contact-1" animate={false} colors={[[ 171, 157, 242], [255, 216, 102]]} shapes={["circle"]}></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  id="confit-contact-2" animate={false} colors={[[ 171, 157, 242], [255, 216, 102]]} shapes={["circle"]}></LandingSection>
            </Link>
          </main>
 
        </div>
      </Layout>
    );
  }
}

export default Index;

