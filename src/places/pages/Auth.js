import React, { useState, useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/FormElements/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";
import Card from "../../user/components/UIElements/Card";
import { AuthContext } from "../../shared/components/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchAuthHandler = () => {
    if (!showLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setShowLogin((prev) => !prev);
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form>
        {!showLogin && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="text"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password (Min. 5 characters)."
          onInput={inputHandler}
        />
        <Button
          type="submit"
          onClick={submitLoginHandler}
          disabled={!formState.isValid}
        >
          {showLogin ? "LOGIN" : "Create Account"}
        </Button>
        <Button type="button" onClick={switchAuthHandler}>
          {showLogin ? "Click here to sign up" : "I already have an account"}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
