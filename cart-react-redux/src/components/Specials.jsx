import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


function Specials() {
    return (
        <>
            <section id='Specials'>
                <div style={{ backgroundColor: 'tan' }}>
                    <h2 className='text-center' style={{ fontFamily: 'monospace', fontWeight: ' bold', fontSize: '6vh', padding: '30px' }} >Our Specials</h2>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img className="d-block  w-100" src='/images/BreakfastSpecial.png' alt='BreakfastSpecial Image' />
                            <Carousel.Caption>
                                <h3>BreakFast Special.</h3>
                                <p>Pancakes with Maple syrup and some berries in top!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img className="d-block w-100" src='/images/LunchSpecial.png' alt='LunchSpecial Image' />
                            <Carousel.Caption>
                                <h3>Lunch Special.</h3>
                                <p>A jumbo Saucy Chicken Sandwich with extra mayo!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 " src='/images/DinnerSpecial.png' alt='DinnerSpecial Image' />
                            <Carousel.Caption>
                                <h3>Dinner Special.</h3>
                                <p>
                                    Hot Chicken Barbeque with our special BBQ sauces!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Specials
