import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Cart from './Pages/cart/Cart'
import Product from './Pages/product/Product'
import Login from './Pages/Login/Login'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Orders from './Pages/order/Orders'
import Collection from './Pages/collection/Collection'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import Search from './Components/search/Search'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify'


function App() {
    return (
        <>
            <ToastContainer />
            <Navbar />
            <Search />
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/collection" element={<Collection />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/product/:productId" element={<Product />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/place-order" element={<PlaceOrder />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/verify" element={<Verify />}></Route>

            </Routes>
            <Footer />
        </>
    )
}

export default App
