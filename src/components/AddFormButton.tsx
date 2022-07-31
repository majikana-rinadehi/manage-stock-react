import { FunctionComponent, useState } from "react"

export type Props = {
    itemName: string
}

export const AddFormButton: FunctionComponent<Props> = ({ itemName }) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <>
            {
                !edit
                    ? <div
                        // v-show="!show"
                        className="flex mx-2 h-12 rounded-lg">
                        <button
                            // ref="buttonRef"
                            // @click="showInput"
                            onClick={() => setEdit(true)}
                            className={'w-full hover:bg-gray-300'}
                        >
                            {/* <!--アイテムを追加--> */}
                            {'＋' + itemName + 'を追加'}
                        </button>
                    </div >
                    :
                    <div
                        // v-show="show"
                        className="flex justify-end mx-2 hover:bg-gray-300 rounded-lg">
                        <div className="justify-self-start mr-auto p-2">
                            {/* <!-- 何故か、@keydown.enter にすると、押下後「+アイテムを追加」にフォーカス行かない --> */}
                            <input
                                //   ref="inputRef" 
                                //   @keydown.enter="addItem"
                                //   @compositionstart="compositionStart"
                                //   @compositionend="compositionEnd"
                                //   @input="inputEvent"
                                className="w-full h-6 p-2"
                                type="text"
                                placeholder="新しいアイテム名"
                            //   v-model="item_name"
                            />
                            {/* <!--新しいアイテムを追加--> */}
                        </div>
                        <div className="flex m-2">
                            <button
                                // @click="addItem"
                                onClick={() => setEdit(false)}
                                className="px-3 py-2 bg-green-500 hover:bg-green-700 
            text-white rounded-lg mr-2 font-bold text-xs">
                                追加
                            </button>
                            {/* <!--追加--> */}
                            <button
                                // @click="closeInput"
                                onClick={() => setEdit(false)}
                                className="px-3 py-2 bg-red-500 hover:bg-red-700 
          text-white rounded-lg font-bold text-xs">
                                キャンセル
                            </button>
                            {/* <!--キャンセル--> */}
                        </div >
                    </div >
            }
        </>
    )
}