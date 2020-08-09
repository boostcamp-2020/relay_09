import React, { Component } from "react";
import "./login.css";

class LoginPage extends Component {
  render() {
    return (
      <div class="wrapper fadeInDown">
        <br/>
        <div id="formContent">
          <div class="card">
            <article class="card-body">
            <a href="" class="float-right btn btn-outline-primary">Sign up</a>
            <h4 class="card-title mb-4 mt-1">Sign in</h4>
            <form>
            <div class="form-group">
            <label>Your username</label>
            <input name="" class="form-control" placeholder="username" type="username"></input>
            </div>
            <div class="form-group">
            <a class="float-right" href="#">Forgot?</a>
            <label>Your password</label>
            <input class="form-control" placeholder="******" type="password"></input>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Login  </button>
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
