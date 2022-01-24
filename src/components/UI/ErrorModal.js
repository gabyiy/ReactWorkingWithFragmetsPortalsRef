import React, { Fragment } from "react";

import ReactDOM from "react-dom";
//pentru  a face portale trebuie sa folosim react dom

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//         PORTAL
//aici am separat componentu nostru in doua partia Bacdrop si module overlay

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {/**asa folosim portalele dupa ce am importat reactDom aducem constanta backdrop si ii pasam parametri la onCofirm sa fie egal cu ce primim la onConfirm  din props ,ca al doilea argument ii trcem locatia  din public index*/}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
