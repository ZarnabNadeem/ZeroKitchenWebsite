import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cardsdata from "./CardsData";
import { DEL } from "../redux/actions/action";
import './styles.css'


function NavBar() {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DEL(id));
  };
  return (
    <>
      <Navbar
        className="sticky-top "
        bg="dark"
        data-bs-theme="dark"
        style={{ height: "60px" }}
      >
        <Container>
          <NavLink to={"/"} className={"text-decoration-none text-light mx-3"}>
            <i class="fa-solid fa-kitchen-set" style={{ fontSize: 25 }}></i>
            <span style={{ color: "wheat" }}> Zero</span>Kitchen
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to={"/"}
              className={"text-decoration-none text-light mx-3"}
            >
              {" "}
              Home
            </NavLink>
            <NavLink
              to={"/"}
              className={"text-decoration-none text-light mx-3"}
            >
              {" "}
              Our Menu
            </NavLink>
            <NavLink to={"/"} className={"text-decoration-none text-light"}>
              {" "}
              Our Specials
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Food Photo</th>
                    <th>Item Details</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt="images"
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p> {e.rname}</p>
                            <p> Price: Rs{e.price}/-</p>
                            <p> Quantity: {e.qnty}</p>
                            <p><i className="fas fa-trash smalltrash" style={{ color: 'maroon', fontSize: 20, cursor: 'pointer' }}></i></p>
                                                            </td>
                                                            <td className="mt-5" style={{ color: 'maroon', fontSize: 20, cursor: 'pointer' }}>
                                                                <p><i className="fas fa-trash largetrash"></i></p>

                                                            </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total: Rs300/- </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                Cart is empty.
              </p>
              <img
                src="https://www.shutterstock.com/image-vector/shopping-cart-x-mark-line-600nw-708553450.jpg"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
}

export default NavBar;
