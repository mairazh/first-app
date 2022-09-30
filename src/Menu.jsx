import React from 'react'
import Header from './Header';
import './Menu.css'

function Menu() {

    return (
        <div>
            <Header />
            <div className='mainMenu'>
                <div>
                    <div className='mainPageFirstRow'>
                        <div>Кондитерские изделии</div>
                        <div>Выпечка</div>
                    </div>
                    <div className='mainPageSecondRow'>
                        <div>Кулинария</div>
                        <div>Круасаны</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu