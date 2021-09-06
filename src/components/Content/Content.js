import React from 'react';
import {Row, Col} from 'reactstrap';
import { SwitchRouting } from '../ComponentMixing.js';
class Content extends React.Component{
	render(){
		return(
			<main className="content-part">
				<SwitchRouting />
			</main>
			)
	}
}

export default Content;