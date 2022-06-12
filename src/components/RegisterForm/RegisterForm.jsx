import { useState } from "react";

import { initialState } from "./initialState";

// import Section from "shared/components/Section";

import style from './registerForm.module.css'


const RegisterForm = ({onSubmit}) => {
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

    const {name, email, password} = form;

    return (
            <div className={style.section}>
                <form  className={style.form} onSubmit={handlesubmit}>
                <div>
                    <label className={style.label} htmlFor="">Name:</label>
                        <input
                            id="name"
                            className={style.input}
                            value={name}
                            onChange={handleChange}
                            required
                            name="name"
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div>
                        <label className={style.label} htmlFor="">Email:</label>
                        <input
                            className={style.input}
                            value={email}
                            id="email"
                            onChange={handleChange}
                            required
                            name="email"
                            type="email"
                            placeholder="qwerty@mail.com"
                        />
                    </div>
                    <div>
                        <label className={style.label}htmlFor="">Password:</label>
                        <input
                            className={style.input}
                            value={password}
                            id="password"
                            onChange={handleChange}
                            required
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button className={style.btn} type="submit">Register</button>
                </form>
            </div>
    )
}

export default RegisterForm;