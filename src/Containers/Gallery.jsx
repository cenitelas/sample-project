import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

class Gallery extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <Link to={"/screen"}>GO SCREEN</Link>
                </div>
                {this.props.images && this.props.images.map((item,index)=>{
                    console.log(item);
                    return <img key={index} width={100} height={100}  src={item.download_url}/>
                })}
            </div>
        )
    }

}

export default withRouter(Gallery);