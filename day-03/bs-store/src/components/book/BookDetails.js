import React from 'react'
import {useParams} from "react-router-dom"
import data from "../../data";

export default function BookDetails() {
    const {id} = useParams();
     
  return (
    <div>BookDetails {id}</div>
  )
}
