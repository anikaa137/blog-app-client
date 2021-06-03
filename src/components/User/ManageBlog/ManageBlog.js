import React, { useEffect, useState } from 'react'
import BlogEditAndDelite from '../BlogEditAndDelite/BlogEditAndDelite'
const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Blogs')
        .then(res => res.json())
        .then(data =>  setBlogs(data))
    },[])


    return (
        <div>
 <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto" >
            {
                blogs.map(blogg => <BlogEditAndDelite blogg={blogg}></BlogEditAndDelite>)
            }

        </div>
        </div>
    );
};

export default ManageBlog;