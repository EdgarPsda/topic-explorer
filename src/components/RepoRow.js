import React from "react";

export const RepoRow = ({ dataRow, handleData }) => {
  return (
    <>
      <tr>
        <td>{!dataRow.data.loading ? dataRow.data.topic.name : "loading"}</td>
        <td>
          {!dataRow.data.loading
            ? dataRow.data.topic.stargazerCount
            : "loading"}
        </td>
        <td>
          <ul className="list-group">
            {dataRow.data.topic.relatedTopics
              ? dataRow.data.topic.relatedTopics.map((el) => (
                  <li key={el.id} className="list-group-item">
                    {el.name ? (
                      <button
                        onClick={() => {
                          handleData(el.name);
                        }}
                      >
                        {el.name}
                      </button>
                    ) : (
                      <button onClick={handleData("react")}>Refresh</button>
                    )}
                  </li>
                ))
              : "Loading data..."}
          </ul>
        </td>
      </tr>
    </>
  );
};
