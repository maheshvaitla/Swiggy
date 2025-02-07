import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ItemType {
    name: string;
}

interface CartState {
    items: ItemType[];
}

const initialState: CartState = {
    items: [],
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemType>)  => {
            state.items.push(action?.payload)
        },
        removeItem: (state)=> {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;