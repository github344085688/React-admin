/**
 * Created by f on 2022/8/22.
 */

import  Login  from "../layouts/login/login";
import  Home  from "../layouts/home/home";
const configRouters ={
  routerSettings:[
    {
      path: '/',
      component: Login,
      exact: true,
      groupName: '',
      childs: [{
        title: 'Dashboard',
        icon: require('../assets/img/dashboard.svg'),
        childs: [],

      },]
    },
    {
      path: '/Home',
      component: Home,
      exact: true,
      groupName: 'MAIN MENU', childs: [
      {
        title: 'TMS',
        icon: require('../assets/img/tms2.svg'),
        childs: [{
          title: 'Invoices'
        }, {
          title: 'Invoice History'
        }],
      },
      {
        title: 'Service',
        icon: require('../assets/img/service.svg'),
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
        icon: require('../assets/img/brokerage.svg'),
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
        icon: require('../assets/img/payments.svg'),
      }, {
        title: 'Business Info  ',
        icon: require('../assets/img/businessInfo.svg'),
      },
    ]
    },
    {
      groupName: 'GENERAL', childs: [
      {
        title: 'Message Center ',
        icon: require('../assets/img/MessageCenter.svg'),
      }, {
        title: 'Settings',
        icon: require('../assets/img/setting.svg'),
      },
    ]
    },
  ],
  routerConnfig:[
    {
      path: "/",
      component: Login,
      exact: true,
    },
    {
      path: "/home",
      component: Home,
    }
  ]
};


module.exports = configRouters;