import React from 'react'
import pic1 from "../assets/images/image1.jpg";
import pic2 from "../assets/images/image2.jpg";
import {Link} from 'react-router-dom'

const Post = ({title, body, id}) => {
  return (

    <div className="flex max-w-xs">
        <div className='bg-white flex flex-col h-30 rounded-xl relative drop-shadow-lg'>
            
            { id % 2 == 0 ? <img src={pic2} className ='rounded-t-xl max-h-52' alt = ''></img> 

            : <img src={pic1} className ='rounded-t-xl' alt = ''></img> }

            <div class="absolute px-4 py-1 text-center text-xs font-bold bottom-52 right-5 bg-opacity-50 bg-blue text-white rounded-xl">News</div>
              <div className='pt-3 pl-6 pr-6 pb-6 h-48'>
                <h2 className='font-bold text-lg leading-5'>{title}</h2>
                <p className='line-clamp-2 pt-3 text-gray-400 text-xs'>{body}</p>
                <div className='absolute bottom-4 left-6 text-purple font-bold'>
                  <Link to = {`/Single_Post/${id}`} >Read more</Link>
                </div>
                
              </div>
        </div>  
    </div>
  )
}

export default Post