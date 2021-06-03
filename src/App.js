
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/components/Home/Home'
import AddBlog from './components/User/AddBLog/AddBlog';
import BlogDetails from '../src/components/Blog/BlogDetails/BlogDetails'
import Login from "./components/Share/Login/Login"
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from "./components/Share/Login/PrivateRoute/PrivateRoute";
import ManageBlog from "./components/User/ManageBlog/ManageBlog";
import EditBlog from './components/User/EditBlog/EditBlog'
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute path="/AddBlog">
             <AddBlog/>
          </PrivateRoute>
          <Route path="/blogdetailes/:id">
            <BlogDetails/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <PrivateRoute path="/BlogManage">
            <ManageBlog/>
          </PrivateRoute>
          <Route path="/EditBlog/:id">
            <EditBlog/>
          </Route>
        </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
