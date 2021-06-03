import React, { useContext, useEffect, useState } from 'react'
import BlogEditAndDelite from '../BlogEditAndDelite/BlogEditAndDelite'
import Footer from '../../Share/Footer/Footer'
import TopHeader from '../../Heder/Topheader/TopHeader'
import Nabbar from '../../Heder/Navbar/Navbar'
import { UserContext } from '../../../App'

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser)
    useEffect(() => {
        fetch('https://desolate-brushlands-08726.herokuapp.com/OneUser?email='+loggedInUser.email)
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