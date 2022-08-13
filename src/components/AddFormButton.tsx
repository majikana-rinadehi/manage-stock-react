import { ChangeEvent, FunctionComponent, useState } from "react"

export type Props = {
    itemName: string,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onClickAddButton: () => void
}

export const AddFormButton: FunctionComponent<Props> = ({ itemName, onInputChange, onClickAddButton }) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)

    return (
        <>
            {
                !isEditing
                    ? <div
                        className="flex mx-2 h-12 rounded-lg">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={'w-full hover:bg-gray-300'}
                        >
                            {'＋' + itemName + 'を追加'}
                        </button>
                    </div >
                    :
                    <div
                        className="flex justify-end mx-2 hover:bg-gray-300 rounded-lg">
                        <div className="justify-self-start mr-auto p-2">
                            {/* <!-- 何故か、@keydown.enter にすると、押下後「+アイテムを追加」にフォーカス行かない --> */}
                            <input
                                onChange={(e) => onInputChange(e)}
                                className="w-full h-6 p-2"
                                type="text"
                                placeholder={'新しい' + itemName + 'を追加'}
                            />
                        </div>
                        <div className="flex m-2">
                            <button
                                onClick={() => {
                                    setIsEditing(false)
                                    onClickAddButton()
                                    }
                                }
                                className="px-3 py-2 bg-green-500 hover:bg-green-700 
                                        text-white rounded-lg mr-2 font-bold text-xs">
                                追加
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-3 py-2 bg-red-500 hover:bg-red-700 
                                        text-white rounded-lg font-bold text-xs">
                                キャンセル
                            </button>
                        </div >
                    </div >
            }
        </>
    )
}