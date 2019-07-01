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
          <main className="o-page">
            <header className="o-page__header" >
              <div class="o-page__header-content">
                <h1 className="large">Thoughts on all things CSS</h1>
                <p className="large">tagline goes here</p>
              </div>
               <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-experiments-1" animate={false} size="20" max="5" shapes={["circle"]}  colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} clock="-1"></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  max="30" size="2" shapes={["circle"]}  id="confit-experiments-2" colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} animate={false}  clock="-1"></LandingSection>
            </header>
            <PostListing postEdges={postEdges} /> 
          </main>
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
      filter: { frontmatter: { category: {nin: ["portfolio","leather","experiments"] } } }
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
