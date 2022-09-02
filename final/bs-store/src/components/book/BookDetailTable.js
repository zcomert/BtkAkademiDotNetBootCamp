import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function BookDetailTable({bookDetail}) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
            <TableRow>
                <TableCell>Number Of Page</TableCell>
                <TableCell>{bookDetail?.numberOfPage}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>ISBN</TableCell>
                <TableCell>{bookDetail?.isbn}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>City</TableCell>
                <TableCell>{bookDetail?.city}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Country</TableCell>
                <TableCell>{bookDetail?.country}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Language</TableCell>
                <TableCell>{bookDetail?.language}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Publisher</TableCell>
                <TableCell>{bookDetail?.publisher}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
