import React,{Component} from "react";
import {MapTo} from '@adobe/aem-react-editable-components';
import {Button} from 'rsuite';


const ButtonEditConfig = {

    emptyLabel: 'Banana Button',
    isEmpty: function(props) {
        return !props || !props.text || !props.buttonType;
    }
};
function renderRsuiteButton(props){
return {
    buttonLabel : props.bananaName,
    colorType : (!props.colorType) ? 'blue' : props.colorType,
    buttonType : props.buttonType,
    render : function(){
    return ( 
    <span>
    <br/>
    <Button color={this.colorType} appearance={this.buttonType}> {this.buttonLabel}</Button>
    <br/>
    </span>
       )
    }
}
}

export default function createButton(props){
console.log(props);
return renderRsuiteButton(props).render();
}
MapTo('bananaReact/components/bananaButton')(createButton,ButtonEditConfig)
