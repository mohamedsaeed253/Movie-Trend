import React, { useState } from "react";
import "./Sign-in.css";
/* import axios from "axios"; */
import Joi from "joi";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [setValidateError] = useState([]);

  const validateOfInputs = (data) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    return schema.validate(data, { abortEarly: false });
  };

  const getData = (e) => {
    let udata = { ...userData };
    udata[e.target.name] = e.target.value;
    setUserData(udata);
  };

  const stopReload = async (e) => {
    e.preventDefault();
    try {
      const valid = validateOfInputs(userData);
      setValidateError(valid.error.details);
      console.log(valid.error.details);

      /*  const res = await axios.post(
        "https://abdelnaby.store/api/register",
        userData
      ); */
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center mt-5 pt-5">
        <h1 className="text-white mb-4">Register </h1>
        <form onSubmit={stopReload} className="row g-3 w-75 text-white">
          <div className="col-md-12">
            <label htmlFor="inputname4" className="form-label">
              Name:
            </label>
            <input
              onChange={getData}
              type="text"
              name="name"
              className="form-control"
              id="inputname4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              Password:
            </label>
            <input
              onChange={getData}
              type="password"
              name="password"
              className="form-control"
              id="inputPassword"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="inputemail" className="form-label">
              Email:
            </label>
            <input
              onChange={getData}
              type="email"
              name="email"
              className="form-control"
              id="inputemail"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-danger">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
