import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Gallery from "./Containers/GalleryContainer";
import Screen from "./Containers/Screen";

export default class Router extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Gallery}></Route>
                    <Route path="/screen" component={Screen}></Route>
                </Switch>
            </BrowserRouter>
        )
    }

}