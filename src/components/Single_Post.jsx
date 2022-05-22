import React from 'react'
import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom'
import pic1 from "../assets/images/image1.jpg";
import pic2 from "../assets/images/image2.jpg";
import Comments from '../components/Comments';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {Link} from 'react-router-dom'
import { data } from 'autoprefixer';

const Single_Post = () => {
  const {id} = useParams();

  const [post, setPost] = useState ([])

  const [comments, setComments] = useState ([])

  const [filteredComment,setFilteredComment] = useState(comments)


  useEffect(() => {

    fetchPost()

    fetchComments()
  
  },[])

  //Fetch Post
  const fetchPost = async() => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res)=>res.json())
      .then((data)=>setPost(data))
      .catch((err) => {
        console.log(err);
    })
  }

  //Fetch Comment
  const fetchComments = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    setComments(data)
    setFilteredComment(data)
  }

  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    let result = [];
    result = comments.filter((data) => {
    return data.email.toLowerCase().search(value) != -1;
    });
    setFilteredComment(result);
  }
  
  return (

    <div className='mx-60'>

      <div className='pt-20 flex flex-row items-center'>
      <MdOutlineKeyboardArrowLeft/><Link to = {'/'} className = 'px-3 font-bold'>Back </Link>
      </div>
      
      <h1 className="pt-3 pb-10 w-full text-left text-purple font-bold text-4xl">
        {post.title}

      </h1>
      <div className='flex items-center justify-center'>

      { post.id % 2 == 0 ? <img src={pic2} className ='scale-250' alt = ''></img> 

      : <img src={pic1} className ='pt-14 scale-110 ' alt = ''></img> }

      </div>

      <p className='pt-20 pb-10'>{post.body}</p>

      <hr className='border-black'/>

      <h1 className="pt-10 pb-5 w-full text-left text-purple font-bold text-3xl">
        Comment ({comments.length})
      </h1>

      

      <label htmlFor="emailInput" className='pb-20'>
        <input type="text" onChange={(event) =>handleSearch(event)} placeholder='       Email        ' className='border-2 border-purple rounded-md w-96 h-10' />
      </label>

      <div>

        {filteredComment.length > 0 ? 
            (<Comments filteredComment = {filteredComment}></Comments> )
        :(<div className='mx-14 py-5'>No Such Email Could not be found</div>)}

        
        
      </div>

      <div className='pb-10'>
        <hr className='border-black '/>
      </div>
      
    </div>

    
  )
}

export default Single_Post