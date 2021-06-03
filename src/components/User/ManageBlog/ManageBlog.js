import React, { useEffect, useState } from 'react'
import BlogEditAndDelite from '../BlogEditAndDelite/BlogEditAndDelite'
import Footer from '../../Share/Footer/Footer'
import TopHeader from '../../Heder/Topheader/TopHeader'
import Nabbar from '../../Heder/Navbar/Navbar'

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Blogs')
        .then(res => res.json())
        .then(data =>  setBlogs(data))
    },[])


    return (
        <div>
            <TopHeader />
            <Nabbar/>
 <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto" >
            {
                blogs.map(blogg => <BlogEditAndDelite blogg={blogg}></BlogEditAndDelite>)
            }

            </div>
            <Footer/>
        </div>
    );
};

export default ManageBlog;