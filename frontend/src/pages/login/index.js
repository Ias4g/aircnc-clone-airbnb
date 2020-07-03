import React, { useState } from 'react'
import api from '../../services/api'

export default function Login() {
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        // console.log(email)

        const response = await api.post('/sessions', { email })
        const { _id } = response.data
        // console.log(_id)
        localStorage.setItem('user', _id)
    }

    return (
        <>
            <p>Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL*</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}