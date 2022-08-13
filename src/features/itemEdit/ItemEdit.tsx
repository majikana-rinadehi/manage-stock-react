import { ChangeEvent, FunctionComponent, useEffect, useState } from "react"
import type { Item as ItemType } from '@/common/types'
import { FormItem } from "../../components/FormItem"
import {
    updateItem,
    deleteItem
} from '../../features/items/itemsSlice'
import { useAppDispatch } from "../../app/hooks"

export type Props = {
    // categoryName: string
    closeModal: () => void
    editingItem: ItemType
}

/** `ItemType` のうち、編集フォームに必要なプロパティだけを抜粋 */
type ItemEditForm = Pick<ItemType, 'amount' | 'itemName' | 'unitName' | 'period' >

export const ItemEdit: FunctionComponent<Props> = ({ closeModal, editingItem }) => {

    const [form, setForm] = useState<ItemEditForm>()

    const dispatch = useAppDispatch()

    const init = () => {
        console.log('mounted')
        const initForm: ItemEditForm = {
            amount: editingItem.amount,
            itemName: editingItem.itemName,
            period: editingItem.period,
            unitName: editingItem.unitName
        }
        console.log('initForm', initForm)
        setForm(initForm)
        // この段階ではまだ undefined と表示される
        // =>componentDidMount()のスコープ内だから? 
        console.log(form)
    }

    const clear = () => {
        console.log('unmounted')
    }

    useEffect(() => {
        // same as componentDidMount()
        init()
        return () => {
            // same as componentWillUnmount()
            clear()
        }
    }, [])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>, itemName: string) => {
        console.log('e.target.value:', e.target.value)
        console.log('itemName', itemName)
        setForm((prevForm) => {
            if (prevForm) {
                const newForm = {...prevForm}
                // TODO: HACK! 
                // @ts-ignore
                newForm[itemName] = e.target.value
                return newForm
            }
        })
    }

    const onClickUpdateButton = () => {
        const newItem = Object.assign({...editingItem}, form)
        console.log('newItem:', newItem)
        dispatch(updateItem({itemId: editingItem.itemId, newItem: newItem}))
        closeModal()
    }

    const onClickDeleteButton = () => {
        dispatch(deleteItem({itemId: editingItem.itemId}))
        closeModal()
    }

    return (
        <>
            <div
                className="overflow-y-scroll fixed  top-0 left-0 right-0 flex justify-center mt-40 text-inherit"
                style={{ 'maxHeight': '70%' }}
                >
                {/* style maxHeight: '90%'だとスクロールしない */}
                {/* <!--②アイテム編集(モーダル)--> */}
                <div
                    // @click="$emit('closeModal')" 
                    onClick={() => {
                        closeModal!()
                    }}
                    className="fixed inset-0 bg-gray-400 opacity-50">
                    {/* <!--モーダルウィンドウ--> */}
                </div>
                <div
                    className="overflow-y-scroll w-80 bg-white relative rounded-xl p-5"
                    style={{ 'maxHeight': '90%' }}
                    // style="max-width: 400px;"
                    >
                    <div className="flex justify-end">
                        {/* <!--戻るボタン、削除ボタン--> */}
                        <div className="mr-auto">
                            <button className="text-3xl"
                            onClick={() => closeModal!()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    {/* 戻る */}
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => onClickDeleteButton()}
                                className="px-4 py-2 bg-red-500 hover:bg-red-700 
                        text-white rounded-lg font-bold text-xs"
                            // @click="$emit('deleteItem', form.id)"
                            >
                                削除
                            </button>
                            {/* <!--削除--> */}
                        </div>
                    </div>
                    {   
                        form
                        ?
                        Object.entries(form!).map((property, i) => {
                            return (
                                <FormItem 
                                    itemName={property[0]} 
                                    value={property[1]} 
                                    onInputChange={onInputChange}
                                    key={i}
                                />
                            )
                        })
                        :
                        null
                    }
                    {/* <FormItem itemName="アイテム名" />
                    <FormItem itemName="数量" />
                    <FormItem itemName="単位" />
                    <FormItem itemName="残り日数" /> */}
                    <div>
                        {/* <!-- 更新ボタン --> */}
                        <button 
                            onClick={() => onClickUpdateButton()}
                            className="px-4 py-2 bg-green-500 hover:bg-green-700 
                            text-white rounded-lg font-bold text-xs"
                        // @click="$emit('updateItem', form)"
                        >
                            更新
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
