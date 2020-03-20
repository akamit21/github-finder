import React from "react";

const Card = props => {
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <img
          className="card-img-top"
          src={props.data.avatar_url}
          alt={props.data.gravatar_id}
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.login}</h5>
          <small className="badge badge-danger">{props.data.score}</small>
          <hr />
          <button
            value={props.data.url}
            onClick={e => props.profileURL(e.target.value)}
            className="btn btn-outline-success btn-sm"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
