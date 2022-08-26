/**
 * Created by f on 2022/8/24.
 */
import React, {Component} from 'react';
export default class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps, prevState) {
    /*   if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;*/
  }

  render() {
    return (
      <div className="unis-topBar" style={{position: 'absolute',left:this.props.left, top:"0",right:'0',  transition: 'left 0.5s'}}>
        {this.props.left}
        <div className="search-box">
          <input type="text"/>
            <div className="placeholder">Search here</div>
           {/* <img src="img/search.svg" alt="">*/}
        </div>
        <div className="bell-box">
          <button className="unis-icon-btn br-white h-w-40">
            <i className="newicon-95 f-20"></i>
          </button>
          <div className="hint-box">1</div>
          <div className="notifications" style={{display: 'none'}}>
            <div className="title-box">Notifications</div>
            <div className="messages_connect">
              <div className="messages-box">
                <div className="message-lable">
                  <span>Messages (3)</span>
                  <span className="vew-all">View All</span>
                </div>
                <div className="detal_box">
                  <div className="message-detals">
                    <div className="img-box"></div>
                    <div className="detal-message">
                      <div className="title">Nick Mahncke</div>
                      <div className="name">Shipment Name</div>
                      <div className="note">@User, good afternoon and thank you for your request.</div>
                    </div>
                    <div className="detal-stage"></div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="unis-button">Show</div>
                  </div>
                </div>
                <div className="detal_box">
                  <div className="message-detals">
                    <div className="img-box"></div>
                    <div className="detal-message">
                      <div className="title">Nick Mahncke</div>
                      <div className="name">Shipment Name</div>
                      <div className="note">@User, good afternoon and thank you for your request.</div>
                    </div>
                    <div className="detal-stage"></div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="unis-button">Show</div>
                  </div>
                </div>
                <div className="detal_box">
                  <div className="message-detals">
                    <div className="img-box"></div>
                    <div className="detal-message">
                      <div className="title">Nick Mahncke</div>
                      <div className="name">Shipment Name</div>
                      <div className="note">@User, good afternoon and thank you for your request.</div>
                    </div>
                    <div className="detal-stage"></div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="unis-button">Show</div>
                  </div>
                </div>
              </div>
              <div className="messages-box">
                <div className="message-lable">
                  <span>Tasks (1)</span>
                  <span className="vew-all">View All</span>
                </div>
                <div className="detal_box">
                  <div className="message-detals">
                    <div className="img-box"></div>
                    <div className="detal-message">
                      <div className="title">Nick Mahncke</div>
                      <div className="name">Shipment Name</div>
                      <div className="note">@User, good afternoon and thank you for your request.</div>
                    </div>
                    <div className="detal-stage"></div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="unis-button mr-4">Mark as read</div>
                    <div className="unis-button">Show</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user_box ">
          <button className="unis-icon-btn br-white h-w-40">
            <div className="w-h-32">
              <div className="user">U</div>
            </div>
          </button>
          <div className="user-connect" style={{display: 'none'}}>
            <div className="user-detal">
              <div className="title">User</div>
              <div className="eml">name@unisco.com</div>
              <div className="manage">User settings</div>
            </div>
            <div className="user-detal">
              <div className="title">UNIS</div>
              <div className="manage">Manage account</div>
            </div>
            <div className="logout">Logout</div>
          </div>
        </div>
        <div style={{position: 'fixed', inset: '0px', Zindex: '0', display: 'none'}}></div>
      </div>
    );
  }

}