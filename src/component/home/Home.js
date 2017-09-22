import React, { Component } from 'react';
import './Home.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className='Shelfie__parent_container'>
                <div className='Shelfie_header' >
                    <div className='Shelfie_header_content' >
                        <img src= {Logo} className='Shelfie_header_logo' alt='logo' />
                        <span className='Shelfie__header_span'>SHELFIE</span>

                    </div>
                </div>
            <div className='Shelfie__child_container' >
                <Link className='navLink' to= '/bins/A' > 
                <span className='Shelf_A'>Shelf A</span>
                </Link>
                <Link className='navLink' to= '/'>
                <span className='Shelf_B'>Shelf B</span>
                </Link>
                <Link className='navLink' to= '/'>
                <span className='Shelf_C'>Shelf C</span>
                </Link>
                <Link className='navLink' to= '/'>
                <span className='Shelf_D'>Shelf D</span>
                </Link>
            </div>

            </div>
        )
    }
}
export default Home; 