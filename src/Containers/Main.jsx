import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Router from "../Router";

export default class Main extends React.Component{
    render() {
        return(
            <div>
                <Header getImages={this.props.getImages}/>
                     <Router/>
                <Footer/>
            </div>
        )
    }

}