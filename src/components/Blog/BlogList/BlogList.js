import React, { useEffect, useState } from 'react'

import BlogCards from '../BlogCards/BlogCards'

function  BlogList() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://desolate-brushlands-08726.herokuapp.com/Blogs')
        .then(res => res.json())
        .then(data =>  setBlogs(data))
    },[])

    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto" >
            {
                blogs.map(blogg => <BlogCards blogg={blogg}></BlogCards>)
            }

        </div>
    )
}

export default BlogList
