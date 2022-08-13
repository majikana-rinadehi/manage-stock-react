import { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from "react"
import { FilterBar } from "../filterBar/FilterBar"
import { Items } from "../items/Items"
import { updateCategory } from "./categoriesSlice"
import type { Category as CategoryType } from '@/common/types'
import { useAppDispatch } from "../../app/hooks"

export type Props = {
    category: CategoryType
}

export const Category: FunctionComponent<Props> = ({ category }) => {

    const dispatch = useAppDispatch()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [newCategoryName, setNewCategoryName] = useState<string>('')

    useEffect(() => {
        if (isEditing) {
            // 編集画面表示時の、input 画面表示値と `newCategoryName`の不一致を解消(*´ω`*)
            setNewCategoryName(category.categoryName)
        }
    }, [isEditing])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategoryName(e.target.value)
    }
    
    const onClickUpdateButton = () => {
        dispatch(updateCategory({newCategoryName, categoryId: category.categoryId}))
    }

    const normalHeader =
        <div className="flex">
            <div className="ml-4 mr-auto font-black text-lg">
                {/* <!--カテゴリ名--> */}
                {category.categoryName}
            </div>
            {/* 編集ボタン */}
            <button
                onClick={() => setIsEditing(true)}
                className="mr-4 hover:bg-gray-500"
            //   @click="showInput"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            </button>
        </div>

    const editingHeader =
        <div
            className="flex justify-end mx-2 hover:bg-gray-300 rounded-lg">
            <div className="justify-self-start mr-auto p-2">
                <input
                    defaultValue={category.categoryName}
                    onChange={(e) => onInputChange(e)}
                    className="w-full h-6 p-2"
                    type="text"
                />
            </div>
            <div className="flex m-2">
                <button
                    onClick={() => {
                        setIsEditing(false)
                        onClickUpdateButton()
                    }
                    }
                    className="px-3 py-2 bg-green-500 hover:bg-green-700 
                    text-white rounded-lg mr-2 font-bold text-xs">
                    変更
                </button>
                <button
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-700 
                    text-white rounded-lg font-bold text-xs">
                    キャンセル
                </button>
            </div >
        </div >

    return (
        <>
            {
                !isEditing
                    ?
                    normalHeader
                    :
                    editingHeader
            }
            <FilterBar />
            <Items />
        </>
    )
}