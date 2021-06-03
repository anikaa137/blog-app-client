import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./TopHeader.css";
function TopHeader() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div class="topImage social-top">
            <ul class="nav justify-content-end">
                <li class="dropdown me-3">
                    <div class="dropdown">
                        <p
                            class=" dropdown-toggle mt-2"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                style={{ color: "gray", fontSize: "32px" }}
                            />
                        </p>
                        <ul
                            class="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                             {loggedInUser.email ? (
                                ""
                            ) : (
                                <Link to="/login" className=" dropdown-item text-white">
                                     Sign In / Sign Up
                                </Link>
                            )}
                            {loggedInUser.email ? (
                                <Link
                                    className=" dropdown-item text-white"
                    onClick={() => setLoggedInUser({})}

                                >
                                    log out
                                </Link>
                            ) : (
                                ""
                            )}
                            </li>
                            <li>
                            <Link className=" dropdown-item text-white"
                  to="/AddBlog"

              >
                  Write Story
              </Link>
                            </li>
                            <li>
                            <Link className=" dropdown-item text-white"
                  to="/BlogManage"

              >
                  Your Story
              </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">
                        <img
                            src="https://www.clipartkey.com/mpngs/m/148-1485876_facebook-white-vector-logo.png"
                            class="rounded-circle"
                            alt="..."
                            style={{ width: "30px" }}
                        />
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link">
                        <img
                            src="https://www.elanation.com/wp-content/uploads/2018/11/linkedin-icon-elanation.jpg"
                            class="rounded-circle"
                            alt="..."
                            style={{ width: "31px" }}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default TopHeader;
