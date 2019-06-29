import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import LandingSection from "../components/LandingSection/LandingSection";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    console.log(this.props)
    return (
      <Layout>
        <div className="category-container">
          <Helmet
            title={`${category} | ${config.siteTitle}`}
          />
          <main className="">
            
              <header className="page__header" >
                <div class="page__header-content">
                  <h1 className="large">Thoughts on all things CSS</h1>
                <p className="large">tagline goes here</p>
                </div>
                
                <LandingSection id="confit-blog" animate={true} clock={'-1'} colors={[[255, 97, 136]]} shapes={["square", "circle"]}></LandingSection>
              </header>
          <PostListing postEdges={postEdges} />
              </main>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
