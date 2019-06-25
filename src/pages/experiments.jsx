import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import LandingSection from "../components/LandingSection/LandingSection";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Experiment extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="">
            
              <header className="page__header" >
                <div class="page__header-content">
                  <h1 className="large">Because why not?</h1>
                <p className="large">fun things of little importance that I wanted to give a home</p>
                </div>
                
                <LandingSection id="confit-blog" animate={true} clock={'-1'}  shapes={["square", "circle"]}></LandingSection>
              </header>
              
         
           
              <PostListing postEdges={postEdges} /> 
          
          
       

          </main>
         
        </div>
      </Layout>
    );
  }
}

export default Experiment;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query experimentQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "experiments" } } }
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
            displaydate
            byline
          }
        }
      }
    }
  }
`;
