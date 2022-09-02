import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./loading.module.css";
import { useSelector } from "react-redux";

export default function Loading() {
  const { isLoaded } = useSelector((state) => state.app);
  return (
    <>
      {isLoaded ? (
        ""
      ) : (
        <Box className={styles.loading}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
