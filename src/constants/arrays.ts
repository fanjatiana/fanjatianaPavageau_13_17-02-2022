import IconMoney from "../images/icon-money.png";
import IconChat from "../images/icon-chat.png";
import IconSecurity from "../images/icon-security.png";
import { arrayDataAccount, arrayFeatureItem } from "../typeScript/interfaces";

// array for the component <Account/> (of User page)

export const dataAccount: arrayDataAccount[] = [
  {
    title: "Argent Bank Checking (x8349)",
    value: "$2,082.79",
    status: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    value: "$10,928.42",
    status: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    value: "$184.30",
    status: "Current Balance",
  },
];


// array of object for the component <FeatureItem/> (of Home page)

export const infosFeatureItem: arrayFeatureItem[] = [
  {
    icon: IconChat,
    title: "You are our #1 priority",
    text: " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: IconMoney,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: IconSecurity,
    title: "Security you can trust",
    text: " We use top of the line encryption to make sure your data and money is always safe.",
  },
];
