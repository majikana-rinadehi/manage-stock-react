import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "@/common/types";
import { RootState } from '@/app/store'
import { format, addDays } from 'date-fns'

const initItems: Item[] = [
    {
        itemId: 'item_a',
        itemName: 'きゅうり',
        categoryId: 'category_a',
        categoryName: '食料品',
        amount: 1,
        unitName: '本',
        period: 1,
        addDate: '20220731',
        updDate: '20220731'
    }
]

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initItems,
    reducers: {
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
    addItem,
    updateItem,
    deleteItem
} = itemsSlice.actions

export default itemsSlice.reducer

export const selectItems = (state: RootState) => state.items