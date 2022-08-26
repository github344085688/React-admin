/**
 * Created by f on 2022/8/22.
 */
import logoImg from "../../assets/img/logo.svg";
import logoNanoImg from "../../assets/img/logo-nano.svg";
import GroupName from "./navigation-components/groupName";
import ChildNavs from "./navigation-components/childNavs";
import React, {Component} from 'react'
export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isShowSidebar: false,
      isFold: false,
      isLevelSmall: false,
      navLink: props.navLink
    };
  }

  foldDetails(item) {
    if (this.state.navName == item.title) this.setState({
      navName: ''
    });
    else this.setState({
      navName: item.title
    });
  }

  togoaside(isFold) {
    this.setState({
      isFold: !isFold
    });
    this.props.navClick(isFold);
  }
  childNavClick(nav, item) {
    console.log('nav', nav);
    console.log('item', item);
  }

  render() {
    return (
      <div className={`side-navigation ${this.state.isShowSidebar ? 'show-side-bar' : ''}`}>
        <div className="unis-navigation">
          <div className={`aside-unfold ${this.state.isFold ? 'aside-fold' : ''}`}>
            <div className="aside-controller">
              <b className="right display-xl" onClick={this.togoaside.bind(this, this.state.isFold)}>
                <i className="right-arrow1"></i>
                <i className="right-arrow2"></i>
              </b>
            </div>
            <div
              className={`parent-level-big ${this.state.isFold ? 'parent-level-small' : ''}`}>
              <div className="log-big"><img src={logoImg} alt=""/></div>
              <div className="log-nano"><img src={logoNanoImg} alt=""/></div>
              <div className={`nav-link-detales ${this.state.isFold ? '' : 'overflow-y'}`} >

                { this.state.navLink.map(childNav => {
                  return ( <div className="nav-link-groud">
                    <GroupName data={childNav.groupName}/>
                    {<ChildNavs data={childNav.childs} emitClick ={this.childNavClick} />}
                    {/*//父组件给子组件传递数据，直接用属性名传递，*/}
                  </div> )

                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
