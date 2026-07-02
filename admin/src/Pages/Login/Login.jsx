import { useState } from 'react'
import styles from './Login.module.css'
import { backedURI } from '../../App'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('Admin123')
    const handleSubmit = async (e,) => {
        try {
            e.preventDefault();
            const response = await axios.post(backedURI + 'api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(email, "pass", password)
    return (
        <div className={styles.loginPage}>
            <div className={styles.login}>
                <h2>Admin Panel</h2>
                <form onSubmit={(e) => handleSubmit(e)} className='loginform'>
                    <div className={styles.email}>
                        <label htmlFor="">Email Address</label> <br />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" required />

                    </div>
                    <div className={styles.password}>
                        <label htmlFor="">Password</label><br />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                    </div>
                    <button>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
