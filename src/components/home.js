import React from "react";
import { Link } from "react-router-dom";

function HomePage (props) {
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                <h1 className="text-center">Welcome to React Router and React Bootstrap</h1>
                <Link to="/tests" className="btn btn-primary">Test Component</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage