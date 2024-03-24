import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios/" + id, data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex w-100 vh-100  bg-light justify-content-center align-items-center">
        <div className="border bg-white shadow  px-5  pt-3 pb-3 rounded">
          <h3 className="text-center">Update User</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="form-control"
                value={data.name}
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
                value={data.email}
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
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
            <button className="btn btn-success">submit</button>
            <Link to={"/"} className="btn btn-primary m-2">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
