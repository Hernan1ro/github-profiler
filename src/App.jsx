import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { gettingUsers } from "./services/users";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("userState");

  const getUser = async (user) => {
    const userResponse = await gettingUsers(user);
    console.log(userResponse);
  };

  useEffect(() => {
    getUser(inputUser);
  }, []);
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
      <div>Soy un astronata</div>
    </Container>
  );
};

export default App;
