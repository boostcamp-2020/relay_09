import React, { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <br />
        <div id="formContent">
          <div className="card">
            <article className="card-body">
              <a href="" className="float-right btn btn-outline-primary">
                Sign up
              </a>
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <form>
                <div className="form-group">
                  <label>Your username</label>
                  <input name="" className="form-control" placeholder="username" type="username"></input>
                </div>
                <div className="form-group">
                  <a className="float-right" href="#">
                    Forgot?
                  </a>
                  <label>Your password</label>
                  <input className="form-control" placeholder="******" type="password"></input>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {" "}
                    Login{" "}
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </div>
    );
  }
}

export default LoginPage;
