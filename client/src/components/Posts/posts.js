import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/post";
import useStyle from './styles.js';
const Posts = () =>{
    const posts = useSelector((state)=> state.posts);
    const classes = useStyle();

    console.log(posts);
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>

    )
}

export default Posts;