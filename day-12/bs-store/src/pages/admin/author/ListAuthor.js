import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuthors } from "../../../store/actions/authorActions";

export default function ListAuthor() {
  const { authors } = useSelector((state) => state.author);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return <Container maxWidth='md'>{authors?.length}</Container>;
}
