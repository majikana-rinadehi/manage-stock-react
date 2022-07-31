import { hover } from '@testing-library/user-event/dist/types/convenience';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
import styles from './Login.module.css';

export function Login() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const navigate = useNavigate()

  return (
    <>
    <div 
        className="flex flex-col w-80 sm:min-w-400 mx-auto bg-gray-200 rounded-2xl shadow-around text-inherit">
        <div
            id="form-wrapper"
            className="flex flex-col sm:w-4/5 mx-0 sm:mx-auto my-4 px-4 py-0 bg-gray-100">
            <div className="flex flex-col h-24 mb-4 p-2 items-center">
                <div className="sm:self-start text-2xl">Mail</div>
                <input type="text" id="email-input" v-model="state.mail"/>
                <div v-for="error of v$.mail.$errors">
                    <div v-show="error.$validator === 'email'" className="text-xs text-red-600">
                        メールアドレスの形式が変!
                    </div>
                    {/* <div v-show="error.$validator === 'required'" className="text-xs text-red-600">
                        メールアドレスがないんですけど
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col h-24 items-center">
                <div className="sm:self-start text-2xl">Password</div>
                <input type="password" id="password-input" v-model="state.password"/>
                <div v-for="error of v$.password.$errors">
                    <div v-show="error.$validator === 'required'" className="text-xs text-red-600">
                        パスワードがないんですけど
                    </div>
                </div>
            </div>
        </div>
        <div className="flex w-4/5 h-8 my-4 mx-auto justify-center">
            {/* <transition name="fade" mode="out-in"> */}
                <button 
                  onClick={() => navigate('/home')}
                  v-if="isAllValid" 
                  className={styles.btn}>
                    Login
                  </button>
                {/* <button v-else className="btn btn-disable" disabled>Login</button> */}
            {/* </transition> */}
        </div >
        <div className="my-4 mx-auto justify-center">
            ===または===
        </div>
        <div className="mb-4 mx-auto justify-center text-blue-500">
          <Link to={'/createUser'}>
            <a href="#">
                ユーザーを新規作成
            </a>
          </Link>
        </div >
    </div >
    </>
  );
}
