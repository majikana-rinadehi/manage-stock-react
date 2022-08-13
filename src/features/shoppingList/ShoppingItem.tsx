import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom";
import type { Item as ItemType} from '@/common/types'

export type Props = {
    item: ItemType,
    openModal?: () => void
}

export const ShoppingItem: FunctionComponent<Props> = ({ item, openModal }) => {

    const navigate = useNavigate()

    const onClickPlus = (e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('plus')
    }

    return (
        <>
            <div
                onClick={() => {
                    if (!openModal) return
                    openModal()
                }}
                className="flex justify-end items-center m-2 bg-white p-2">
                <div v-show="showCheckbox"
                // @click.stop=""
                >
                    <input
                        type="checkbox"
                        v-model="isSelected"
                    // @input="toggleSelected"
                    />
                </div>
                {/* <!--アイテム--> */}
                <div className="bg-red-500 -mt-3 h-10 w-2 mr-2"
                    v-if="item.period <= 1">
                </div>
                {/* <div className="bg-yellow-500 -mt-63h- 10 w-2 mr-2"
                v-else-if="item.period == 2">
            </div>
            <div className="bg-green-500 -mt-6 3-  10 w-2 mr-2"
                v-else-if="item.period >= 3">
            </div> */}
                <div className="-mt-3 h-10 w-2 mr-2">
                </div>
                <div className="mr-auto font-bold">
                    {/* <!--アイテム名--> */}
                    {item.itemName}
                </div>
                <div className="mr-3">
                    <button
                        className="align-middle mr-2"
                        onClick={(e) => onClickPlus(e)}
                    // @click.stop="incrementValue(item.id)"
                    >
                        {/* <!--プラスボタン--> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <span className="border rounded-lg px-4 py-2 text-xs">
                        {/* {{item.value + item.unit_name}} */}
                    </span>
                    <button
                        // :disabled="item.value === 0"
                        className="align-middle ml-2"
                    // @click.stop="decrementValue(item.id)"
                    >
                        {/* <!--マイナスボタン--> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="mr-0">
                    <button
                        className="px-4 py-2 bg-red-500 active:bg-red-700 sm:hover:bg-red-700 text-white rounded-lg font-bold text-xs ml-5"
                        // @click="deleteMemoItem(item)"
                    >削除</button>
                {/* <!--削除--> */}
            </div>
        </div>
        </>
    )
}