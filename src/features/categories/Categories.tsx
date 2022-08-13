import { AddFormButton } from "../../components/AddFormButton"
import { Category } from "./Category"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addCategory, selectCategories } from "./categoriesSlice"
import { ChangeEvent, useState } from "react"

export function Categories() {

    const categories = useAppSelector(selectCategories)

    const dispatch = useAppDispatch()

    const [newCategoryName, setNewCategoryName] = useState<string>('')

    const onAddInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategoryName(e.target.value)
    }

    const onClickAddButton = () => {
        dispatch(addCategory({newCategoryName}))
    }   
    
    return (
        <>
            {
                categories.map(category => {
                    return (
                    <div 
                        className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around"
                        key={category.categoryId}
                        >
                        <Category 
                            category={category}
                            key={category.categoryId} />
                    </div >

                    )
                })
            }
            <div className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around">
                <AddFormButton
                    itemName="カテゴリ"
                    onClickAddButton={onClickAddButton}
                    onInputChange={onAddInputChange}
                />
            </div>
        </>
    )
}