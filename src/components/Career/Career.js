import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import BannerWhoWeAre from '../../assets/images/who-we-are-banner.jpg';

class Career extends React.Component{
	render(){
		return(
				<React.Fragment> 
				    <Row>
				    	<Col sm={12} md={12} lg={12} xl={12} className="inner-baner">
				    	 <span className="overlay"></span>
						    <img src={BannerWhoWeAre} alert="Who We Are" /	>
						    <h1>Our Career</h1>
						</Col>
					</Row>
					<Container className="inner-content">
					<h2> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
							s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
							 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							  Lorem Ipsum passages,
							 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>

							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
							s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
							 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							  Lorem Ipsum passages,
							 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>

							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
							s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
							 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							  Lorem Ipsum passages,
							 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>

							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
							s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
							 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
							  Lorem Ipsum passages,
							 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</Container>
				</React.Fragment>
			)
	}
}

export default Career;