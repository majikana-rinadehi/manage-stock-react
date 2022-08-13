import { FunctionComponent, useState } from "react";
import { ShoppingItem } from "../shoppingList/ShoppingItem";
import type { Item as ItemType } from '@/common/types'
import { SendMessage } from "../sendMessage/SendMessage";

export type Props = {
    closeModal: () => void
}

const initItems: ItemType[] = [
    // {
    //     "itemid": "1",
    //     "category_id": "1",
    //     "category_name": "食材",
    //     "name": "きゅうり",
    //     "value": 1,
    //     "period": 1,
    //     "unitName": "本",
    //     "addDate": "17:29:13",
    //     "updDate": "17:29:13"
    // },
    // {
    //     "id": "1",
    //     "category_id": "1",
    //     "category_name": "食材",
    //     "name": "きゅうり",
    //     "value": 1,
    //     "period": 1,
    //     "unitName": "本",
    //     "addDate": "17:29:13",
    //     "updDate": "17:29:13"
    // },
]

export const ShoppingList: FunctionComponent<Props> = ({ closeModal }) => {

    const [showSendMessage, setShowSendMessage] = useState(false)

    const closeSendMessage = () => {
        setShowSendMessage(false)
    }

    return (
        // <!--③買い物メモ-->
        <div
            className="overflow-y-scroll fixed top-0 left-0 right-0 flex justify-center mt-48"
        // style="max-height: 70%;"
        >
            {/* <!-- ↑ここにoverflow-y-scroll、 max-height...で少しだけスクロールするようになった --> */}
            <div
                onClick={() => closeModal()}
                className="fixed inset-0 bg-gray-400 opacity-50"
            // @click="$emit('closeList')"
            >
            </div>
            {/* // <!-- ここからモーダルコンテンツ-- > */}
            <div
                // ref="listContainer"
                className="w-11/12 sm:w-96 bg-white relative rounded-xl py-5"
            // style="min-width: 400px; max-height: 90%;"
            >
                {/* <!--タイトル「買い物/Todo」メモ--> */}
                <div className="text-2xl font-black">
                    {/* {{ listTitle }} */}
                    買い物メモ
                </div>
                {/* <!-- ヘッダー --> */}
                <div className="flex justify-end items-center">
                    {/* 戻るボタン */}
                    <div
                        onClick={() => closeModal()}
                        className="mr-auto ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            {/* 戻る */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                    </div>
                    {/* <!-- リセットボタン --> */}
                    <div>
                        <button
                            // @click="resetItems"
                            className="px-4 py-2 bg-yellow-500 active:bg-yellow-600 sm:hover:bg-yellow-600 text-white rounded-lg mr-2 font-bold text-xs"
                        >リセット
                        </button>
                    </div>
                </div>
                <div
                    className="overflow-y-scroll flex-col justify-between bg-gray-200 my-4 p-2 text-sm"
                // style="max-height: 70%;"
                >
                    {/* <!-- アイテムをカテゴリごとに表示 --> */}
                    <div className="flex flex-col bg-gray-100">
                        <div>絞り込み</div>
                        <div className="flex justify-evenly">

                            <div>
                                <button
                                // :className="filter?.filterType === 'value' ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
                                // @click="changingFilter('value')"
                                >数量残り1
                                </button>
                            </div>
                            <div>
                                <button
                                // :className="filter?.filterType === 'period' ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
                                // @click="changingFilter('period')"
                                >期限残り1日</button>
                            </div>
                            <div>
                                <button
                                // :className="filter === null ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
                                // @click="changingFilter('all')"
                                >フィルターなし</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- id="capture-items-target"をここに移動 --> */}
                    <div className="bg-gray-200 p-2 text-sm my-auto" >
                        <div id="capture-items-target"
                            className="bg-gray-200 p-2 text-sm m-auto">
                        </div>
                        {
                            initItems.map(item => <ShoppingItem item={item} />)
                        }

                    </div>
                    {/* <div
                        className="fixed translate-y-12 close-btn-temp"
                    // style="left:calc(50% - 3rem/2);"
                    // @click="$emit('closeList')"
                    >
                        X
                    </div > */}
                </div>
                <div className="flex justify-evenly">
                    <button
                        className="px-4 py-2 rounded-lg flex items-center
                                bg-blue-500 active:bg-blue-700 sm:hover:bg-blue-700 text-white font-bold text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-base">
                            スクショ
                        </span>
                    </button>
                    <button
                        onClick={() => setShowSendMessage(true)}
                        className="px-4 py-2 rounded-lg flex items-center
                                bg-green-500 active:bg-green-700 sm:hover:bg-green-700 text-white font-bold text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="ml-2 text-lg">
                            Line
                        </span>
                    </button>
                </div >
            </div>
            {
                showSendMessage
                    ?
                    <SendMessage
                        closeModal={closeSendMessage}
                    />
                    :
                    null
            }
        </div>

    )
}