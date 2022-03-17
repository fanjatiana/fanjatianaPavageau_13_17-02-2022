import { getToken } from "../features/token/tokenSlice";

export const postInfoslogin = async (
  credentials: object,
  setUserNotFound:any,
  dispatch: Function,
  setIsLoging: any,
  navigate: Function
) => {
  console.log(credentials);
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
      if (data.status === 400) {
        setUserNotFound("identifiant ou mot de passe inconnu")
      }
      console.log("Success:", data);
      dispatch(getToken(data.body.token));
      setIsLoging(true);
      localStorage.setItem("Bearer", data.body.token);
      navigate("/Profile");
    })
    .catch((error) => {
      console.error("sdgs" + error.message);
    });
};
