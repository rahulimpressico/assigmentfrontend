import React, { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [user, setUser] = useState([]);

  // var data = '';

  // var config = {
  //   method: "get",
  //   url: "http://localhost:8090/student",
  //   headers: {},
  //   data : data
  // };

  var raw = "";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const api = async () => {
    // let info = [];
    try {
      //   const response = await axios(config);
      // //   console.log(response.data)
      // //   setUser({...response})
      //   if (response) {
      //     const re =  await JSON.parse(response)
      //     console.log(re)
      //     const info = response;
      //     // console.log(info)
      //     setUser([...info]);
      //     console.log(user);
      //   }

      const response = await fetch("http://localhost:8090/student", requestOptions)
      const re = await response.json();
      setUser(re)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#9b26b6", height: "100vh" }}
      >
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10" style={{"backgroundColor":"white","textAlign":"center","marginTop":"5%","paddingTop":"2%","borderRadius":"5px","paddingBottom":"1%","textTransform":"uppercase","fontFamily":"Sofia"}}> <h1>Dashboard</h1> </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "5%"}}>

          </div>
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
                  {" "}
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Course</th>
                      <th scope="col">Fees</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((e, id) => {
                      return (
                        <tr>
                          <th scope="row">{id}</th>
                          <td>{e.studentname}</td>
                          <td>{e.course}</td>
                          <td>{e.fee}</td>
                          <td>{e.address}</td>
                          <td>{e.phone}</td>
                          <td>{e.email}</td>
                          <td>{e.password}</td>
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
