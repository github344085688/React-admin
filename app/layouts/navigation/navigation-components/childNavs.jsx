/**
 * Created by f on 2022/8/12.
 */
import React, {Component} from 'react';
import arrowDownImg from "../../../assets/img/arrow-down.svg";
export default class ChildNavs  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      navName:''
    };
  }

  foldDetails(nav, item = null) {
    if (this.state.navName == nav.title) this.setState({
      navName: ''
    });
    else if(nav.childs && nav.childs.length > 0) this.setState({
      navName: nav.title
    });
    this.props.emitClick(nav,item);
   /* 子组件通过props获取父组件传递过来的值*/
  }


  render() {
    return (
      <div>
      {this.state.data.map(item => {
        let arrowDown;
        if (item.childs && item.childs.length > 0) {
          arrowDown = (
            <img src={arrowDownImg}
                 className={`${this.state.navName == item.title ? "transform-180" : ""}`}/>
          )
        }
        let childsItems;
        if (item.childs && item.childs.length > 0) {
          let childsItemHeight = {
            height: `${45 * item.childs.length}px`,
          };
          childsItems = (
            <div className={`${this.state.isFold ? "hover-details" : "childs-box"} ${(this.state.navName != item.title && !this.state.isFold) ? "show-childs" : ""}`}
              style={childsItemHeight}>
              <div className={`${this.state.isFold ? "hover-details-box" : ""}`}>
                {
                  item.childs.map(nav => {
                    return (
                      <div className={`${this.state.isFold ? "hover-details-item" : "child-item"}`} onClick={this.foldDetails.bind(this, nav, item)}>
                        <div className="line"></div>
                        {nav.title}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
        return <div className="item_connect">

          <div className={`item_box ${this.state.navName == item.title ? 'active' : ''}`}
               onClick={this.foldDetails.bind(this, item)}>
            <div className="img-box">
              <img src={item.icon}/>
            </div>
            <div className="pro-ab">
              <div className="text-box">
                <a href="#" className="unis-a">
                  <div className="text but-t1">{item.title}</div>
                </a>
                {arrowDown}
              </div>
            </div>
          </div>
          {childsItems}
        </div>
      })}
      </div>
    );
  }
}
