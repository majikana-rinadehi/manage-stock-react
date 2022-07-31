import { AddFormButton } from "../../components/AddFormButton"
import { Category } from "./Category"

export function Categories() {
    return (
        <>
            <div className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around">
                <Category categoryName="消耗品" />
            </div >
            <div className="static bg-gray-200 my-6 p-2 text-sm mx-auto shadow-around">
                <AddFormButton
                    itemName="カテゴリ"
                />
            </div>
        </>
    )
}