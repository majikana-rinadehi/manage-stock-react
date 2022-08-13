import { ChangeEvent, FunctionComponent, useState } from "react"

export type Props = {
    itemName: string
    // TODO: 型決めれないですかね？ 
    value?: string | number
    onInputChange: (e: ChangeEvent<HTMLInputElement>, itemName: string) => void
}

export const FormItem: FunctionComponent<Props> = ({ itemName, value, onInputChange }) => {

    return (
        <>
            <div className="flex flex-col h-20 mb-0 p-2 items-center">
                <div className="sm:self-start">{itemName}</div>
                <input 
                    // ↓This doesn't work. Input value can't change
                    // value={value} 
                    defaultValue={value}
                    onChange={(e) => {
                        console.log('child:e.target.value:', e.target.value)
                        onInputChange(e, itemName)
                    }}
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