import { AddFormButton } from "../../components/AddFormButton"
import { Category } from "./Category"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categoriesSlice"

export function Categories() {

    const categories = useAppSelector(selectCategories)
    
    return (
        <>
            {
                categories.map(category => {
                    return (
                    <div className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around">
                        <Category category={category} />
                    </div >

                    )
                })
            }
            <div className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around">
                <AddFormButton
                    itemName="カテゴリ"
                />
            </div>
        </>
    )
}