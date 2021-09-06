import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link} from 'react-router-dom';
import IconFacebook from '../../assets/images/facebook.png';
import IconTwitter from '../../assets/images/twitter.png';
import IconLinkedin from '../../assets/images/linkedin.png';
import IconYoutube from '../../assets/images/youtube.png';

class Footer extends React.Component{
	render(){
		return(
					<footer className="footer-outer">
						<Container>
						    <Row>
								<Col sm={12} sm={6} sm={6} sm={6}>
									<address>
										<h5> About Company & Address </h5>
										<p className="white">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
											printer took a galley of type and scrambled it to make a type specimen book. It has
										</p>
										<p>
											509, DDA1 Janak Puri, Disctric Center
											New Delhi
									    </p>
		
									</address>
								</Col>
								<Col sm={12} sm={3} sm={3} sm={3}>
									<h5> Quick Link </h5>
									<ul>
											<li><Link to="/whoweare"> Who We Are </Link></li>
											<li><Link to="/whatwedo"> What We Do </Link></li>
											<li><Link to="/contactus"> Contact Us </Link></li>
											<li><Link to="/career"> Career </Link></li>
											<li><Link to="/services"> Services </Link></li>
										
									</ul>
								</Col>
								<Col sm={12} sm={3} sm={3} sm={3} className="get-touch">
									<h5> Get In Touch </h5>
									<ul>
											<li><Link to="/"><img src={IconFacebook} className="App-logo" alt="Facebook" /></Link></li>
											<li><Link to="/"><img src={IconTwitter} className="App-logo" alt="Twitter" /></Link></li>
											<li><Link to="/"><img src={IconLinkedin} className="App-logo" alt="Linkedin" /></Link></li>
											<li><Link to="/"><img src={IconYoutube} className="App-logo" alt="Youtube" /></Link></li>
									</ul>
								</Col>
							</Row>
						</Container>
						<Row>
							<Col className="copyright orange text-white">
			                    <center> <span> &copy; {(new Date().getFullYear())} </span> Intellivision. All Rights Reserved. </center>
			                </Col>
		                </Row>	
					</footer>
				
			)
	}
}

export default Footer;