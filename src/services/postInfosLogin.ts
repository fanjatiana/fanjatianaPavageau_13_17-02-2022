import { getInfoLoginStatus } from "../features/login/loginStatusSlice";
import { getToken } from "../features/token/tokenSlice";

// function for post authentication data

export const postInfoslogin = async (
  credentials: object,
  setUserNotFoundMessage: any,
  dispatch: Function,
  navigate: Function
) => {
  await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(getToken(data.body.token));
      localStorage.setItem("Bearer", data.body.token);
      dispatch(getInfoLoginStatus(true));
      navigate("/profile");
      return data;
    })
    .catch((error) => {
      console.error("error" + error.message);
      setUserNotFoundMessage("identifiant ou mot de passe inconnu");
      dispatch(getInfoLoginStatus(false));
    });
};
