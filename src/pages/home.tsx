import { Categories } from "../features/categories/Categories"
import { useNavigate } from "react-router-dom"
import { ToolBar } from "../components/ToolBar"
import { ShoppingList } from "../features/shoppingItems/ShoppingItems"
import { useState } from "react"

export function Home() {
    const [showShoppingList, setShowShoppingList] = useState(false)
    const navigate = useNavigate()

    const closeModal = () => {
        setShowShoppingList(false)
    }

    const handleToolBarEvent = (buttonName: string) => {
        switch (buttonName) {
            case '買い物メモを発行':
                setShowShoppingList(true)
                break
            default:
                return
        }
    }
    return (
        <>
            <div>
                <div
                    onClick={() => navigate('/login')}
                >
                    ログアウト
                </div>
                {/* このToolBarというコンポーネントの更に中のコンポーネントからのイベントを、
                どうやって賢く拾うべきか...? */}
                {/* 一旦バケツリレー */}
                <ToolBar 
                    emitButtonName={handleToolBarEvent}
                    />
                <Categories 
                    />
                {
                    showShoppingList
                        ?
                        <ShoppingList
                            closeModal={closeModal}
                        />
                        :
                        null
                }
            </div>
        </>
    )
}