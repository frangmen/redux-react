import React from "react";
import { connect } from "react-redux";
import { ListGroup, Col, Row } from "react-bootstrap";
import Item from "../Item/Item";

const ItemListContainer = ({ items }) => {
    return (
        <div>
            <Row xs={1} sm={2} md={4}>
                {items.map((item) => (
                    <Col key={item.id}>
                        <ListGroup.Item>
                            <Item item={item} />
                        </ListGroup.Item>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps)(ItemListContainer);
