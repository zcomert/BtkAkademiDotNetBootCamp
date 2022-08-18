import React from 'react'
import {Link} from "react-router-dom";

export default function SimpleAppbar() {
  return (
    <div>
        <ol>
           
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/books/list">Books</Link> </li>
            <li> <Link to="/auth/login">Log in</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li> <Link to="/search">Search</Link> </li>
          
        </ol>
    </div>
  )
}
