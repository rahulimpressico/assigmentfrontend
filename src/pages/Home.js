import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate()


    const Reg =()=>{
        navigate('/Registration')

    }

    const Dash=()=>{
      navigate('/Dashboard')

  }
  return (
    <>
      <div className="container-fluid" style={{ background: "#9b26b6","height":"100vh" }}>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "10%"}}></div>
        </div>

        {/* <!-- <div className="container-fluid" style="background-color: white"> -->
      <!-- <div className="row">
        <div className="col-md-12"></div>
      </div> --> */}
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-6 "
            style={{ backgroundColor: "white", borderRadius: "5px"}}
          >
            <div className="container">
              <div className="row" style={{"marginTop":"45px"}}>
                <div className="col-md-12">
                  <h3>
                    <span style={{ fontWeight: "bold","fontFamily":"Sofia", "fontSize":"2em" }}>Login</span>
                  </h3>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-6" style={{"height":"55vh"}}>
                  <form style={{"paddingTop":"28px"}}>
                    <div className="mb-6">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>

                    <button type="submit"  onClick={Dash} className="btn btn-primary">
                      Login
                    </button>
                  </form>
                  <br />

                  <a href="">Not a Member ?</a>
                  <br />
                  <br />
                  <button type="submit"  onClick={Reg}   className="btn btn-success">
                    Signup
                  </button>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-success">
                    Home
                  </button>
                </div>
                <div className="col-md-6">
                  {/* <!-- <img
                  src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg?w=2000"
                  width="100%"
                /> --> */}
                  <img
                    src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=2000"
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
