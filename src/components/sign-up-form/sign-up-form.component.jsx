import { useState, useContext } from "react";
import {
  createUserByEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

const defaultUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [user, setUser] = useState(defaultUser);
  const { displayName, email, password, confirmPassword } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const submitSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not matched");
      return;
    }

    try {
      const { email, password } = user;
      const result = await createUserByEmailAndPassword(email, password);
      await createUserDocumentFromAuth(result.user, {
        displayName: user.displayName,
      });
    } catch (error) {
      console.error("user creation fail", error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Sign up with email and password</h1>
      <form>
        <FormInput
          label={`Display Name`}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label={`Confirm Password`}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={"google"} onClick={submitSignUp}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
