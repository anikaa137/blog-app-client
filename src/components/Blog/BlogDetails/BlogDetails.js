import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Nabbar from '../../Heder/Navbar/Navbar';
import TopHeader from '../../Heder/Topheader/TopHeader';
import Footer from '../../Share/Footer/Footer'

function BlogDetails() {
    const { id } = useParams()
    const [blogsdetails, setBologDetails] = useState([]);
    console.log(blogsdetails)
    useEffect(() => {
        fetch(`https://desolate-brushlands-08726.herokuapp.com/blogDetails/${id}`)
            .then(res => res.json())
        .then(data => setBologDetails(data))
     },[])
     const {_id, Author,blog,date,email,imageURL,title} = blogsdetails


    return (
        <div >
            <TopHeader />
            <Nabbar/>
            <div class="container">
            <div class="text-center">
                <div class="mt-5 mb-5"><h2>{title}</h2> </div>
                <div class="img-fluid mt-3"><img src={imageURL} alt="" /></div>
                    <small>{Author}</small> write on <span>{date} </span>
                <div class="mt-5">{blog}</div>
                {/* <div class="mt-5"><Link to="/"><button type="button" class="btn btn-secondary">Go to Home</button></Link> </div> */}
            </div>
            </div>
            <h6 class="text-center mt-3">Thank You</h6>

            <Footer/>
        </div>
    )
}

export default BlogDetails;
