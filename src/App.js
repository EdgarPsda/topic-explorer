import logo from "./logo.svg";
import "./App.css";
import gql from "graphql-tag";
import { MainTable } from "./components/MainTable";
import { useEffect, useState } from "react";
import { helpTopic } from "./helpers/helpTopic";

function App(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    props.client
      .query({
        query: helpTopic("react").topic,
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  const handleData = (name) => {
    props.client
      .query({
        query: helpTopic(name).topic,
      })
      .then((res) => {
        setData(res);
      });
  };
  return (
    <div className="container">
      {data ? (
        <MainTable data={data} handleData={handleData} />
      ) : (
        <span>Loading data...</span>
      )}
    </div>
  );
}

export default App;
