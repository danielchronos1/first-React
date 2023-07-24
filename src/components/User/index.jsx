import React, { useState } from "react";
import Address from "../Address";
import Company from "../Company";
import './index.css';
import UserPosts from "../UserPosts";

function User(data) {
  const { id, name, username, email, address, phone, website, company } = data;

  const[showPosts, setShowPosts] = useState (false);


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
       <button onClick={() => setShowPosts(!showPosts)}>{!showPosts ?  'Show Posts' : 'Hide Posts'}</button>
       {showPosts && <UserPosts id={id}/>}
      </div>
    
    </div>
  );
}

export default User;
