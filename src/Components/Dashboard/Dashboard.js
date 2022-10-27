import React, { useCallback, useEffect, useState } from "react";
import "./Dashboard.css";
// import axios from "axios";

export const Dashboard = () => {
  const [user, setUser] = useState([]);

  const api = useCallback(async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const response = await fetch(
        "http://localhost:8080/student",
        requestOptions
      );
      const re = await response.json();
      setUser(re);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    api();
  }, [api, user]);

  return (
    <>
<<<<<<< HEAD
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            College Management
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Add Student
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Dashboard">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid, Dashboard"
        // style={{ background: "#9b26b6", height: "100%" }}
        style={{ background: "#3275a8", height: "100%" }}

      >
        <div className="row">
          <div className="col-md-1"></div>
          <div
            className="col-md-10 Dashboard-header"
            style={{
              backgroundColor: "white",
              textAlign: "center",
              marginTop: "5%",
              paddingTop: "2%",
              borderRadius: "5px",
              paddingBottom: "1%",
              textTransform: "uppercase",
              fontFamily: "Sofia",
            }}
          >
=======
      <div className="container-fluid, Dashboard">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 Dashboard-header">
>>>>>>> 34ed50d856a0e0026672127c5be186bce5130c2a
            <h1>Dashboard</h1>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "5%" }}></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div
            className="col-md-10"
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <div className="container-fluid">
<<<<<<< HEAD
              <div
                className="row"
                style={{ paddingBottom: "10px", paddingTop:"20px" }}
              >
                <table className="table table-striped table-responsive  table-bordered  border-primary table-hover">
=======
              <div className="row">
                <table className="table table-striped table-hover">
>>>>>>> 34ed50d856a0e0026672127c5be186bce5130c2a
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Course</th>
                      <th scope="col">Fees</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
<<<<<<< HEAD
                      <th scope="col">Action</th>
=======
>>>>>>> 34ed50d856a0e0026672127c5be186bce5130c2a
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((e, id) => {
                      const { course, fee, address, phone } = e.studentProfile;
                      const { studentName, email } = e;
                      return (
                        <tr key={id}>
                          <th scope="row">{id}</th>
                          <td>{studentName}</td>
                          <td>{course}</td>
                          <td>{fee}</td>
                          <td>{address}</td>
                          <td>{phone}</td>
                          <td>{email}</td>
<<<<<<< HEAD
                          <td><button type="button" class="btn btn-warning">Update</button>  <button type="button" class="btn btn-danger">Delete</button></td>
=======
>>>>>>> 34ed50d856a0e0026672127c5be186bce5130c2a
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
<<<<<<< HEAD
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "45%" }}></div>
        </div>
=======
>>>>>>> 34ed50d856a0e0026672127c5be186bce5130c2a
      </div>
    </>
  );
};
