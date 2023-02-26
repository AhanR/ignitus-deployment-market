import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const cart = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        addToCart(state, action : PayloadAction<String>):any{
            let found = false;
            for(let i = 0; i < state.length; i++) {
                if(state[i] == action.payload) found=true;
            }
            if(!found){
                return [...state,action.payload];
            }
            return state;
        },
        removeFromCart(state, action) {
            return state.filter(x=>x!=action.payload);
        },
        clearCart(state){
            return [];
        }
    }
});

export const { addToCart,removeFromCart,clearCart } = cart.actions
export default cart.reducer