import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import axios from 'axios';



function EditBlog() {
    const { register, handleSubmit } = useForm();
    const [imageurl, setImageurl] = useState(null);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = (data) => {
        // console.log(data)
        const eventdata = {
            title: data.title,
            blog: data.blog,
            Author: data.Author,
            email: data.email,
            imageURL: imageURL,
            date: new Date().toDateString(),
            time: new Date().setHours(24)
        };
    console.log(eventdata)
    fetch(` http://localhost:5000/updateBlog/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(eventdata),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('update')
            // console.log(render)
            if (data) {

            alert("Emloyee added successfully");
            }
        });
    }
    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "d371491237d968517d992b8f6982be6a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                // console.log(response);
                setImageurl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const { id } = useParams()
    console.log(id)

    const [editBlogsdetails, setEditBologDetails] = useState([]);
    console.log(editBlogsdetails)

    useEffect(() => {
        fetch(`http://localhost:5000/blogDetails/${id}`)
            .then(res => res.json())
        .then(data =>  setEditBologDetails(data))
     },[id])

    const { _id, Author, blog, date, email, imageURL, title } = editBlogsdetails

    return (
        <div>
            <div class="container m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3 col-md-9 mx-auto">
                    <label for="exampleFormControlInput1" class="form-label">
                       Title
                    </label>
                    <input
                        type="text"
                        class="form-control "
                        {...register("title", { required: true })}
                        // id="exampleFormControlInput1"
                            placeholder="Title"
                            defaultValue={title}
                    />
                </div>
                <br />
                <div class="mb-3 col-md-9  mx-auto">
                <label for="exampleFormControlTextarea1" class="form-label">
                    Write your Blog
                </label>
                <textarea
                    class="form-control"
                    {...register("blog")}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Leave a story"
                            style={{ height: "400px" }}
                            defaultValue={blog}
                ></textarea>
            </div>
                <br />
                <div class="mb-3 col-md-9 mx-auto">
                    <label for="exampleFormControlInput1" class="form-label">
                    Author
                    </label>
                    <input
                        type="text"
                        class="form-control "
                        {...register("Author", { required: true })}
                        // id="exampleFormControlInput1"
                            placeholder="Author"
                            defaultValue={Author}
                    />
                </div>
                <br />
                <div class="row " style={{marginLeft:"20%"}}>
                <div class="col-md-4">
                    <label for="inputPhoto" class="form-label">
                        Add Photo
                    </label>
                    <input
                        type="file"
                        class="form-control"
                        onChange={handleImageUpload}
                        id="Photo"

                    />
                </div>
                <br />
                <div class="mb-3 col-md-4">
                    <label for="exampleFormControlInput1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control "
                        {...register("email", { required: true })}
                        id="exampleFormControlInput1"
                        defaultValue={email}
                    />
                </div>
               </div>
                <br />
                <div class="mx-auto" style={{width: "200px"}}>
                    <input class="mx-auto" type="submit" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditBlog;
