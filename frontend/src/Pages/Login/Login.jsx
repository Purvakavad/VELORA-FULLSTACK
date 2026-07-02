import { useContext, useEffect, useState } from "react"
import styles from './login.module.css'
import axios from 'axios'
import { ShopContext } from "../../Contaxt/ShopContext"
import { toast } from "react-toastify"
function Login() {
    const [currentState, setCurrentState] = useState('Login')
    const { navigate, backendURL, setToken, token } = useContext(ShopContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(backendURL + 'api/user/register', { name, email, password })
                console.log("hello")
                console.log(response)
                if (response.data.success) {
                    setToken(response.data.token)
                    console.log(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                const response = await axios.post(backendURL + 'api/user/login', { email, password })

                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)

                } else {
                    toast.error(response.data.message)
                }

            }

        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])
    console.log(token)
    return (
        <div>
            <div className={styles.login_page}>
                <div className={styles.login_form}>
                    <div className={styles.title}>
                        <h2>{currentState}</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit} >
                        {currentState === 'Login' ? '' : <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="User Name" required />}
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                        <div className={styles.password}>
                            <p> Forgot Password?</p>

                        </div>
                        <div className={styles.formSubmitBtn}>
                            <button>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
                        </div>
                        <div className={styles.user}>
                            {
                                currentState === 'Login'
                                    ? <a onClick={() => setCurrentState('Sign Up')}> Don't have an account?</a>
                                    : <a onClick={() => setCurrentState('Login')}>Already have an account? <b>Login</b></a>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
