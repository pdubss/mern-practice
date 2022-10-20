import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/FormElements/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";
import Card from "../../user/components/UIElements/Card";

const Auth = () => {
  const [formState, inputHandler] = useForm(
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

  const submitLoginHandler = (e) => {
    e.preventDefault();
    console.log("Login submitted!");
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form>
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
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
