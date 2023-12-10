import { Button, Card } from "react-bootstrap"

const Cardbox=(props)=>{
    const clickHandler=()=>{

    }
    return <>
    <Card style={{width:"50%" }}>
        <Card.Title style={{textAlign:"center"}}>{props.title}</Card.Title>
        <Card.Img src={props.imgurl} variant="top"/>
        <div style={{display:"flex"}}>
            <span>Rs {props.price}</span>
            <Button onClick={clickHandler}>Add to Cart</Button>
        </div>
    </Card>
    </>
}

export default Cardbox;