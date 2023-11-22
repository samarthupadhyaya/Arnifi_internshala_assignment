import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


const Post = () => {
  return (
    <div className='post'>
     <div className='post_header'>
        <div className='post_headerAuthor'>

        <Avatar>R</Avatar>
        redian_. <span>12h</span>
        </div>
       <div>
        
       </div>
     </div>
     <div className='post_image'>
        <img src='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
     </div>
     <div className='post_footer'>
        <div className='past_footerIcon'>
            <div className='post_iconMain'>
                <FavoriteBorderIcon className='postIcon'/>
                <ChatBubbleOutlineIcon className='postIcon'/>
                <TelegramIcon className='postIcon'/>
            </div>
                <div className='post_iconSave'>
                    <BookmarkBorderIcon className='postIcon'/>
                </div>

        </div>
        Liked by 21 people
     </div>
    </div>
  )
}

export default Post
