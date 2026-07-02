import { useEffect } from "react"
import axios from 'axios'
import { backedURI } from '../../App'
import { toast } from 'react-toastify';
import { useState } from "react";
import { assets } from "../../assets/assets";
import styles from './Order.module.css'
const Order = ({ token }) => {
    const [order, setOrder] = useState([])
    const currency = '₹'

    const getOrders = async () => {
        if (!token) {
            return null
        }
        try {
            const response = await axios.post(backedURI + 'api/order/list', {}, { headers: { token } })
            if (response.data.success) {
                setOrder(response.data.allOrder.reverse())
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }

    }

    const handleStatus = async (e, orderId) => {
        try {
            const response = await axios.post(backedURI + 'api/order/status', { orderId, status: e.target.value }, { headers: { token } })
            if (response.data.success) {
                await getOrders()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getOrders()
    }, [token])


    return (
        <div>
            <div className={styles.order_page}>
                <h1>All Orders</h1>
                <div className={styles.orders}>
                    {
                        order.map((order, index) => (
                            <div key={index} className={styles.single_order}>
                                <img src={assets.parcel_icon} alt="" />
                                <div>
                                    {
                                        order.items.map((item, index) => {
                                            if (index === order.items.length - 1) {
                                                return <p key={index}>{item.name} x {item.qty}<span>{item.size}</span></p>
                                            }
                                            else {
                                                return <p key={index}>{item.name} x {item.qty}<span>{item.size}</span>,</p>
                                            }

                                        })
                                    }
                                    <br />
                                    <div>
                                        <b>{order.address.firstname + " " + order.address.lastname}</b>
                                    </div>
                                    <br />
                                    <div>
                                        {order.address.street},
                                    </div>
                                    <div>
                                        {order.address.city} , {order.address.state} , {order.address.country} , {order.address.zipcode}
                                    </div>
                                    <div>{order.address.phone}</div>
                                </div>
                                <div>
                                    <div>
                                        Items:{order.items.length}
                                    </div>
                                    <br />
                                    <div>Method:{order.paymentMethod}</div>
                                    <div>Payment:{order.payment ? 'Done' : 'Pending'}</div>
                                    <div>{new Date(order.date).toLocaleDateString()}</div>
                                </div>
                                <div>
                                    {currency}{order.amount}
                                </div>
                                <div>
                                    <select onChange={(e) => handleStatus(e, order._id)} value={order.status} className={styles.status}>
                                        <option value="Order Placed">Order Placed</option>
                                        <option value="Packing">Packing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Out for delivery">Out for delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Order
