
require('./otherapp.css');
let jsonp = require('../util/jsonp.js');

import React from 'react'; 

let Otherapp = React.createClass({
	getInitialState: function() {
        return {
        	apps: [],
        };
 	},

 	componentDidMount: function() {
    console.log(this.props.source);
    this.setState({
      apps: this.props.source,
    })
 	},
 	
	render: function() {
		let countId = 0;
		return (
			<div className="oapp">
				<ul>
					{
						this.state.apps.map((app) => {
							return <li key={ "otherapp" + countId++ }>  s sss
										<a href={ app.url }>
											<div className="app_icon">
												<img src={ app.icon } alt=""/>
											</div>
											<span>{ app.title }asdasdasdas</span>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
})

module.exports = Otherapp;