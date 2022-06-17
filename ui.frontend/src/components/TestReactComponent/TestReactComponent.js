import React,{Component} from "react";
import {Button} from 'rsuite';
class TestReactComponent extends Component {

    constructor(){
        super();
        this.state = {  //create state
            message : "Welcome ReactAEM Monkey !!",
          //  textList : this.props
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(){
        
        this.setState(function(prevState,props){
            console.log("The prev state is ", prevState);  // can also be passed as an object ..but not advisable
            console.log("The props in the set state ",props);
            return {
                message : `${prevState.message}  " Hurray !!".  The List Goes ${props.textList.join(" , ")}`
            }
        });
    }

    somefunction(props) {
        return props;
    }
    /*can't create functional expression in "OnClick" on button here !!  because the function expression creates a new scope !! :( () => this.changeState() //
    
    Alternative  : 
    {
    function(){
    this.changeState();
    }.bind(this)
    }
    */

    somehandleFunc(){
            console.log("Button clicked on ", this);
    }

    render(){
        console.log("About some function ",this.somefunction(this.props));    
        console.log("The this keyword is ", this);    
        const { textList } = this.props;
        console.log("Text list is " , textList);
    return (
    <div><h3>{this.state.message}</h3>
    <br/>
    <Button color="yellow" appearance="primary" onClick={this.changeState}>ShowMessage</Button> 
    <br/>
    <br/>
    </div>
);
    }
}
export default TestReactComponent;