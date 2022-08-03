import { useEffect, useState } from "react";
import { getDetails } from "../../../services/getDetails";
import updateUserDetails from "../../../services/postUserDetails";

export const addPhonenumber = (userId:string,data: {}) => {
  updateUserDetails(`/users/${userId}`, data)
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const getUserDetails = (userId:string) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    getDetails(`/users/${userId}`)
      .then((res) => {
        setLink(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return link;
};
