"use client"

import { useRef, useState } from 'react'
import styles from './login.module.css'
import axios from 'axios';
import Header from '../Components/Header';
import Image from 'next/image';

export default function login(){

    const openEye = 'red-eye.png'
    const closedEye = 'hide.png'

    const inputRef = useRef(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordView, setPasswordView] = useState(closedEye);
    const [passwordSee, setPasswordSee] = useState('password');

    const handleLoginSubmit = () => {

        axios.post('http://colabeduc.org/api/login', {
            username : username,
            password : password
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        });

    }

    const handlePasswordView = () => {

        inputRef.current.focus();

        if(passwordView === closedEye){

            setPasswordView(openEye);
            setPasswordSee('input')
            return;

        }

        setPasswordView(closedEye);
        setPasswordSee('password');

    }

    return(
        <main className={styles.main}>

            {/* Header */}

            <Header/>

            <section className={styles.loginSection}>

                <div className={styles.loginContainer}>


                    <div className={styles.infoContainer}>

                        <h1
                        className={styles.loginHeader}
                        >Login</h1>

                        {/* Input Container */}
                        <div className={styles.inputContainer}>

                            <input
                            type='input'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="   "
                            />

                            <span>
                                Nome de usuário
                            </span>

                            <label>
                                Nome de usuário
                            </label>

                        </div>

                        <div className={styles.inputContainer}>

                            <input
                            ref={inputRef}
                            type={passwordSee}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="   "
                            />

                            <Image
                            src={`/${passwordView}`}
                            width={24}
                            height={24}
                            alt="Password view"
                            className={styles.passwordView}
                            onClick={handlePasswordView}
                            />

                            <span>
                                Senha
                            </span>

                            <label>
                                Senha
                            </label>

                        </div>

                        <span
                        className={styles.forgotPassword}
                        >
                            Esqueceu sua senha?
                        </span>

                        <button
                        className={styles.loginButton}
                        onClick={handleLoginSubmit}
                        >
                            <Image
                            src={'/arrow.png'}
                            height={24}
                            width={24}
                            alt='login arrow'
                            />
                        </button>

                    </div>

                </div>

            </section>

        </main>
    )

}