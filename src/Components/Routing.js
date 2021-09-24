import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "reactstrap";
import UserList from "./UserList";
import { FaHome, FaUserCircle } from "react-icons/fa";
import UserDetails from "./UserDetails";
import UpdateUserDetails from "./UpdateUserDetails";

function Routing() {
  return (
    <BrowserRouter>
      <div>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li style={{ paddingRight: "15px" }}>
            <Link to="/">
              <b><FaHome className="m-1" />
              Home</b>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <b><FaUserCircle className="m-1" />
              User</b>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:id">
          <UserDetails />
        </Route>
        <Route path="/updateuser/:id">
          <UpdateUserDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
