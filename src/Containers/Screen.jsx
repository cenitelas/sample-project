import React from "react";
import {Link} from "react-router-dom";

export default class Screen extends React.Component{
    render() {
        return(
            <div style={{width:"100vw",height:"100vh",backgroundColor:"grey"}}>
                <div>
                    <Link to={"/"}>GO GALLERY</Link>
                </div>
            </div>
        )
    }

}