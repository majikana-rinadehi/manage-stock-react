import { FunctionComponent } from "react"
import { Item } from "./Item"
import type { Item as ItemType } from "./Item"
import { AddFormButton } from "../../components/AddFormButton"
import { ItemEdit } from "../itemEdit/ItemEdit"
import { useState } from "react"

const initItems: ItemType[] = [
    {
        "id": "1",
        "category_id": "1",
        "category_name": "食材",
        "name": "きゅうり",
        "value": 1,
        "period": 1,
        "unitName": "本",
        "addDate": "17:29:13",
        "updDate": "17:29:13"
    },
    {
        "id": "1",
        "category_id": "1",
        "category_name": "食材",
        "name": "きゅうり",
        "value": 1,
        "period": 1,
        "unitName": "本",
        "addDate": "17:29:13",
        "updDate": "17:29:13"
    },
]

export const Items: FunctionComponent = () => {

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
                initItems.map(item => {
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