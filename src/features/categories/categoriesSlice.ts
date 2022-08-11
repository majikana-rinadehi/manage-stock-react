import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "@/common/types";
import { RootState } from '@/app/store'
import { format } from 'date-fns'

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
        addCategory: (state, action: PayloadAction<{newCategoryName: string}>) => {
            state.push({
                categoryId: format(new Date(), 'yyyyMMddhhmmss'),
                categoryName: action.payload.newCategoryName,
                addDate: format(new Date(), 'yyyyMMdd'),
                updDate: format(new Date(), 'yyyyMMdd'),
                items: []
            })
        },
        deleteCategory: (state, action: PayloadAction<{categoryId: string}>) => {
            state.splice(
                state.findIndex(category => 
                    category.categoryId === action.payload.categoryId)
            )
        },
        updateCategory: (state, action: PayloadAction<{newCategoryName: string, categoryId: string}>) => {
            state = state.map(category => {
                if (category.categoryId === action.payload.categoryId) {
                    category.categoryName = action.payload.newCategoryName
                }
                return category
            })
        },

    }
})

export default categoriesSlice.reducer

export const {
    addCategory,
    deleteCategory,
    updateCategory
} = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories