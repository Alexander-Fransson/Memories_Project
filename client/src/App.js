import React from 'react';
import memories from './images/memories.png';

const App = () => {
    return(
        <div>
            <h2>Memories</h2>
            <img src={memories} alt="memories" height={60}/>
            <Posts/>
            <Forms/>
        </div>
    );
}

export default App;