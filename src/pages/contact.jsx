import React, { Component } from "react";
import Helmet from "react-helmet";
import LandingSection from "../components/LandingSection/LandingSection";
import Layout from "../layout";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <main className="Contact-container">
          <Helmet title={`Contact | ${config.siteTitle}`} />
          <Contact />
          <LandingSection  max="40" size="7" id="Resume-blog-2" shapes={["circle"]} animate={false} colors={[[ 171, 157, 242], [255, 97, 136]]} shapes={["circle"]}></LandingSection>
        </main>
      </Layout>
    );
  }
}

export default ContactPage;
