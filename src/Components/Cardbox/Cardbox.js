import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Cardbox.module.css";
import CartContext from "../../Store/cart-context";
import { useNavigate } from "react-router-dom";

const Cardbox = (props) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const imgHandler = (title) => {
   
    navigate(`/store/${title}`);
  };
  const clickHandler = (event) => {
    const title = event.target.parentNode.children[1].children[0].innerText;
    const url = event.target.parentNode.children[0].src;
    const Price =
      event.target.parentNode.children[1].children[1].children[0].innerText;

    const imgObj = {
      title: title,
      url: url,
      price: Price,
    };
    cartCtx.addToCartItems(imgObj);
    event.stopPropagation();
  };
  // const rating = props.rating;
  return (
    <>
      <Card onClick={()=>imgHandler(props.title)} style={{ width: "100%",margin:"20px auto",padding:"10px 10px" }}>
        <Card.Img src={props.imgurl} variant="top" />
        <div>
          <h3>{props.title}</h3>
          <div className={classes.spantag}>
            <span>Rs {props.price} /-</span>
            <span className={classes.crossed}>
              (Rs {+props.price + Math.floor(Math.random() * 100)} /-)
            </span>
          </div>
          <div className={classes.stars}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <Button
          onClick={clickHandler}
          variant="primary"
          className={classes.button}
        >
          Add to Cart
        </Button>
      </Card>
    </>
  );
};

export default Cardbox;
