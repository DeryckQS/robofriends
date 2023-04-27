import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma0 mt0'>
            <Tilt className="Tilt br5 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa4">
                    <img style={{paddingTop: '2px'}}alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo; 