import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

function Toasts(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [brew, setBrew] = useState([])

    useEffect( () => {
        fetch('https://api.openbrewerydb.org/breweries?page=341')
            .then( res => res.json() )
            .then( 
                (result) => {
                    setIsLoaded(true);
                    setBrew(result);
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
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Random Breweries Selected from the OpenBrewery API</h2>
                    </div>
                </div>
                <div className="row">
                    {brew.map( b => (
                        <div className="col-3 my-3">
                            <Card>
                                <Card.Body>
                                <Card.Title>{b.name}</Card.Title>
                                <Card.Text>
                                    {b.name} is a {b.brewery_type} located in {b.city}, {b.state}.<br /><br /> {b.website_url == null ? 'This brewery has no listed website' : <span>You can check them out at &nbsp;
                                     <a href={b.website_url} target="_blank" className="link-info">{b.website_url}</a></span>}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated {b.updated_at}</small>
                                </Card.Footer>
                            </Card>       
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Toasts