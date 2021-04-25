import React from "react";
import { RepoRow } from "./RepoRow";

export const MainTable = ({ data, handleData }) => {
  return (
    <>
      <h3>React Topics</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Star Gazers</th>
            <th>Related Topics</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== null ? (
            <RepoRow dataRow={data} handleData={handleData} />
          ) : (
            <span>Loading row...</span>
          )}
        </tbody>
      </table>
    </>
  );
};
