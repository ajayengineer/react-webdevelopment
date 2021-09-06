import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Home, WhoWeAre, Banner, Content, WhatWeDo, ContactUs, Career, Services } from '../ComponentMixing.js';
class SwitchRouting extends React.Component{
    render(){
        return(
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/WhoWeAre" component={WhoWeAre} />
                    <Route path="/WhatWeDo" component={WhatWeDo} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/career" component={Career} />
                    <Route path="/services" component={Services} />
                  
                </Switch>
            );
    }
}

export default SwitchRouting;