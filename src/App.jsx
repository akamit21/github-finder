import React from "react";
import axios from "axios";
import Search from "./component/Search";
import Card from "./component/Card";
import Repos from "./component/Repos";
import Profile from "./component/Profile";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      profile: [],
      followers: [],
      repos: [],
      showDisplay: false
    };
  }

  callAPI = async param => {
    let res = await axios(param);
    return res.data;
  };

  fetch = async query => {
    let url;
    if (query.type === "users") {
      url = "https://api.github.com/search/users";
    } else if (query.type === "repositories") {
      url = "https://api.github.com/search/repositories";
    }
    const requestParam = {
      method: "get",
      url: url,
      params: {
        q: query.q
      }
    };
    let data = await this.callAPI(requestParam);
    console.log(data);
    if (query.type === "users") {
      this.updateState("users", data.items);
    } else if (query.type === "repositories") {
      this.updateState("repos", data.items);
    }
  };

  fetchProfile = async url => {
    const requestParam = {
      method: "get",
      url: url
    };
    let data = await this.callAPI(requestParam);
    this.updateState("profile", data);

    this.fetchFollowers(data.followers_url);
    this.fetchRepos(data.repos_url);
    this.updateState("showDisplay", true);
  };

  fetchFollowers = async url => {
    const requestParam = {
      method: "get",
      url: url
    };
    let data = await this.callAPI(requestParam);
    this.updateState("followers", data);
  };

  fetchRepos = async url => {
    const requestParam = {
      method: "get",
      url: url
    };
    let data = await this.callAPI(requestParam);
    this.updateState("repos", data);
  };

  updateState = (key, data) => {
    this.setState({
      [key]: data
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header App-weight-600">Github Finder</header>

        <Search query={this.fetch} />

        {this.state.showDisplay ? (
          <div className="container">
            <Profile
              profile={this.state.profile}
              followers={this.state.followers}
              repos={this.state.repos}
            />
          </div>
        ) : (
          <React.Fragment>
            <div className="container">
              <div className="row">
                {this.state.users.map(obj => (
                  <Card
                    key={obj.id}
                    data={obj}
                    profileURL={this.fetchProfile}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div className="row">
                <Repos reposList={this.state.repos} />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
