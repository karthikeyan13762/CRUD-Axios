import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete");
    if (confirm) {
      axios
        .delete("https://659908a6a20d3dc41cef2cb9.mockapi.io/crudAxios/" + id)
        .then((res) => {
          location.reload();
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className=" d-flex flex-colomn justify-content-center align-items-cenetr vh-100">
          <div className="table-responsive w-75 rounded  shadow p-4 ">
            <h1 className="text-center">List of Users</h1>
            <div className="d-flex justify-content-start mb-2">
              <Link to={"/create"} className="btn btn-sm btn-success">
                Create+
              </Link>
            </div>
            <table className="table  table-striped border ">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>
                        <div className="d-flex">
                          <Link
                            type="button"
                            to={`/read/${data.id}`}
                            className="btn btn-sm btn-info me-2"
                          >
                            Read
                          </Link>
                          <Link
                            type="button"
                            to={`/update/${data.id}`}
                            className="btn btn-sm btn-primary me-2 "
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
