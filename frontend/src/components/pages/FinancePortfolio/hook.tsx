import { useEffect, useState } from "react";
import { getLink } from "../../../services/getLink";

export const usePortfolioLink = () => {
  const [link, setLink] = useState("");
  useEffect(() => {
    getLink("/portfolios")
      .then((res) => {
        setLink(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return link;
};
