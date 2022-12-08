import React from "react";
import Post from "./Post/post";
import useStyle from './styles.js';
const Posts = () =>{
    const classes = useStyle();
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>

    )
}

export default Posts;