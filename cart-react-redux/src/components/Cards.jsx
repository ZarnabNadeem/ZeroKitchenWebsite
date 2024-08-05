import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cardsdata from './CardsData'
import './styles.css'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'

const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(ADD(e))
    }


    return (
        <section id='OurMenu'>
        <div className='bg'>
            <div className='container pt-5'  >
                <h2 className='text-center' style={{ fontFamily: 'monospace', fontWeight: ' bold', fontSize: '6vh' }} >Our Menu</h2>
                <div className='row d-flex justify-content-center align-items-center'>
                    {
                        data.map((element, id) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 card_style' >
                                        <Card.Img variant="top"  src={element.imgdata} style={{ height: '16rem', marginTop: "12px"  }} />
                                        <Card.Body>
                                            <Card.Title>{element.rname}</Card.Title>
                                            <Card.Text>
                                                Price: Rs {element.price}/-
                                            </Card.Text>
                                            <div className="button_div d-flex justify-content-center">
                                                <Button variant="dark" className='col-lg-12' onClick={() => send(element)}>Add to Cart</Button>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }



                </div>
            </div>
        </div>
        </section>
    )
}

export default Cards
