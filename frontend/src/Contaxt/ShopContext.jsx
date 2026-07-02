import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();
const ShopContextProvider = (props) => {

    const currency = '₹'
    const dilivery_fee = 10
    const backendURL = import.meta.env.VITE_BACKED_URL;
    const [products, setProducts] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [showSearch, setShowSearch] = useState(false)
    const [search, setSearch] = useState('');
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = async () => {
        try {
            const response = await axios.get(backendURL + 'api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (err) {
            console.log(err)
        }
    }
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size')
            return;

        }
        const cartData = structuredClone(cartItem)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)

        if (token) {
            const response = await axios.post(backendURL + 'api/cart/add', { itemId, size }, { headers: { token } })
            if (response.data.success) {
                setCartItem(response.data.cartData)
            }
            else {
                toast.error(response.data.message)
            }
        }
    }

    const updateQty = async (id, size, qty) => {
        console.log(id, size, qty)
        const cartData = structuredClone(cartItem)
        cartData[id][size] = qty
        setCartItem(cartData)
        if (token) {
            const response = await axios.post(backendURL + 'api/cart/update', { itemId: id, size, qty }, { headers: { token } })
            // console.log("update", response)
            console.log("FULL RESPONSE", response)
            console.log("DATA ONLY", response.data)
            console.log("CARTDATA", response.data.cartData)

            if (response.data.success) {
                setCartItem(response.data.cartData)
                console.log("cart", cartItem)
            }
            else {
                toast.error(response.data.message)
            }
        }
    }

    const getCartProduct = async (token) => {
        try {

            const response = await axios.post(backendURL + 'api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItem(response.data.cartData)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getCartProduct(localStorage.getItem('token'))
    }, [])
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        return totalCount;
    }
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            const productData = products.find((item) => items == item._id)
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    totalAmount += cartItem[items][item] * productData.price;
                }
            }
        }
        return totalAmount;
    }



    const value = {
        products, currency, dilivery_fee,
        showSearch, setShowSearch, search,
        setSearch, addToCart, cartItem, getCartCount, updateQty,
        getTotalAmount, navigate,
        token, setToken, backendURL, setCartItem
    }

    return (
        <>
            <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
        </>
    )
}
export default ShopContextProvider
