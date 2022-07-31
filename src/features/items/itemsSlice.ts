import { createSlice } from "@reduxjs/toolkit";
import type { Item } from "@/common/types";
import { RootState } from '@/app/store'
import { categoriesSlice } from "../categories/categoriesSlice";
import { useAppSelector } from "@/app/hooks";
import { Category } from "../categories/Category";

const initItems: Item[] = []

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initItems,
    reducers: {

    }

})

export default itemsSlice.reducer

export const selectItems = (state: RootState) =>
    state.categories.flatMap(category => {
        return category.items
    })