import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
    return (
    <>
    {posts.map((post) => (
            <Post key = {post.id}
            id = {post.id} 
            title = {post.title}
            body = {post.body}
            />
        ))}
    </>
    )
}

export default Posts