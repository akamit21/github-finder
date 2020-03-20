import React from "react";
import Repos from "./Repos";

const Info = props => {
  return (
    <div className="row">
      <div className="col-md-5">
        <img
          className="img-thumbnail"
          src={props.profileInfo.avatar_url}
          alt="profile"
        />
      </div>
      <div className="col-md-7 text-left">
        <h5>{props.profileInfo.name}</h5>
        <h6>{props.profileInfo.bio}</h6>
        <hr />
        <ul className="list-unstyled">
          <li>
            <small>
              <em>Login ID: </em>
              {props.profileInfo.login}
            </small>
          </li>
          <li>
            <small>
              <em>Address: </em>
              {props.profileInfo.location}
            </small>
          </li>
        </ul>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="col">Repos</th>
              <th scope="col">Followers</th>
              <th scope="col">Following</th>
            </tr>
            <tr>
              <td>{props.profileInfo.public_repos}</td>
              <td>{props.profileInfo.followers}</td>
              <td>{props.profileInfo.following}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Followers = props => {
  return (
    <table className="table table-striped table-dark text-left">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">GRAVATAR</th>
          <th scope="col">NAME</th>
        </tr>
      </thead>
      <tbody>
        {props.followers.map(obj => (
          <tr key={obj.id}>
            <th scope="row">{obj.id}</th>
            <td>
              <img
                className="img-thumbnail img-circle"
                style={{ width: "40px" }}
                src={obj.avatar_url}
                alt="profile"
              />
            </td>
            <td>{obj.login}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Profile = props => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Info profileInfo={props.profile} />
      </div>
      <div className="col-md-6">
        <Followers followers={props.followers} />
      </div>
      <div className="col-md-12 table-responsive border-top mt-3 pt-3">
        <Repos reposList={props.repos} />
      </div>
    </div>
  );
};

export default Profile;
