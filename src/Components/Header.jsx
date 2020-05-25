import React from "react";
import "./Headers.css"
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            limit:10,
            result:1
        }
    }

    resultHendler = (val)=>{
        if(val===4){
            this.setState({result:1});
        }else{
            this.setState({result:this.state.result+1})
        }

    }

    render() {
        return(
            <div>
                <div>
                    <button onClick={()=>this.props.getImages(this.state.limit)}>Get images</button>
                    <input onChange={(e)=>this.setState({limit:e.target.value})} value={this.state.limit}/>
                </div>
                <div>
                    <input onChange={(e)=>this.setState({result:e.target.value})} value={this.state.result}/>
                </div>
                <div id="params">
                    <input type="hidden" value={this.state.result}/>
                    <div className="switch">
                        <div className="button" onClick={()=>this.resultHendler(this.state.result)}></div>
                    </div>
                </div>
            </div>
        )
    }
}
