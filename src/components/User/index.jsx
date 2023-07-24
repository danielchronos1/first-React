import React from "react";
import Address from "../Address";
import Company from "../Company";
import './index.css';

function User(data) {
  const { id, name, username, email, address, phone, website, company } = data;
  return (
    <div key={`User-${id}`} className='user'>
      <div>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
      <div>
        <Address {...address} />
      </div>
      <div>
       <Company {...company}/>
       <button>Show Posts</button>
      </div>
    
    </div>
  );
}

export default User;
