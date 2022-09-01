import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../store/actions/categoryActions";

export default function ListCategory() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <Container maxWidth='md'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Id</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((c) => (
              <TableRow>
                <TableCell>{c.categoryId}</TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Operations</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
