import React from "react";
import "../styles/Home.css";
import { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import { ImCross } from "react-icons/im";
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Single_Post from "../components/Single_Post";


function Home() {
  const [posts, setPosts] = useState ([])

  const [showHeader, setShowHeader] = useState (true)

  useEffect(() => {

    fetchPosts()
  
  },[])

  //Fetch Posts
  const fetchPosts = async() => {
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>setPosts(data))
    .catch((err) => {
      console.log(err);
    })
  }

  return (
  <Router>
    <>
    <Routes>
    <Route path = '/' element = {
      <>

        {/* A conditional rendering. If showHeader is true, it will render the div. If it is false, it
        will not render the div. */}
        {showHeader &&   

        <div className="bg-purple py-2 flex flex-row items-center">
        
        <h3 className="text-white pl-48">We are hosting events with Zoom Webinars!</h3>
        <Link to = {'/'} className = 'text-white px-3 underline'>Find out more </Link>
        
        <div className="absolute right-48">

        <ImCross size={12} className="fill-white cursor-pointer" onClick = {() => setShowHeader(!showHeader)}/>
        </div>


        </div>

        }

        <h1 className="pt-14 pb-10 w-full text-center text-purple font-bold text-4xl">
          Latest News
        </h1>

        <p className = "px-80 pb-5 text-center font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem debitis quibusdam sit optio explicabo inventore ratione accusamus temporibus nesciunt dolores incidunt, quasi delectus officiis doloremque voluptatum odio eius accusantium nam.</p>
        
        <div className="container mx-auto px-60">
          <div className='p-6 grid grid-cols-3 gap-6'>

            {/* A ternary operator. It is a conditional rendering. If the length of the posts array is greater than
            0, it will render the Posts component. If it is not, it will render the text 'Loading...' */}
            {posts.length > 0 ? 
            (<Posts posts = {posts}/> )
            :('Loading....')}
            
          </div>
        </div>
      </>
    }></Route>
    <Route exact path = '/Single_Post/:id' element = {<Single_Post/>}/>
    </Routes>        
    </>
    </Router>
  );
}

export default Home;
