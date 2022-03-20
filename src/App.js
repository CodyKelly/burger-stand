import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <div className='center-contents'>
      <div className='card'>
        <h1>Welcome</h1>
        <p style={{ maxWidth: '300px' }}>
          ...to your new burger stand!
          <br />
          <br />
          As you gaze proudly upon the ramshackle eatery you pieced together in
          the last five minutes, you realize you don't yet have a name for this
          fine establishment!
          <br />
          <br />
          Let's give your stand a name:
        </p>
        <form>
          <input type='text' />
          <input type='submit' className='btn' value="Let's go!" />
        </form>
      </div>
    </div>
  );
}

export default App;
