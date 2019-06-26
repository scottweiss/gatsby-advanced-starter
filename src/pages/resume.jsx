import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import LandingSection from "../components/LandingSection/LandingSection";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Resume extends  React.Component {
  render() {
    return (
    	       <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="o-page o-page--resume">
            <header className="o-page__header" >
              <div class="o-page__header-content">
                  <h1 className="large">See what I can do</h1>
                  <p className="large">a subset of work</p>
                </div>
                
                <LandingSection id="confit-blog" max={100} animate={true} clock={'-1'} colors={[[70,184,52], [212,211,211], [43,146,28]]}></LandingSection>
              </header>
              
         
       <article class="p-resume">
			
				<section class="c-card">
					<h1 class="p-resume__position">Tembo Inc.</h1>
					<span class=" p-resume__position">Lead Front End Developer</span>
					<p class="p-resume__duration">April 2014 – Present</p>
					<ul class="p-resume__list">
						<li>Collaborated with a team of designers and developers to create reporting suites and web tools to allow education departments to quickly analyze and disseminate their data.</li>
						<li>Took static design mock-ups and style guides and converted them into adaptive and responsive web components.</li>
						<li>Prioritized time, stayed on task, and kept team updated using JIRA.</li>
						<li>Programmatically generated over 75,000 dynamic reports for students in D.C. to assess their PARCC test results.</li>
						<li>Worked heavily with Google Maps JavaScript API to display location results, travel times, and distance between multiple entered locations.</li>
						<li>Utilized ArcGIS data from a government source to enhance a mapping application.</li>
						<li>Managed versions across the team using Git.</li>
						<li>Participated in project requirement gathering with stakeholders to ensure clarity across teams and to identify blockers.</li>
						<li>Implemented functional prototypes with designers for user testing.</li>
						<li>Reported to and worked directly with the CIO.</li>
						<li>Troubleshot and confgured the network for the of ce and served as the main point of contact for network issues.</li>
					</ul>
				</section>

				<section class="c-card">
					<h1 class="p-resume__position">Independence Blue Cross - Enterprise Architecture</h1>
					<span class=" p-resume__position">Developer</span>
					<p class="p-resume__duration">September 2012 – March 2013</p>
					<ul class="p-resume__list">
						<li>Created an application for renaming files for use with the IBX Mobile application.</li>
						<li>Tested and reported defects for the mobile application on both android and iOS platforms.</li>
						<li>Designed mock-ups and wireframes for future releases of IBX Mobile.</li>
					</ul>
				</section>

				<section class="c-card">
					<h1 class="p-resume__position">Cigna - Group Insurance</h1>
					<span class=" p-resume__position">Production Support</span>
					<p class="p-resume__duration">September 2011 – March 2012</p>
					<ul class="p-resume__list">
						<li>Updated and maintained 15 intranet websites using HTML, CSS, .ASP, and Dreamweaver.</li>
						<li>Gathered requirements from peers and server administration groups.</li>
						<li>Built a web application utilizing PHP and Ajax for server change tracking.</li>
						<li>Created a dynamic, easy to use web-based application for sorting servers and attributes.</li>
						<li>Coordinated the decommission of IVR servers in the Bethlehem offces.</li>
					</ul>
				</section>

				<section class="c-card">
					<h1>Skills</h1>
					<p>HTML, CSS3, Sass, JavaScript (jQuery, Ajax, JSON, Gulp), NPM, Bootstrap, SQL, MySQL, Git, Mercurial, JIRA, Windows, OSX, Linux, Microsoft Offce, Google Apps Administration</p>
				</section>

				<section class="c-card">
					<h1>Education</h1>
					<p>Bachelor of Science in Information Technology</p>
					<p class="location">Drexel University, Philadelphia, PA</p>
					<p class="p-resume__duration">June 2014</p>
				</section>

			</article>
          
          
       

          </main>
         
        </div>
      </Layout>
    );
  }
}

export default Resume;
