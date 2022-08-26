/**
 * Created by f on 2022/8/22.
 */
require('./css/unis.css');
import React, {Component} from 'react';
import Navigation from "./layouts/navigation/navigation";
import TopNavigation from "./layouts/top-navigation/topNavigation";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routerSettings, routerConnfig}  from "./router/router";
import { renderRoutes } from 'react-router-config';
export default class  App extends Component{
  constructor(props){
    super(props);
    this.state = {
      navLeft: '15rem'
    };
  }

  togoaside(isSmall) {
    this.setState({
      navLeft: isSmall ? '15rem' : '4.375rem',
    });
  }
  render() {
    return (
      <div style={{width:'100%', height:'100%'}}>
       <TopNavigation left={this.state.navLeft}/>
       <Navigation navLink={routerSettings} navClick={this.togoaside.bind(this)} />
        <div  style={{position: 'absolute',left:this.state.navLeft, top:"60px",right:'0', bottom:'0', transition: 'left 0.5s',height:'calc(100% - 60px)', background:'#6f7790'}}>
         {/* <Router>
            {renderRoutes(routerConnfig)}
          </Router>*/}
            {/*<Router>
                   <Route exact path='/' component={Login}></Route>
                   <Route path='/home' component={Home}></Route>
           </Router>*/}
        </div>
      </div>
    )
  }
}
