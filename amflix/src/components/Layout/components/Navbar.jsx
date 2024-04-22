import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./style/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const navbar = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  const fetchlist = () => {
    if (val && val.length > 1) {
      navigate(`/search/${val}`);
      setVal("");
    } else {
      navigate("/");
    }
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        backgroundColor: "black",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          style={{ color: "red", fontSize: "4.1vh", fontWeight: "750" }}
        >
          ALE-FLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink className="link" to="/">
              Watch Movies and Dramas
            </NavLink>
            <NavLink className="link" to="/join">
              Join Now
            </NavLink>
            <NavLink className="link" to="/signin">
              Sign In
            </NavLink>
          </Nav>
          <Form className="d-flex" style={{ marginRight: "3vh" }}>
            <Form.Control
              type="search"
              placeholder="Search Movie..."
              className="me-2"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              onClick={fetchlist}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbar;
