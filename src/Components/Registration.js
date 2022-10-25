import React, { useState } from "react";
import axios from 'axios'

export const RegistrstionForm = () => {
  const [studentname, setStudentname] = useState("");
  const [course, setCourse] = useState("");
  const [fee, setFee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  

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


    // var myHeaders = Object.assign(
    //   {
    //     headers: {
          
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
          
    //     },
    //     mode: 'no-cors',
    //   })
    
  // var myHeaders = new Headers();
  // myHeaders.append({
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   mode: 'no-cors',
  // });

  

  var data= JSON.stringify({
    studentName: studentname,
    course: course,
    fee: fee,
    address: address,
    phone: phone,
    email: email,
    password: password,
  });

  var config = {
    method: 'post',
    url: 'http://localhost:8090/registration',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };

  const HandelSubmit = async (e) => {
    e.preventDefault();
    try{
      // const response = await fetch(
      //   "http://localhost:8090/registration",
      //   requestOptions
      // );
      // const data = await response.json();
      // console.log(data);

      const response = await axios(config)
      const re = await response.json();
      console.log(re)

    }catch(err){
      console.log(err)
    }

   
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#9b26b6", height: "100vh" }}
      >
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "10%" }}></div>
        </div>

        {/* <!-- <div className="container-fluid" style="background-color: white"> -->
      <!-- <div className="row">
        <div className="col-md-12"></div>
      </div> --> */}
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-6 "
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <div className="container">
              <div className="row" style={{ marginTop: "45px" }}>
                <div className="col-md-12">
                  <h3>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Sofia",
                        fontSize: "2em",
                      }}
                    >
                      Registration
                    </span>
                  </h3>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-6" style={{ height: "60vh" }}>
                  <form style={{ paddingTop: "5px" }}>
                    <div className="mb-6">
                      <label for="studentname" className="form-label">
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
                      <label for="course" className="form-label">
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
                      <label for="fee" className="form-label">
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
                      <label for="address" className="form-label">
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
                      <label for="phone" className="form-label">
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
                      <label for="email" className="form-label">
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
                      <label for="password" className="form-label">
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
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                      HandelSubmit(e);
                    }} >
                      Signup
                    </button>
                  </form>
                  <br />
                </div>
                <div className="col-md-6">
                  {/* <!-- <img
                  src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg?w=2000"
                  width="100%"
                /> --> */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-67IkaM7TeLM4db3bXJL-ooYWjNh3opMbA&usqp=CAU"
                    width="100%" alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </>
  );
};
