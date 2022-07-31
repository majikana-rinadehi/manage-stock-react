import { FunctionComponent, useState } from "react"

export type Props = {
    itemName: string
}

export const FormItem: FunctionComponent<Props> = ({ itemName }) => {

    return (
        <>
            <div className="flex flex-col h-20 mb-0 p-2 items-center">
                <div className="sm:self-start">{itemName}</div>
                <input 
                    className="border border-solid border-zinc-500 bg-zinc-100"
                    type="text"/>
                <div v-for="error of v$.mail.$errors">
                    {/* <div v-show="error.$validator === 'email'" className="text-xs text-red-600">
                        {itemName + 'の入力がおかC'}
                    </div> */}
                    {/* <div v-show="error.$validator === 'required'" className="text-xs text-red-600">
                        メールアドレスがないんですけど
                    </div> */}
                </div>
            </div>
            <style>
            </style>
        </>
    )
}