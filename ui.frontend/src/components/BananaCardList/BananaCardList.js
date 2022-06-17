import React, { Component } from 'react';
import  {Panel,FlexboxGrid} from 'rsuite';
import {randomHexColor} from 'random-hex-color-generator';
import emoji from 'node-emoji';

class BananaCardList extends Component {

  renderCards({props}){
    console.log("the props from render card is  " , props);
    
    const bananaCardListArray = props.bananaCardList;
    
    const Card = (props) => ( 
    <Panel bordered header={<b style={{fontSize : '20px'}}>{`${props.title} ${emoji.random().emoji}`}</b>}>
    <p style={{color : randomHexColor()}}>
    {props.desc}
    </p>  
    </Panel>
    );



    return bananaCardListArray.map((item,index) =>  
    <FlexboxGrid> 
    <FlexboxGrid.Item colspan={6}><Card key={index} title={item.cardTitle} desc={item.cardDescription}/></FlexboxGrid.Item>
    </FlexboxGrid>
    );    
    
  }  

  renderEmptyCard(){
    return (
    <FlexboxGrid>
    <Panel bordered header={<b style={{fontSize : '20px'}}>TITLE</b>}>
    <p>
    some Description
    </p>  
    </Panel>
    </FlexboxGrid>
    );
  }


  render() {
     console.log("The this object here is ", this);
     const cardArray = (this.props.bananaCardList.length !== 0) ? this.renderCards(this) : this.renderEmptyCard();
     this.renderCards(this);
    return (
   <div className="show-grid">
     {cardArray}
    </div>
    )
  }
}

export default BananaCardList;