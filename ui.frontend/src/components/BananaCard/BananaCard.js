import React,{Component} from 'react';
import  {Panel} from 'rsuite';

class BananaCard extends Component {
  render() {
    return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <img src="https://via.placeholder.com/240x240" height="240" />
        <Panel header="RSUITE">
        <p>
            <small>
          A suite of React components, sensible UI design, and a friendly development experience.
            </small>
      </p>
    </Panel>
  </Panel>
    )
  }
}

export default BananaCard;

