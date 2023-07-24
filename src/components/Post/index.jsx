import React from "react";
import "./index.css";


function Post(data){
    const {userId, id, title, body} = data;

    return (
        <div key={`post-${userId}-${id}`} className="post">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )

}

export default Post;