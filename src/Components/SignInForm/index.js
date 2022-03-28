import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialValues={
  email:'',
  pwd:''
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialValues};
  }
  handleInput=({target:{name,value}})=>{this.setState({[name]:value})
  }
  handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({...initialValues})
  };
  render() {
    return (
      <form className={styles.container} onSubmit={this.handleForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
          onChange={this.handleInput}
        ></input>
        <input
          type="password"
          name="pwd"
          placeholder="password"
          className={styles.input}
          onChange={this.handleInput}
        ></input>
        <input type="submit" value="sign in" className={styles.btn}></input>
      </form>
    );
  }
}

export default SignInForm;
