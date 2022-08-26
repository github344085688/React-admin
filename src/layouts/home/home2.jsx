/**
 * Created by f on 2022/8/9.
 */


require('../../css/unis.css');
import logoImg from "../../assets/img/logo.svg";
import logoNanoImg from "../../assets/img/logo-nano.svg";
import arrowDownImg from "../../assets/img/arrow-down.svg";
import GroupName from "./navigation-components/groupName";
import ChildNavs from "./navigation-components/childNavs";

import React, {Component} from 'react'
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isShowSidebar: false,
      isFold: false,
      isLevelSmall: false,
      isFoldDetails: false,
      navLink: [
        {
          groupName: '',
          childs: [{
            title: 'Dashboard',
            icon: require('../../assets/img/dashboard.svg'),
            childs: [],

          },]
        },
        {
          groupName: 'MAIN MENU', childs: [
          {
            title: 'TMS',
            icon: require('../../assets/img/tms2.svg'),
            childs: [{
              title: 'Invoices'
            }, {
              title: 'Invoice History'
            }],
          },
          {
            title: 'Service',
            icon: require('../../assets/img/service.svg'),
            childs: [{
              title: 'Option1',
            }, {
              title: 'Option2',
            }, {
              title: 'Option3',
            }, {
              title: 'Option4',
            }, {
              title: 'Option5',
            }, {
              title: 'Option6',
            }, {
              title: 'Option7',
            }, {
              title: 'Option8',
            }, {
              title: 'Option9',
            },],
          },
          {
            title: 'Brokerage',
            icon: require('../../assets/img/brokerage.svg'),
            childs: [{
              title: 'Option1',
            }, {
              title: 'Option2',
            }, {
              title: 'Option3',
            }, {
              title: 'Option4',
            }, {
              title: 'Option5',
            }, {
              title: 'Option6',
            }, {
              title: 'Option7',
            },],
          },
        ]
        },
        {
          groupName: 'MY BUSINESS', childs: [
          {
            title: 'Payments ',
            icon: require('../../assets/img/payments.svg'),
          }, {
            title: 'Business Info  ',
            icon: require('../../assets/img/businessInfo.svg'),
          },
        ]
        },
        {
          groupName: 'GENERAL', childs: [
          {
            title: 'Message Center ',
            icon: require('../../assets/img/MessageCenter.svg'),
          }, {
            title: 'Settings',
            icon: require('../../assets/img/setting.svg'),
          },
        ]
        },
      ],

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
    if (this.state.isFoldDetails) this.setState({
      isLevelSmall: true
    });
    this.setState({
      isFold: !isFold
    });
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
              className={`parent-level-big ${(this.state.isLevelSmall || this.state.isFold) ? 'parent-level-small' : ''}`}>
              <div className="log-big"><img src={logoImg} alt=""/></div>
              <div className="log-nano"><img src={logoNanoImg} alt=""/></div>
              <div className="nav-link-detales">

                 { this.state.navLink.map(childNav => {
                  return ( <div className="nav-link-groud">
                    <GroupName data={childNav.groupName}/>
                    {/*<ChildNavs data={childNav.childs}/>*/}
                    {
                      childNav.childs.map(item => {
                        let arrowDown;
                        if (item.childs && item.childs.length > 0) {
                          arrowDown = (
                            <img src={arrowDownImg}
                                 className={`${this.state.navName == item.title ? "transform-180" : ""}`}/>
                          )
                        }
                        let childsItems;
                        if (item.childs && item.childs.length > 0) {
                          let childsItemHeight   = {
                            height: `${45*item.childs.length}px`,
                          };
                          childsItems = (
                            <div className={`${this.state.isFold ? "hover-details" : "childs-box"} ${(this.state.navName != item.title && !this.state.isFold) ? "show-childs" : ""}`} style={childsItemHeight} >
                              <div className={`${this.state.isFold ? "hover-details-box" : ""}`}>
                                {
                                  item.childs.map(nav =>{
                                    return(
                                      <div className={`${this.state.isFold ? "hover-details-item" : "child-item"}`}>
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

                          <div className={`item_box ${this.state.navName == item.title ? 'active' : ''}`} onClick={this.foldDetails.bind(this, item)}>
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
                      })
                    }
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
