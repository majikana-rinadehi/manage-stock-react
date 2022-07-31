import { FunctionComponent } from "react";

export type Props = {
    emitButtonName: (buttonName: string) => void
    buttonName: string
    /** tailwind class name */
    classNameProp: string
}

export const ToolBarButton: FunctionComponent<Props> = (props) => {

    const {buttonName, classNameProp, emitButtonName} = props

    // /** tailwind bg-xxx-400 class names */
    // const bgClassNames = 
    //     `${color}` + ' ' +
    //     // ↓動的に生成すると適用されない
    //     `active:${hoverColor}` + ' ' +
    //     `sm:hover:${hoverColor}` + ' '

    return (
        <div
            onClick={() => emitButtonName(buttonName)}
            className={"flex mr-4 max-w-fit items-center rounded-full p-4" + " " +
                        "text-3xl font-bold cursor-pointer" + " " + classNameProp}
        >
            {/* < !--かいものメモ発行ボタン--> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg> */}
            <div
                className="text-xl text-white italic whitespace-pre"
            >
                {`#${buttonName}`}
            </div>
        </div >
    )
}