import React from 'react'
import { Header } from '../../Components/Header'
import TrolleyImg from '../../Assets/trolley Spares.png'
import Tubeimg from '../../Assets/TubelessTyre.png'
import Footer from '../../Components/Footer'
import CartCard from '../../Components/CartCard'

export const Cart = () => {

    const Categories = [
        {
            Name: "Trolley Spares",
            Img: TrolleyImg,

        },
        {
            Name: "Tubeless Tyres",
            Img: Tubeimg,
        }
    ]


    return (
        <div className=''>
            <Header />
            <div className='pd-2 sm:mx-20 flex flex-row justify-around flex-wrap items-center sm:mx-20 '>
                {
                    Categories.map(cat => {
                        return (
                            <CartCard Name={cat.Name} image={cat.Img} />
                        )
                    })
                }
            </div>

            <Footer />

        </div>
    )
}