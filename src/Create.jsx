import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const hanleChange = (e) => {
    e.preventDefault();
    axios
      .post("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100  bg-light justify-content-center align-items-center">
      <div className="border bg-white shadow  px-5  pt-3 pb-3 rounded">
        <h3 className="text-center">Add User</h3>
        <form onSubmit={hanleChange}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-control"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="form-control"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success">
            submit
          </button>
          <Link to={"/"} className="btn btn-primary m-2">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
