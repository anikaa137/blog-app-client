import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddBlog() {
    
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    // const [loggedInUser, setLoggedInUser] = useContext(userContext)

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
        }
        console.log(eventdata)
        const url = `http://localhost:5000/addingBlog`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(eventdata)
        })
        .then(res => console.log('seever side respons',res))
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "d371491237d968517d992b8f6982be6a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                // console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
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
                        style={{height:"400px"}}
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
                        placeholder="name@example.com"
                    />
                </div>
               </div>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default AddBlog;
