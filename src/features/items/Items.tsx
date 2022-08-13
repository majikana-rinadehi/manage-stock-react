import { ChangeEvent, FunctionComponent, useEffect } from "react"
import { Item } from "./Item"
import type { Item as ItemType } from '@/common/types'
import { AddFormButton } from "../../components/AddFormButton"
import { ItemEdit } from "../itemEdit/ItemEdit"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectItems, addItem, incrementItem } from "./itemsSlice"

export const Items: FunctionComponent = () => {

    const items = useAppSelector(selectItems)

    const dispatch = useAppDispatch()

    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [editingItem, setEditingItem] = useState<ItemType>()
    const [newItemName, setNewItemName] = useState<string>('')

    const closeModal = () => {
        console.log('close')
        setShowEdit(false)
    }
    const openModal = (item: ItemType) => {
        console.log('true')
        setShowEdit(true)
        setEditingItem(item)
        console.log(editingItem)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value)
    }

    const onClickAddButton = () => {
        dispatch(addItem({newItemName}))
    }

    const onClickPlus = (e: React.MouseEvent, itemId: string) => {
        dispatch(incrementItem({itemId, increaseAmount: 1}))
    }
    
    const onClickMinus = (e: React.MouseEvent, itemId: string) => {
        dispatch(incrementItem({itemId, increaseAmount: -1}))
    }

    return (
        <>
            {
                items.map(item => {
                    return (
                        <Item 
                            onClickPlus={onClickPlus}
                            onClickMinus={onClickMinus}
                            item={item} 
                            openModal={openModal}
                            key={item.itemId}
                            />
                    )
                })

            }
            <AddFormButton
                itemName="アイテム"
                onInputChange={onInputChange}
                onClickAddButton={onClickAddButton}
            />
            {
                showEdit
                ?
                <ItemEdit
                    closeModal={closeModal}
                    editingItem={editingItem!}
                />
                :
                null
            }
        </>
    )
}