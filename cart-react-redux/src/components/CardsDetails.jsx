import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Cardsdata from './CardsData'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function CardsDetails() {

  const [data, setData] = useState([])

  const { id } = useParams();
  const getData = useSelector((state) => state.cartreducer.carts);
  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === id
    });
    setData(compareData)
  }
  useEffect(() => {
    compare();
  }, [id])



  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Item Details</h2>

        <section className='container my-3'>
          <div className="itemsdetails">
            {
              data.map((ele) => {
                return (
                  <></>
                );
              })

            }
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="Item Image" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong> : Masala Theory</p>
                    <p> <strong>Price</strong> : Rs 300/-</p>
                    <p> <strong>Dishes</strong> : North Indian, Biryani, Mughlai</p>
                    <p> <strong>Total</strong> : Rs 300/-</p>


                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span>3.5☆ </span></p>
                    <p><strong>Order Review :</strong> <span>1175 + order placed from here recently</span></p>
                    <p><strong>Remove :</strong> <span> <i className='fas fa-trash' style={{ color: 'crimson', fontSize: 20, cursor: 'pointer' }}></i></span></p>
                  </td>
                </tr>
              </Table>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default CardsDetails
