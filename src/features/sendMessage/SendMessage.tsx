import { FunctionComponent } from "react"
import lineCaptureImage from "../../assets/line_capture.jpg"

export type Props = {
    closeModal: () => void
}

export const SendMessage: FunctionComponent<Props> = ({ closeModal }) => {

    return (
        <>
            <div
                className="overflow-y-scroll fixed top-0 left-0 right-0 flex justify-center mt-48"
            // style="max-height: 70%;"
            >
                {/* <!-- ↑ここにoverflow-y-scroll、 max-height...で少しだけスクロールするようになった --> */}
                <div
                    onClick={() => closeModal()}
                    className="fixed inset-0 bg-gray-400 opacity-50"
                ></div>
                {/* <!-- メールテキスト --> */}
                <div
                    className="w-11/12 sm:w-96 bg-white relative rounded-xl py-5 overflow-y-scroll"
                // style="max-width: 800px;"
                >
                    <div className="flex justify-end items-center">
                        <div className="mx-auto text-2xl font-black">
                            Memo
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        {/* 戻るボタン */}
                        <div
                            onClick={() => closeModal()}
                            className="mr-auto ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                        </div>
                        <div className="mr-4">
                            <svg
                                // @click="onCopy" 
                                className="bi bi-clipboard hover:bg-slate-300 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </div>
                    </div>
                    <textarea
                        className="w-11/12 p-4 border-4 border-stone-400 font-mono bg-[#FFFBEB] focus:outline-none" cols={20} rows={10}
                        v-model="mailText"></textarea>
                    <div className="my-4">
                        <div className="flex justify-center mt-4">
                            <button
                                className="px-4 py-2 bg-green-500 active:bg-green-800 sm:hover:bg-green-800 text-white rounded-lg font-bold text-xs"
                            // @click="sendingLine"
                            >LINEを送信</button>
                        </div>
                        <div>
                            ================
                        </div>
                        <div>
                            <a className="text-xs hover:text-blue-500 hover:underline" href="#"
                            // @click="state.showLinePopup = true"
                            >「LINEを送信」とは？</a>
                        </div>
                    </div>
                </div>
                {/* <!-- 「LINEで送るとは？」ポップアップ」 --> */}
                <div
                    className="fixed top-0 left-0 right-0 flex justify-center mt-48"
                >
                    <div className="fixed inset-0 bg-gray-400 opacity-50"
                    >
                        {/* <!--モーダルウィンドウ--> */}
                    </div>
                    <div
                        className="flex flex-col w-5/6 relative items-center 
                                    rounded-xl  bg-white text-xs">
                        <div className="mx-auto my-4">
                            公式ラインに<br />
                            買い物メッセージが送られるよ。
                        </div>
                        <img
                            className="h-3/5"
                            src={lineCaptureImage}
                            alt="LINEキャプチャー画面" />
                        <div
                            className="mt-4 -mb-20 mx-auto flex justify-center items-center w-12 h-12
                        border rounded-full border-gray-500 text-base bg-white shadow-around cursor-pointer"
                        >X</div>
                    </div>
                </div>
            </div>
        </>
    )
}