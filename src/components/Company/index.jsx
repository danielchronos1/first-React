import React from "react";

function Company({ id, companyName, catchPhrase, bs }) {
  return (
    <div key={`Company-${id}`}>
      <p>{companyName}</p>
      <p>{catchPhrase}</p>
      <p>{bs}</p>
    </div>
  );
}

export default Company;
