import React from 'react';
import { Container, Row, Col, Card, Button  } from 'reactstrap';
import {ServiceData } from '../../components/ComponentMixing.js';
import {Link } from 'react-router-dom';
import BannerWhoWeAre from '../../assets/images/who-we-are-banner.jpg';


class Services extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Row>
					    	<Col sm={12} md={12} lg={12} xl={12} className="inner-baner">
					    	 <span className="overlay"></span>
							    <img src={BannerWhoWeAre} alert="Who We Are" /	>
							    <h1>Our Services</h1>
							</Col>
						</Row>
						<Container className="inner-content">
								<section>
									  <Row>
								              {
								                ServiceData.map((content,i)=>{
														return(
															
																<Col id="service-box" sm={12} md={4} lg={4} xl={4} className="in service-box">
																	<h2>{content.title}</h2>
																	<p>{content.text}</p>
																	<Link to="/services" className="links"> Read More </Link>
																</Col>
															
															)

													})
								            }
								              
						                </Row>
						        </section>
						</Container>
				
				</React.Fragment>
				
			)
			}
	}


export default Services;