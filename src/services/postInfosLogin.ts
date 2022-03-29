import { getToken } from "../features/token/tokenSlice";

// function for post authentication data
export const postInfoslogin = async (
  credentials: object,
  setUserNotFoundMessage:any,
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
    .then((response) =>  response.json())
    .then((data) => {
      if (data.status !== 200) {
        setUserNotFoundMessage("identifiant ou mot de passe inconnu")
      }
      console.log("Success:", data);
      dispatch(getToken(data.body.token));
      localStorage.setItem("Bearer", data.body.token);
      navigate("/Profile");
      return data
    })
    .catch((error) => {
      console.error("error" + error.message);
      return error
    });
};
