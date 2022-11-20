import { urlFetch } from "../constants/index";

export const gettingUsers = async (user) => {
  const response = await fetch(`${urlFetch}${user}`);
  const payload = response.json();

  return payload;
};
