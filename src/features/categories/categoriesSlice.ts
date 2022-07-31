import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "@/common/types";
import { RootState } from '@/app/store'

const initCategories: Category[] = [
    {
        categoryId: 'category_a',
        categoryName: '食料品',
        addDate: '20220731',
        updDate: '20220731',
        items: [
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
    }
]

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initCategories,
    reducers: {

    }
})

export default categoriesSlice.reducer

export const selectCategories = (state: RootState) => state.categories