import React,{useState} from "react";
import Post from "../Post";
import "./index.css"
import { fetch } from "../../utils/fetch";

function UserPosts({id}) {
    const [posts, setPosts] = useState([]);
    if (posts.length === 0) {

        fetch.get('/posts', {
            params: {
                userId: id
            }
        })
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('User posts error:', error));

    }
    
    return (
        <div className="userposts"> 
            {posts.map((post) => <Post key={`post-${post.userId}-${post.id}`} {...post}/>)}
        </div>
    )
}

export default UserPosts;