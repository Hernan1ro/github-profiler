import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { gettingUsers } from "./services/users";
import { UserCard } from "./containers/userCard";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const getUser = async (user) => {
    const userResponse = await gettingUsers(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      console.log(octocat);
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };
  console.log(userState);
  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
      <div>Soy un astronata</div>
    </Container>
  );
};

export default App;
