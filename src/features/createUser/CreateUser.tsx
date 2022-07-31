import { Link } from 'react-router-dom';
import styles from './CreateUser.module.css';

export function CreateUser() {
    return (
        <div
            className="flex flex-col w-80 sm:min-w-400 mx-auto bg-gray-200 rounded-2xl shadow-around text-inherit">
            <div className='my-4 text-xl font-black'>
                ユーザを新規作成!
            </div>
            <div
                className="flex flex-col sm:w-4/5 mx-0 sm:mx-auto mb-4 px-4 py-0 bg-gray-100">
                <div className="flex flex-col h-24 mb-4 p-2 items-center">
                    <div className="sm:self-start text-2xl">Mail</div>
                    <input type="text" id="user" v-model="state.signupEmail" />
                    <div v-for="error in v$.signupEmail.$errors">
                        <div className="text-xs text-red-500">
                            {/* {{ error.$message }} */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-24 mb-4 p-2 items-center">
                    <div className="sm:self-start text-2xl">Password</div>
                    <input type="password" id="mail" v-model="state.signupPassword" />
                    <div v-for="error in v$.signupPassword.$errors">
                        <div className="text-xs text-red-500"
                            v-if="error.$validator === 'REGEX_PASSWORD'">
                            半角英数字記号で6文字以上で入力してください
                        </div>
                        {/* <div className="text-xs text-red-500"
                            v-if="error.$validator === 'required'">
                            パスワードがないんですけど
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col h-24 mb-4 p-2 items-center">
                    <div className="sm:self-start text-2xl">Password(確認)</div>
                    <input type="password" id="mail" v-model="state.signupPasswordConfirm" />
                    <div v-for="error in v$.signupPasswordConfirm.$errors">
                        <div className="text-xs text-red-500"
                            v-if="error.$validator === 'sameAsPassword'">
                            同じパスワードを入力してください
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-4/5 h-8 my-4 mx-auto justify-center">
                <button v-if="isAllValid" className={styles.btn} >SignUp</button>
                {/* <button v-if="!isAllValid" className="btn btn-disable" disabled>SignUp</button> */}
            </div>
            <div className="my-4 mx-auto justify-center">
                =========
            </div>
            <div className="mb-4 mx-auto justify-center text-blue-500">
                <Link to={'/login'}>
                    <a href="#">
                        ログイン画面に戻る
                    </a>
                </Link>
            </div>
        </div>
    )
}