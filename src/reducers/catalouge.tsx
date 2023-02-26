import {createSlice} from '@reduxjs/toolkit'

export interface catalougeInterface{
    id: string,
    url: string,
    price: number,
    desc: string
}

const catalouge = createSlice({
    name: "catalouge",
    initialState : [
        {
            id: "1",
            url: "https://source.unsplash.com/random",
            price: 10,
            desc: "An amazing product"
        },
        {
            id: "2",
            url: "https://source.unsplash.com/random",
            price: 12,
            desc: "Cool new product"
        },
        {
            id: "3",
            url: "https://source.unsplash.com/random",
            price: 34,
            desc: "Cool new Item"
        },
        {
            id: "4",
            url: "https://source.unsplash.com/random",
            price: 1000,
            desc: "Thing 1"
        },
        {
            id: "5",
            url: "https://source.unsplash.com/random",
            price: 1005,
            desc: "Thing 2"
        },
        {
            id: "6",
            url: "https://source.unsplash.com/random",
            price: 88923,
            desc: "Content bag 2"
        },
        {
            id: "7",
            url: "https://source.unsplash.com/random",
            price: 0,
            desc: "Content bag 5"
        },
        {
            id: "8",
            url: "https://source.unsplash.com/random",
            price: 1462,
            desc: "Content bag 1"
        },
        {
            id: "9",
            url: "https://source.unsplash.com/random",
            price: 14,
            desc: "Toolbox"
        },
    ],
    reducers: {
        removeFromCatalouge(state, action){
            return state.filter(prod=>!action.payload.includes(prod.id))
        }
    }
})

export const { removeFromCatalouge } = catalouge.actions
export default catalouge.reducer