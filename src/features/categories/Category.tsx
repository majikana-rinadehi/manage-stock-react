import { FunctionComponent } from "react"
import { FilterBar } from "../filterBar/FilterBar"
import { Items } from "../items/Items"
import type { Category as CategoryType } from '@/common/types'

export type Props = {
    category: CategoryType
}

export const Category: FunctionComponent<Props> = ({category}) => {
    return (
        <>  
            <div className="flex">
                <div className="ml-4 mr-auto font-black text-lg">
                    {/* <!--カテゴリ名--> */}
                    {category.categoryName}
                </div>
                <button
                    className="mr-4 hover:bg-gray-500"
                //   @click="showInput"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>
            <FilterBar/>
            <Items/>
        </>
    )
}