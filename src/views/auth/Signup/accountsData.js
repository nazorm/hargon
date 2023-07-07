import accountImage1 from "../../../assets/account-type1.svg";
import accountImage2 from "../../../assets/account-type2.svg";
import accountImage3 from "../../../assets/account-type3.svg";
import accountImage4 from "../../../assets/account-type4.svg";

export const accountsData = [
  {
    name: "Merchant",
    img: accountImage1,
    text: "Select which type of account you want to open",
    isComingSoon: false,
    linkTo: '/merchant-register',
  },
  {
    name: "Company",
    img: accountImage2,
    text: "Select which type of account you want to open",
    isComingSoon: false,
    linkTo: '/',
  },
  {
    name: "Agents",
    img: accountImage3,
    text: "Select which type of account you want to open",
    isComingSoon: false,
    linkTo: '/',
  },
  {
    name: "Partnership",
    img: accountImage4,
    text: "Select which type of account you want to open",
    isComingSoon: true,
    linkTo: '/',
  },
];
