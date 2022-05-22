import React from 'react'
import Comment from './Comment'

const Comments = ({filteredComment}) => {
  return (
    <>
    {filteredComment.map((comment) => (
            <Comment key = {comment.id}
            email = {comment.email}
            body = {comment.body}
            />
        ))}
    </>
  )
}

export default Comments