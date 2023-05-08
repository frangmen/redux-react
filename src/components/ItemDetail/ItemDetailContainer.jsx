import React from "react";
import { connect } from "react-redux";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = ({ items }) => {
    useEffect(() => {
        return () => {
            second;
        };
    }, [third]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps)(ItemDetailContainer);
