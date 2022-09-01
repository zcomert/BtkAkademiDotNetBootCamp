import { useContext, useState } from "react";
import data, { tobeAddBook } from "./data";

import { Routes, Route } from "react-router-dom";
import SimpleAppbar from "./components/simpleAppbar/SimpleAppbar";

import AppContext from "./context/ContextApplication";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import { Alert, Snackbar, Stack } from "@mui/material";

import SimpleSnackBar from "./components/snackBar/SimpleSnackBar";
import Paths from "./Paths";
import Loading from "./components/progress/Loading";

function App() {
  return (
    <>
      <SimpleAppbar />
      <Loading />
      <main className={styles.container}>
        <Paths />
      </main>
      <Footer />
      <SimpleSnackBar />
    </>
  );
}

export default App;
