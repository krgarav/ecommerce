import { useContext, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import classes from "./Cardbox.module.css";
import CartContext from "../../Store/cart-context";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cardbox = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
    let customId = "custom-id-yes";
    toast.success(`Added ${title} to cart !!!`, {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
    });
    if (customId === "custom-id-yes") {
      toast.update(customId, {
        render: `Added ${title} to cart !!!`,
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
    }
    cartCtx.addToCartItems(imgObj);
    event.stopPropagation();
  };

  const handleImageLoad = () => {
    console.log("trigerred");
    setImageLoaded(true);
  };
  // const rating = props.rating;
  console.log(imageLoaded);
  return (
    <>
      <ToastContainer />
      <Card
        onClick={() => imgHandler(props.title)}
        style={{ width: "100%", margin: "20px auto", padding: "10px 10px" }}
      >
        {!imageLoaded && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        <Card.Img
          src={props.imgurl}
          variant="top"
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />

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
