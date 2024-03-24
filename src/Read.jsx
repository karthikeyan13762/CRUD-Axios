import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100 w-100 bg-light">
        <div className=" bg-white border px-5 pt-2 pb-3 shadow rounded">
          <h3 className="text-center">User Details</h3>
          <div className="mb-2">
            <strong>Name:{data.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email:{data.email}</strong>
          </div>
          <div className="mb-2">
            <strong>Phone:{data.phone}</strong>
          </div>
          <Link className="btn btn-success me-2" to={"/update/" + id}>
            Update
          </Link>
          <Link className="btn btn-primary" to={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
