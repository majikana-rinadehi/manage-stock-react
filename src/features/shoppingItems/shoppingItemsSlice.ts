import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "@/common/types";
import { RootState } from '@/app/store'
import { format } from 'date-fns'
import { useAppSelector } from "../../app/hooks";
import { selectItems } from "../items/itemsSlice";

const initItems: Item[] = []

export const shoppingItemsSlice = createSlice({
    name: 'shoppingItems',
    initialState: initItems,
    reducers: {

        initializeItems: (state, action: PayloadAction<{items: Item[]}>) => {
            state = [...action.payload.items]
            console.log('state:', state)
        },

        addItem: (state, action: PayloadAction<{newItemName: string}>) => {
            const nowDate: Date = new Date()
            state.push({
                // TODO: categoryId を受け取る
                categoryId: '',
                categoryName: '',
                itemId: format(nowDate, 'yyyyMMddhhmmss'),
                itemName: action.payload.newItemName,
                amount: 1,
                unitName: '',
                period: 1,
                addDate: format(nowDate, 'yyyyMMdd'),
                updDate: format(nowDate, 'yyyyMMdd'),
            })
        },

        updateItem: (state, action: PayloadAction<{itemId: string, newItem: Item}>) => {
            state = state.map(item => {
                if (item.itemId === action.payload.itemId) {

                    item = Object.assign(item, action.payload.newItem)
                    return item
                    
                    // ↓ this doesn't work
                    // return {
                    //     ...item,
                    //     ...action.payload.newItem
                    // }

                    // ↓ this doesn't work
                    // return action.payload.newItem

                    // ↓ this doesn't work
                    // item = action.payload.newItem
                } 
                return item
            })
        },

        deleteItem: (state, action: PayloadAction<{itemId: string}>) => {
            state.splice(
                state.findIndex((item => item.itemId === action.payload.itemId))
                , 1
            )
        }
    }
})

export const {
    initializeItems,
    addItem,
    updateItem,
    deleteItem
} = shoppingItemsSlice.actions

export default shoppingItemsSlice.reducer

export const selectShoppingItems = (state: RootState) => state.shoppingItems