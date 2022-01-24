import React, { useState } from "react";

import { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //am creat doua variabile use ref
  //pentru a conecta un ref cu un input trebuie sd punem unde avem inputu ref(nameInputRef) de ex pentru a salva inputu ref ,practic salvam curent input nu doar valuare introdusa in input tot elementul din dom
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //utilizand ref nu trebuie sa mai utilizam useState

  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //asa putem vedea ce avem  la valuarea curenta salvat cu ref,e salvam in constante si putem sa facem verificare cu ele si le putem trece ca parametri la obiectul nostru prin onAddUSer fara a apela ce avem salvat la useState
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    //nemaifolosind state nu trebuie sa tranformam un text gol
    //   setEnteredUsername("");
    //setEnteredAge("");

    //dar si aici avem nevoie de a reseta inputurile
    nameInputRef.curent.value("");
    enteredUserAge.curent.value("");
  };
  //
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  // setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  //vezi in Wrapers pentru ce folosim clasa wraper
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //numai avem nevoie de vaslue si on change datorita la useRef
            //    value={enteredUsername}
            //  onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            //numai avem nevoie de vaslue si on change datorita la useRef
            //  value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
