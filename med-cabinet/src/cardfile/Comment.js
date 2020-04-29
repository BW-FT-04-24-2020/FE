import React, { useState } from 'react';



const CommentBox = () => {

  // setting state for comments  
const [commentData, setCommentData] = useState({
    newComent: '',
})
// creating handle changes for new comments
const handleChanges = (e) => {
    setCommentData({
        ...commentData,
        [e.target.name]: e.target.value,
    })
} 

return (
    <div>
        
    </div>
)

} 