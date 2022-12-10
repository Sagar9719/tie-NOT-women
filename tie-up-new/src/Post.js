import React from 'react'
import "./css/post.css"
import {Avatar} from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post({name, description, message, photoURL}) {
  return (
    <div className="posts">
      <div className="post__header">
        <div className="post_headerLeft">
      <Avatar src={photoURL}/>
      <div className="post_profile_details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
        </div>
       <MoreVertIcon/>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__footer">
        <div className="post__footer__option">
          <ThumbUpIcon/>
          <span>Like</span>
        </div>
        <div className="post__footer__option">
          <CommentIcon/>
          <span>Comment</span>
        </div>

        <div className="post__footer__option">
          <ShareIcon/>
          <span>Share</span>
        </div>
        
        
        <div className="post__footer__option">
          <SendIcon/>
          <span>Send</span>
        </div>

        <div className="post__footer__option">
          <SaveIcon/>
          <span>Save</span>
        </div>


      </div>
    </div>
  )
}

export default Post
