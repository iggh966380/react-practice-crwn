import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType];
};

const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  ...props
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...props}>{children}</CustomButton>
    // <button
    //   {...props}
    //   className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    // >
    //   {children}
    // </button>
  );
};
export default Button;
