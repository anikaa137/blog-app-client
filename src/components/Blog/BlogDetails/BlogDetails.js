import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


function BlogDetails() {
    const [blogsdetails, setBologDetails] = useState([]);
    const {_id, Author,blog,date,email,imageURL,title} = blogsdetails;

    const { id } = useParams()
    console.log(blogsdetails);

    useEffect(() => {
        fetch(`http://localhost:5000/blogDetails/${id}`)
            .then(res => res.json())
        .then(data => setBologDetails(data))
     },[])

    return (
        <div class="container">
            <div class="text-center">
                <div class="mt-5 mb-5"><h2>{title}</h2> </div>
                <div class="img-fluid mt-3 mb-5"><img src={imageURL} alt="" /></div>
                <div>{blog}</div>
                <div><Link to="/">GO HOME</Link> </div>
            </div>

        </div>
    )
}

export default BlogDetails;
