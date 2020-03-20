import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      type: ""
    };
  }

  searchQuery = e => {
    e.preventDefault();
    let query = {
      q: this.state.q,
      type: this.state.type
    };
    this.props.query(query);
  };

  render() {
    return (
      <div className="container py-4">
        <h5 className="display-4 text-uppercase border-bottom">Search User</h5>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <select
                name="type"
                className="form-control form-control-lg"
                value={this.state.value}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              >
                <option defaultValue>Choose...</option>
                <option value="users">Users</option>
                <option value="repositories">Repos</option>
              </select>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-group">
              <input
                type="text"
                name="q"
                className="form-control form-control-lg"
                placeholder="Search by keyword..."
                value={this.state.q}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-lg btn-outline-dark btn-block"
              onClick={e => this.searchQuery(e)}
            >
              Search...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
