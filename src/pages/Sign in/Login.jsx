import React, { useState } from "react";
import "./Sign-in.css";
import axios from "axios";

export default function Login() {
  let [userData, setUserData] = useState({
    password: "",
    email: "",
  });
  const getData = (e) => {
    let udata = { ...userData };
    udata[e.target.name] = e.target.value;
    setUserData(udata);
  };
  const stopReload = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:4000/users");
    console.log(res.data);
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center mt-5 pt-5">
        <h1 className="text-white mb-4">Login</h1>
        <form onSubmit={stopReload} className="w-50 text-white">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              onChange={getData}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              onChange={getData}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
