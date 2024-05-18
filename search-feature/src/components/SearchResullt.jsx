import React from "react";
const SearchResults = ({ result }) => {
  return (
    <div className="result-bar">
      {result.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};
export default SearchResults;
