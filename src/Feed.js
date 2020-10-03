import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Feed({reload}) {
    const [post, setPosts] = useState([]);

    useEffect (()=>{
        fetch(
            "https://9wr63b62h3.execute-api.us-east-1.amazonaws.com/default/wicstagram"
        )
        .then((posts) => posts.json())
        .then((data)=>{
            setPosts(data.Items);
        });
    }, [reload]);

    const Post = (post) => {

        return(
            <Card>
                <Card.Header>{post.username}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {post.caption}
                        <br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
      }
      
    return (
        <div>
            {post.map(Post)};
        </div>
  );

  
}

export default Feed;