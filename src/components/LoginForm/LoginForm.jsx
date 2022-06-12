import { useState } from "react";

import { initialState } from "./initialState";

import style from './loginForm.module.css'

const LoginForm = ({onSubmit}) => {
    const [form, setForm] = useState({...initialState});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        onSubmit({...form});
        setForm({...initialState});
    }

    const {email, password} = form;

    return (
            <div className={style.section}>
                <form className={style.form} onSubmit={handlesubmit}>
                    <div>
                        <label className={style.label} htmlFor="">Email:</label>
                        <input className={style.input} value={email} onChange={handleChange} required name="email" type="email" placeholder="qwerty@mail.com" />
                    </div>
                    <div>
                        <label className={style.label} htmlFor="">Password:</label>
                        <input className={style.input} value={password} onChange={handleChange} required name="password" type="password" placeholder="Password" />
                    </div>
                    <button className={style.btn}type="submit">Login</button>
                </form>
            </div>
    )
}

export default LoginForm;