import React from 'react';
import Panel from './Panel';


const MainComponent = () => {

    return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '80%',
                    margin: '0 auto',
                }}
            >
                    <Panel  />
            </div>
    );
};


export default MainComponent;
