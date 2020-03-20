import React from "react";

const Repos = props => {
  return (
    <table className="table table-striped table-dark text-left">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">NAME</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">LANGUAGE</th>
          <th scope="col">PUSHED AT</th>
        </tr>
      </thead>
      <tbody>
        {props.reposList.map(obj => (
          <tr key={obj.id}>
            <th scope="row">{obj.id}</th>
            <td>{obj.name}</td>
            <td>{obj.description}</td>
            <td>{obj.language}</td>
            <td>{obj.pushed_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Repos;
