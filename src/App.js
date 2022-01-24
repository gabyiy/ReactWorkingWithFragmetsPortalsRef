import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  //Pentru PORTALE  trebuie sa intram in public index.html unde creem div relationate ex:
  // <div id="bacdrop-root"></div>
  //  <div id="overlay-root"></div>
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      {/*alta forma de a inlcui div inafara de a inlocui div cu   wraper este <></> se poate folosi si <React.Fragment> sau daca importam Fragment putem sa folosim doar <Fragment></Fragment>*/}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
