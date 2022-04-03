import { useAppDispatch } from "../app/hooks";
import { getInfoLoginStatus } from "../features/login/loginStatusSlice";

// function to check the presence of token and update the state of the login statu (redux)

export const useAuth = () => {
  const token: boolean = localStorage.getItem("Bearer") !== null;
  const dispatch = useAppDispatch();
  // if there is a token, the connection status changes to true and the token is returned
  if (token) {
    dispatch(getInfoLoginStatus(true));
  }
  return token;
};
