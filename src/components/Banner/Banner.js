import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';


class Banner extends React.Component{
	render(){
		return(
			<Carousel>
	                <div>
	                    <img src={Banner1} />
	                    <p className="legend">Legend 1</p>
	                </div>
	                <div>
	                    <img src={Banner2} />
	                    <p className="legend">Legend 1</p>
	                </div>
	                <div>
	                    <img src={Banner3} />
	                    <p className="legend">Legend 1</p>
	                </div>

	            </Carousel>
			)
	}
}

export default Banner;