import { useState, useContext } from "react";
import {
  createUserByEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  si,
  signInByEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.style.scss";

const defaultUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [user, setUser] = useState(defaultUser);
  const { email, password } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const submitSignUp = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = user;
      await signInByEmailAndPassword(email, password);
    } catch (error) {
      console.error("user creation fail", error.message);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-in-container">
      <h2>Sign up with email and password</h2>
      <span>Sign in with your email and account </span>
      <form>
        <FormInput
          label={`Email`}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={`password`}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button onClick={submitSignUp}>SIGN IN</Button>
          <Button buttonType={"google"} onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
