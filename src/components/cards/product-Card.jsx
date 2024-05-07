import React from 'react'
import S24TabsCard from '../section-tabs/S24TabsCard'
import Buttun from '../Buttun'
import '../yordamchi.scss'
import './cards.scss'

export const ProductCard = ({ name, tabs, description, img, price, title, btn1, btn2, bg_color, color, btnColor, btnbgColor }) => {
    const tab = tabs?.map((tab) => <S24TabsCard key={tab.id} name={tab.name} />)

    return (
        <div className={`${bg_color ? bg_color : ''} ${color ? color : ''} product-card w-100 py-2 flex flex-col items-center gap-1`}>
            <div className="product-card-tabs">
                <h1 className='text-center p-1 text-2xl'>{name}</h1>
                <div className="flex items-center text-lg">
                    {tab}
                </div>
            </div>
            <div className="product-card-imgs"> <img className="product-card-img" src={img} /> </div>
            <div className="product-card-title flex flex-col items-center gap-1">
                <h3 className='text-4xl'>{`${title} ${price}`}</h3>
                <p> {description} </p>
                <div className="flex items-center gap-2">
                    <Buttun className={`${btn1 ? 'btn-1' : 'none'} bg-white text-black font-semibold`}>Learn more</Buttun>
                    <Buttun className={`${btn2 ? 'btn-2' : 'none'} ${btnbgColor ? btnbgColor : ''} ${btnColor ? btnColor : ''}`}>Buy Now</Buttun>
                </div>
            </div>
        </div>
    )
}
