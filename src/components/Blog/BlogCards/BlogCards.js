import React from 'react'
import { useHistory } from "react-router";

function  BlogCards({ blogg }) {
    // console.log(blogg)
    const {_id, Author,blog,date,email,imageURL,title} = blogg;


    let history = useHistory();

    const readBlog = (id) => {
        console.log('read')
        history.push(`/blogdetailes/${id}`);
   }


    return (
        <div>
            <div class="container">
  <div class="col">
    <div class="card h-100">
      <img src={imageURL} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <small class="text-muted">{ date}</small>
        <p class="card-text">{blog.slice(0,300)}....</p>
        </div>
        <div class="card-footer">
      <small style={{cursor:"pointer"}} class="text-muted" onClick={()=> readBlog(_id)}>READ MORE</small>
              </div>
    </div>
                </div>
                </div>
        </div>
    )
}

export default BlogCards;
