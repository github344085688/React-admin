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
              className={`parent-level-big ${(this.state.isLevelSmall || this.state.isFold) ? 'parent-level-small' : ''}`}>
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
