import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import LandingSection from "../components/LandingSection/LandingSection";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="landing ">
           <header className="landing__header"><h1>Design Systems-<br /> Accessibility- <br/>   Progressive Enhancement- <br/>Responsive Design-<br/>  Style Architecture-</h1>
            <p className="large">Scott Weiss is a Front-End/UI Developer (and amature leatherworker) currently based in Portland, Oregon</p>
        
           </header>
           
           <section className="landing__intrest">
            
             <header>
               <h2>Portfolio</h2>
               <p className="m-0">Work that I'm proud of; a mix of professional work and personal projects</p>
             </header>
             <LandingSection id="confit-portfolio" animate={false} colors={[[244,120,33]]}></LandingSection>
           </section>
                <section className="landing__intrest">
                  
             <header>
               <h2>Blog</h2>
               <p className="m-0">Discover exciting new CSS, deep dive into my workflow, and intresting challenges I've overcome</p>
             </header>
             <LandingSection id="confit-blog" animate={true}></LandingSection>
           </section>
                <section className="landing__intrest">
             <header>
               <h2>Resume</h2>
               <p className="m-0">Where I come from and what I've done</p>
             </header>
             <LandingSection id="Resume-blog"  animate={false} colors={[[7, 41, 77],[255, 198,0]]}></LandingSection>
           </section>
                <section className="landing__intrest" id="landing-experement">
             <header>
               <h2>Experiments</h2>
               <p className="m-0">A place for small micro project and codepen best-ofs</p>
             </header>
              <LandingSection id="confit-experiments" animate={true} colors={[[70,184,52], [212,211,211], [43,146,28]]} shapes={["square", "circle"]} clock="-1"></LandingSection>
           </section>
                <section className="landing__intrest" id="landing-leather">
             <header>
               <h2>Leather Work</h2>
               <p className="m-0">A journey from complete amature, to a slighlty less amature leatherworker</p>
             </header>
              <LandingSection id="confit-leather" animate={false} colors={[[247, 211, 170], [255,119,0]]} shapes={["circle"]}></LandingSection>
           </section>
                <section className="landing__intrest">
             <header>
               <h2>Contact</h2>
               <p className="m-0">Send me a message</p>
             </header>
              <LandingSection id="confit-contact" animate={false} colors={[[  0, 170, 255]]}></LandingSection>
           </section>

          
          
       

          </main>
          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
