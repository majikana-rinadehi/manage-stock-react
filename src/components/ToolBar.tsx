import { FunctionComponent } from "react"
import { ToolBarButton } from "./ToolBarButton"

export type Props = {
    /** 
     * ToolBarButtonで押されたボタン名に応じて、home.tsxでイベントハンドリング  
     * ※バケツリレー orz
     * */
    emitButtonName: (buttonName: string) => void
}

export const ToolBar: FunctionComponent<Props> = ({ emitButtonName }) => {

    return (
        <>
            <div className="overflow-x-scroll flex static bg-gray-200 mx-6 my-6 p-2 text-sm shadow-around">
                {/* ツールボタン */}
                <ToolBarButton 
                    emitButtonName={emitButtonName}
                    buttonName="買い物メモを発行" 
                    classNameProp="bg-rose-400 active:bg-rose-500 sm:hover:bg-rose-500"/>
                <ToolBarButton 
                    emitButtonName={emitButtonName}
                    buttonName="アイテムを選択" 
                    classNameProp="bg-cyan-500 active:bg-cyan-600" />
                <ToolBarButton 
                    emitButtonName={emitButtonName}
                    buttonName="共有" 
                    classNameProp="bg-lime-500 active:bg-lime-600"/>
            </div>
        </>
    )
}