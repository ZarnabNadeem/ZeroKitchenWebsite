import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Cardsdata from "./CardsData";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEL } from "../redux/actions/action";
import { ADD, REMOVE} from "../redux/actions/action";

function CardsDetails() {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id)

  const history = useNavigate()

  const dispatch = useDispatch()

  const getData = useSelector((state) => state.cartreducer.carts);
  // console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  //add data
  const send = (e) => {
    dispatch(ADD(e))
}

// delete by clicking in trash icon
const dlt = (id)=>{
  dispatch(DEL(id))
  history("/");
}

const remove = (item)=>{
  if(item.qnty === 1){
  dispatch(DEL(item.id));
  history("/");
}
  else{
    dispatch(REMOVE(item));
  }
  
}

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details</h2>

        <section className="container my-3">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={ele.imgdata}
                      alt="Item Image"
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> {ele.price}
                          </p>
                          <p>
                            {" "}
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> : Rs {ele.price *ele.qnty}/-
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-item-center" style={{width:100, cursor:'pointer',background:'#ddd', color:"#111"}}>
                            <span style={{fontSize:24}} onClick={()=>remove(ele)}>-</span>
                            <span style={{fontSize:22}}>{ele.qnty}</span>
                            <span style={{fontSize:24}} onClick={()=>send(ele)} >+</span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong> <span>{ele.rating}☆ </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              {" "}
                              <i
                                className="fas fa-trash"
                                onClick={()=>dlt(ele.id)}
                                style={{
                                  color: "crimson",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
