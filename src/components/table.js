import React from "react";
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Tables(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [people, setPeople] = useState([])

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=10')
            .then( res => res.json() )
            .then( 
                (result) => {
                    console.log(result.results[0])
                    setIsLoaded(true);
                    setPeople(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, [])
    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
        <div className="container my-4">
            <h2 className="text-center mx-auto mb-4">Random Users Generated with the Randomuser API</h2>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
                { people.map( (p, i) => (
                    <tr key={i}>
                        <td>{p.name.first}</td>
                        <td>{p.name.last}</td>
                        <td>{p.location.city}, {p.location.state}, {p.location.country}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td>
                            <Link to="/modal" className="btn btn-primary">V-Card</Link>
                        </td>
                    </tr>
                ))}
                
            </tbody>
            </Table>
            </div>
    );
}
}
export default Tables