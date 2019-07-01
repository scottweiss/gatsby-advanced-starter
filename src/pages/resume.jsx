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
              	<div className="o-page__header-content">
                  <h1 className="large">2008 - Now</h1>
                  <p className="large">a brief overview of time well spent</p>

                </div>
                <div className="print-header">
	              	<h1>Scott Weiss</h1>
	              </div>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--1"  id="confit-experiments-1" animate={false} size="20" max="5" shapes={["circle"]}  colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} clock="-1"></LandingSection>
              <LandingSection class="o-post__header__backdrop o-post__header__backdrop--2"  max="30" size="2" shapes={["circle"]}  id="confit-experiments-2" colors={[[ 171, 157, 242], [255, 216, 102], [255, 97, 136]]} animate={false}  clock="-1"></LandingSection>
              
            </header>
              
         
      		<article className="p-resume">
				<section>
					<article className="p-resume__job">
						<h1 className="p-resume__employer">Tembo Inc.</h1>
						<h2 className="p-resume__role">Lead Front End Developer</h2>
						<p className="p-resume__duration"><i className="p-resume__icon far fa-calendar-alt fa-fw"></i>April 2014 – Present</p>
						<ul className="p-resume__list">
							<li>Collaborated with a team of designers and developers to create reporting suites and web tools to allow education departments to quickly analyze and disseminate their data.</li>
							<li>Developed a scaleable and extendable design system for our primary products; implemented for several state departments of education.</li>
							<li>Took static design mock-ups and style guides and converted them into adaptive and responsive web components and layouts.</li>
							<li>Programmatically generated over 80,000 dynamic reports for students in D.C. to assess their standardized test results.</li>
							<li>Prioritized time, stayed on task, and kept the team updated using JIRA.</li>
							
							<li>Worked heavily with Google Maps JavaScript API to display location results, travel times, and distance between multiple entered locations.</li>
							<li>Utilized ArcGIS data from a government source to enhance a mapping application.</li>
							<li>Participated in project requirement gathering with stakeholders to ensure clarity across teams and to identify blockers.</li>
							<li>Implemented functional prototypes with designers for user testing.</li>
							<li>Troubleshot and confgured network issues offce and served as the main point of contact for our network vendors.</li>
						</ul>
					</article >

					<article className="p-resume__job">
						<h1 className="p-resume__employer">Independence Blue Cross </h1>
						<h2 className="p-resume__role">Developer - Enterprise Architecture</h2>
						<p className="p-resume__duration"><i className="p-resume__icon far fa-calendar-alt fa-fw"></i>September 2012 – March 2013</p>
						<ul className="p-resume__list">
							<li>Created an application for renaming files for use with the IBX Mobile application.</li>
							<li>Tested and reported defects for the mobile application on both android and iOS platforms.</li>
							<li>Designed mock-ups and wireframes for future releases of IBX Mobile.</li>
						</ul>
					</article >

					<article className="p-resume__job">
						<h1 className="p-resume__employer">Cigna</h1>
						<h2 className="p-resume__role">Production Support - Group Insurance</h2>
						<p className="p-resume__duration"><i className="p-resume__icon far fa-calendar-alt fa-fw"></i>September 2011 – March 2012</p>
						<ul className="p-resume__list">
							<li>Updated and maintained 15 intranet websites using HTML, CSS, .ASP.</li>
							<li>Gathered requirements from peers and server administration groups.</li>
							<li>Built a web application utilizing PHP and Ajax for server change tracking.</li>
							<li>Created a dynamic, easy to use web-based application for sorting servers and attributes.</li>
							<li>Coordinated the decommission of IVR servers.</li>
						</ul>
					</article>
					<article className="p-resume__job no-print">
						<h1 className="p-resume__employer">SAP</h1>
						<h2 className="p-resume__role">Level 2 Helpdesk Support</h2>
						<p className="p-resume__duration"><i className="p-resume__icon far fa-calendar-alt fa-fw"></i>September 2010 – March 2011</p>
						<ul className="p-resume__list">
							<li>Configured laptops for newly hired employees.</li>
							<li>Performed data migrations for users receiving new or upgraded laptops.</li>
							<li>Assisted remote users by troubleshooting problems over the phone.</li>
							<li>Installed new printers, monitors, and desktops campus wide.</li>
							<li>Upgraded classrooms with new hardware and cabling.</li>
						</ul>
					</article>
					<article className="p-resume__job no-print">
						<h1 className="p-resume__employer">Bensalem School District</h1>
						<h2 className="p-resume__role">Support Technician</h2>
						<p className="p-resume__duration"><i className="p-resume__icon far fa-calendar-alt fa-fw"></i>2008 - 2009</p>
						<ul className="p-resume__list">
							<li>Maintained a series of laptop carts for use in school classrooms.</li>
							<li>Engaged in troubleshooting networked computers to assure functionality in classroom labs.</li>
							<li>Relocated and prepared computer set up for staff use.</li>
							<li>Worked with other tech support members to complete a variety of computer networking projects.</li>
						</ul>
					</article>
			</section>

			<aside className="p-resume__skillset">
					<section>
						<h1>Skills</h1>
						<div className="p-resume__skills" >
							<figure>
								<figcaption className="p-resume__list-heading">Essentials</figcaption>
								<ul className="p-resume__list">
									<li>HTML/5</li>
									<li>CSS/3</li>
									<li>Flex/Grid</li>
									<li>Browser limitations</li>
									<li>Sass</li>
									<li>Bootstrap</li>
								</ul>
							</figure>
							<figure>
								<figcaption className="p-resume__list-heading">Scripting</figcaption>
								<ul className="p-resume__list">
									<li>JavaScript</li>
									<li>Vue/React</li>
									<li>Jekyll/GatsbyJS</li>
									<li>Handlebars/Jinja2</li>
									<li>Markdown</li>
									<li>jQuery</li>
									<li>Gulp/Webpack</li>
									<li>NPM</li>
								</ul>
							</figure>
							<figure>
								<figcaption className="p-resume__list-heading">Other Tools</figcaption>
								<ul className="p-resume__list">
									<li>SQL</li>
									<li>MySQL</li>
									<li>Git/Mercurial</li>
									<li>JIRA/Slack</li>
									<li>Windows, OSX, Linux</li>
									<li>Microsoft Offce</li>
									<li>Google Apps Administration</li>
								</ul>
							</figure>
						</div>
					</section>
				
					
					
			

				<section className="">
					<h1>Education</h1>
					<p>Bachelor of Science in Information Technology</p>
					<p className="location" style={{marginBottom: 0}}>Drexel University,<wbr/> <span style={{whiteSpace: "nowrap"}}>Philadelphia, PA</span></p>
					<p className="p-resume__duration"><i className="p-resume__icon fas fa-graduation-cap fa-fw"></i>June 2014</p>
				</section>
	</aside>
			</article>
          
          
       

          </main>
         
        </div>
      </Layout>
    );
  }
}

export default Resume;
