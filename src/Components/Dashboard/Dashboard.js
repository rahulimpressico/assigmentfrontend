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
      <div className="container-fluid, Dashboard">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 Dashboard-header">
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
              <div className="row">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Course</th>
                      <th scope="col">Fees</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
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
      </div>
    </>
  );
};
