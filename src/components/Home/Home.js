import React from 'react';
import { Container, Row, Col, Card, Button  } from 'reactstrap';
import {Banner, Services, ServiceData } from '../../components/ComponentMixing.js';
import {Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component{
	render(){
		return(
			<React.Fragment>
			<Banner />
			
			<Container>
				<section>
				  <Row>
					<h1>Our Services</h1>
			              {
			                ServiceData.map((content,i)=>{
									return(
										<>
										{(i<6)?(
											<Col id="service-box" sm={12} md={4} lg={4} xl={4} className="in">
												<h2>{content.title}</h2>
												<p>{content.text}</p>
												<Link to="/services" className="links"> Read More </Link>
											</Col>
											):''}
										</>
										)

								})
			            }
			              
	                </Row>

	                <Row>
	             		<Link to="/services" className="btn-color1"> View More </Link>
	                </Row>
	            </section>
			</Container>
			 <section className="home-card">
			    <Row>
			    	<Col>	 		
			 			 <h3 className="title1"> Who We Are </h3>
			 			 <p>
			 			 	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
			 			 	standard dummy text ever since the 1500s, when an unknown printer took 
			 			 </p>
             	    </Col>
			    </Row>
			     <Row>
             		<Link to="/whoweare" className="btn-color1"> Read More </Link>
               	</Row>

             </section>

              <section className="subscribe-card">
               <form>
			    <Row>
			    	<Col sm={6} md={6} lg={6} xl={6} className="margin-auto">	 		
			 			 <h3 className="title1"> SUBSCRIBE NOW </h3>
				          <input type="text" value="" placeholder="johndue@gmail.com"/>
             	    </Col>
			    </Row>
			    
			     <Row>
             	   <input type="submit" value="Submit" className="btn-color1"/>
               	</Row>
               	</form>
             </section>
             

			</React.Fragment>
			)
	}
}

export default Home;