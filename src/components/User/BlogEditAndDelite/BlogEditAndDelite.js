import React, { useState } from "react";
import { useHistory } from "react-router";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-solid-svg-icons";

function BlogEditAndDelite({ blogg }) {
    const [render, setRender] = useState(1); /// delete state
    const [blogsdetails, setBologDetails] = useState([]);

    const { _id, Author, blog, date, email, imageURL, title } = blogg;
    let history = useHistory();

    // read blog
    const readBlog = (id) => {
        console.log("read");
        history.push(`/blogdetailes/${id}`);
    };
                //delete blog
    function deleteBlog(id) {
        console.log(id);
        fetch(`https://desolate-brushlands-08726.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
             alert('Delete a story')
                setRender(render + 1)
            }
            });
    }
            //edit blog
    let blogEditHistory = useHistory();
    function loadProduct(id) {
        blogEditHistory.push(`/EditBlog/${id}`);
    }

    return (
        <div>

            <div class="container">
                <div class="col">
                    <div class="card h-100">
                        <img src={imageURL} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <small class="text-muted ">
                                {Author} write on {date}
                            </small>

                            <p class="card-text mt-3">
                                {blog.slice(0, 300)}....
                            </p>
                        </div>
                        <div class="card-footer">
                            <small
                                style={{ cursor: "pointer" }}
                                class="text-muted"
                                onClick={() => readBlog(_id)}
                            >
                                READ MORE
                            </small>
                            <span class="ms-4">
                                <button onClick={() =>
                                                    deleteBlog(_id)
                                                } type="button" class="btn btn-danger">
                                    Delete
                                </button>{" "}
                                <button onClick={() =>loadProduct(_id)} type="button" class="btn btn-info">
                                    Edit
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogEditAndDelite;