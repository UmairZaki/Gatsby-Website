import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-info" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8  text-center">
                <h1 className="text-white-bold mt-0"><b>HOW IT WORKS</b></h1>
                <hr className="divider light my-4"/>
                <h4 className="text-white mb-4">All programs are one and one & half year long in duration.
                 Each program is divided into four or six quarters (12 weeks each). Classes are held once a week. 
                 In the initial stages, classes will be held only on Sundays. There will 4 sections of classes available,
                  including Artificial Intelligence, Cloud Native and Mobile Web Computing,Internet of Things and Blockchain.
                   Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.</h4>
                <a className="btn btn-light btn-xl" href="https://www.piaic.org/howitworks" target= "_blank">FIND OUT MORE</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Available Programs</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-gem text-primary mb-4"></i> */}
                  {/* <img>  scr="/img/s.jpg" alt = ""</img> */}
                  <h3 className="h4 mb-2">Artificial Intelligence</h3>
                  <p className="text-primary mb-0">Artificial Intelligence (AI) is a theory and development of computer systems able to perform tasks normally requiring human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i> */}
                  <h3 className="h4 mb-2">Cloud Native</h3>
                  <p className="text-primary mb-0">Cloud-native Computing technologies are used to develop applications built with services packaged in containers, deployed as microservices and managed on elastic infrastructure through agile DevOps processes and continuous delivery workflows.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-globe text-primary mb-4"></i> */}
                  <h3 className="h4 mb-2">Blockchain</h3>
                  <p className="text-primary mb-0">“Blocks” on the blockchain are made up of digital pieces of information. Blockchain is a system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  {/* <i className="fas fa-4x fa-heart text-primary mb-4"></i> */}
                  <h3 className="h4 mb-2">Internet of Things</h3>
                  <p className="text-primary mb-0">A system of interrelated computing devices, machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Artificial intelligence
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.png" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Cloud Native
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.png" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Blockchain
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Internet of Things
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Coming Soon</h3>
                    </div>
                    <div className="project-name">
                     SDN/NFV for 5G 
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      <h3>Coming Soon</h3>
                    </div>
                    <div className="project-name">
                      Augmented Riality
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-success text-black">
          <div className="container text-center">
            <h2 className="mb-4" >Please check your city and available course when you apply</h2>
            <a className="btn btn-light btn-xl" href="https://portal.piaic.org/" target= "_blank">Apply Now</a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="mt-0"><b>PIAIC</b></h1>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">The mission of PIAIC is to reshape Pakistan by revolutionizing
                 education, research, and business by adopting latest, cutting-edge technologies.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-4x mb-3 text-muted"></i>
                <div>+92-21-34321224</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-map-marker fa-4x mb-3 text-muted"></i>
                <a className="d-block" href="https://www.google.com/maps/place/Presidential+Initiative+for+Artificial+Intelligence+and+Computing+(PIAIC)+Headquarters/@24.8613137,67.0711981,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33ff89c73993d:0x91c53ba630675f8!8m2!3d24.8612787!4d67.0733723" target = "_blank">Plot 245/2 M, Block 6 PECHS, Karachi, Sindh 75100, Pakistan</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
