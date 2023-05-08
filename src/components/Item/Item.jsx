import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
    return (
        <div>
            <Card
                style={{
                    width: "18rem",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    border: "none",
                }}>
                <Link to={`/detail/${item.id}`}>
                    <Card.Img
                        variant='top'
                        src={item.img}
                        style={{
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px 10px 0px 0px",
                        }}
                    />
                </Link>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#333333",
                            textAlign: "center",
                        }}>
                        {item.title}
                    </Card.Title>
                    <Card.Text
                        style={{
                            fontSize: "16px",
                            color: "#666666",
                            marginBottom: "1rem",
                        }}>
                        {item.desc}
                    </Card.Text>
                    <ListGroup variant='flush'>
                        <ListGroup.Item
                            style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#333333",
                            }}>
                            Price: {item.price}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
