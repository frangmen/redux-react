import items from "./items";

const initState = {
    items: items,
    addedItems: [],
    total: 0,
};
const cartReducer = (state = initState, action) => {
    return state;
};
export default cartReducer;
