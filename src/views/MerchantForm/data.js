import validationIcon1 from "../../assets/green-check.svg";
import validationIcon2 from "../../assets/unchecked.svg";
import validationIcon3 from "../../assets/error-check.svg";

export const validationState = [
  {
    id: 1,
    validationIcon: validationIcon1,
    text: "Password must be 8 characters or longer",
  },
  {
    id: 2,
    validationIcon: validationIcon2,
    text: "Password must include one number or symbol",
  },
  {
    id: 3,
    validationIcon: validationIcon3,
    text: "Password must include at least one Uppercase",
  },
];
