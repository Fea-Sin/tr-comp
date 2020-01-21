import React, { PureComponent } from 'react';
import '../assets/index.less';
import Comp from '../src';

class App extends PureComponent {
  render() {
    return (
      <div>
        <div>THIS IS EXAM</div>
        <div style={{ width: 450, padding: 50 }}>
          <Comp />
        </div>
      </div>
    );
  }
}

export default App;
