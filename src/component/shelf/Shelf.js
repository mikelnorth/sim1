import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Shelf.css'
import Header from '../header/Header.js'


export default class Shelf extends Component {
    constructor() {
        super()

        this.state = {
            bin1: <Link className='bin' to='/create/A1'><span>+ Add inventory to bin</span></Link>,
            bin2: <Link className='bin' to='/create/A2'><span>+ Add inventory to bin</span></Link>,
            bin3: <Link className='bin' to='/create/A3'><span>+ Add inventory to bin</span></Link>,
            bin4: <Link className='bin' to='/create/A4'><span>+ Add inventory to bin</span></Link>,
            bin5: <Link className='bin' to='/create/A5'><span>+ Add inventory to bin</span></Link>
        }

    }

    render() {
        return (
            <div>

                {/* {this.state? this.state.bin1 && this.state.bin2   : null} */}
                
                <Header />

                <div className='bin_container'>
                    {this.state.bin1}
                    {this.state.bin2}
                    {this.state.bin3}
                    {this.state.bin4}
                    {this.state.bin5}
                </div>
            </div>
        )
    }


}