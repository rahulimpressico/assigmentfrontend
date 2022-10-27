import React, { useState } from "react";
import "./Registration.css";

import axios from "axios";

export const RegistrstionForm = () => {
  const [studentname, setStudentname] = useState("");
  const [course, setCourse] = useState("");
  const [fee, setFee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setStudentname("");
    setCourse("");
    setFee("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhone("");
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "studentname") {
      setStudentname(value);
    }
    if (id === "course") {
      setCourse(value);
    }
    if (id === "fee") {
      setFee(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
  };

  var data = JSON.stringify({
    studentName: studentname,
    course: course,
    fee: fee,
    address: address,
    phone: phone,
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "http://localhost:8080/student",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const HandelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(config);
      const re = await response.json();
      console.log(re);
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  return (
    <>
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
        className="container-fluid Registration"
        // style={{ background: "#9b26b6", height: "100%" }}
        style={{ background: "#ddd", height: "100%" }}
      >
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "5%" }}></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-6"
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-12">
                  <h3>
                    <span className="Registration-header">Registration</span>
                  </h3>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-6">
                  <form className="pt-2">
                    <div className="mb-6">
                      <label htmlFor="studentname" className="form-label">
                        Student Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="studentname"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Name"
                        value={studentname}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <div className="mb-6 mt-2">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Course"
                        value={course}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="mb-6 mt-2">
                      <label htmlFor="fee" className="form-label">
                        Fees
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fee"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Fees"
                        value={fee}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="mb-6 mt-2">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Address"
                        value={address}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="mb-6 mt-2">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Phone"
                        value={phone}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <div className="mb-6 mt-2">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="mb-3 mt-2">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => {
                        HandelSubmit(e);
                      }}
                    >
                      Signup
                    </button>
                  </form>
                  <br />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-67IkaM7TeLM4db3bXJL-ooYWjNh3opMbA&usqp=CAU"
                    width="100%"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "5%" }}></div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </>
  );
};
