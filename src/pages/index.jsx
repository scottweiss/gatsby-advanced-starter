import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";

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
          <main class="landing ">
           <header class="landing__header"><h1>Hello World!</h1>
            <p>Scott Weiss is a Front-End/UI Developer specializing in design systems, accessability, progressive enhancement, responsive design, and style scalability. He currently works for Tembo Inc. in Portland, Oregon.</p>
        
           </header>
          
          
          <nav class="landing__nav">

         
            <a href="" class="landing__article" id="blog-link">
              <i class="fa-fw fas fa-newspaper"></i>
              <h2>blog</h2>
            </a>
      
            <a href="" class="landing__article" id="portfolio-link"><i class="fa-fw fas fa-briefcase"></i><h2>portfolio</h2></a>
            <a class="landing__article" id="leather-link" href="">
              <i class="fas fa-flask"></i>
              <h2>experiments</h2>
            </a>
            <a class="landing__article" id="leather-link" href="">
              <i class="fa-fw fas fa-wallet"></i>
              <h2>leather</h2>
            </a>
            <a class="landing__article" id="resume-link" href="/resume">
              <i class="fa-fw fas fa-file"></i>
              <h2>resume</h2>
            </a>

            <a href="/about"class="landing__article" id="contact-link">
              <i class="fa-fw fas fa-address-card"></i>
              <h2>contact</h2>
            </a>
          </nav>

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
