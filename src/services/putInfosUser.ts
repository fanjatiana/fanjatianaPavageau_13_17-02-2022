import { getInfosUsers } from "../features/user/usersSlice";

// function for edit user information (edit name)
export const putInfosUser = async (
  token: string | null,
  userFirstName: string,
  userLastName: string,
  dispatch: Function,
  setIsLoging: any
) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: userFirstName,
      lastName: userLastName,
    }),
  }).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      console.log(data.body);
      dispatch(getInfosUsers(data.body));
      setIsLoging(true);
    }
  });
};
