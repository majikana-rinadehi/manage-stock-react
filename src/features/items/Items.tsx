import { FunctionComponent } from "react"
import { Item } from "./Item"
import type { Item as ItemType } from "./Item"
import { AddFormButton } from "../../components/AddFormButton"
import { ItemEdit } from "../itemEdit/ItemEdit"
import { useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectItems } from "./itemsSlice"

export const Items: FunctionComponent = () => {

    const items = useAppSelector(selectItems)

    const [showEdit, setShowEdit] = useState<boolean>(false)

    const closeModal = () => {
        console.log('close')
        setShowEdit(false)
    }
    const openModal = () => {
        console.log('true')
        setShowEdit(true)
    }

    return (
        <>
            {
                items.map(item => {
                    return (
                        <Item 
                            item={item} 
                            openModal={openModal}
                            />
                    )
                })

            }
            <AddFormButton
                itemName="アイテム"
            />
            {
                showEdit
                ?
                <ItemEdit
                    closeModal={closeModal}
                />
                :
                null
            }
        </>
    )
}