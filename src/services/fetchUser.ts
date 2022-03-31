import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getInfosUsers } from "../features/user/usersSlice";

// function to retrieve user data with token

export const useFetch = () => {
  const infoToken : string | null = localStorage.getItem("Bearer")
  const dispatch = useDispatch<any>();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!infoToken) return;
    setLoading(true);

    const fetchInfosUsers = async () => {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${infoToken}`,
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            setError(true);
            setLoading(false);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setData(data);
          localStorage.setItem("Bearer", infoToken);
          dispatch(getInfosUsers(data.body));
          setLoading(false);
        });
        
    };

    fetchInfosUsers();
  }, [infoToken]);

  return { isLoading, data, error };
};
