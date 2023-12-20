import React, { Component } from "react";
import WebPage from "./WebPage";
import MyProfile from "./MyProfile";
import "./WebPage.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      changeTheme: true,
      showProfile: true,
    };
  }
  handleClick = (e) => {
    if (this.state.changeTheme) {
      this.setState({ changeTheme: false });
    } else {
      this.setState({ changeTheme: true });
    }
  };
  handleClickProfile = (e) => {
    if (this.state.showProfile === true) {
      this.setState({ showProfile: false });
    } else {
      this.setState({ showProfile: true });
    }
  };
  render() {
    const { changeTheme, showProfile } = this.state;
    const { handleClick, handleClickProfile } = this;

    return showProfile ? (
      <div className={changeTheme ? "App" : "App2"}>
        <WebPage
          onclick={handleClick}
          onshow={(e) => handleClickProfile(e)}
          changeTheme={changeTheme}
        />
      </div>
    ) : (
      <div className="profile">
        <MyProfile onshow={(e) => handleClickProfile(e)} />
      </div>
    );
  }
}

export default App;
