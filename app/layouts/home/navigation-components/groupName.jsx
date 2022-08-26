/**
 * Created by f on 2022/8/12.
 */
import React, {Component} from 'react'
export default class GroupName extends Component{
  constructor(props) {
    super(props);
    this.state={
      data: props.data
    };
  }

  render() {
    let groupName;
    if (this.state.data){
      groupName = (<div className="group-name">
        <div className="text">{this.state.data}</div>
      </div>)
    }
    return(
      <div>{groupName}</div>
    );
  }

}