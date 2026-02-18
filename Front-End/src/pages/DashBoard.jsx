import AddProduct from '../components/AddProduct'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function DashBoard() {
    async function FetchData() {
        let res = await axios.get('http://localhost:8000/admin/dashboard', { headers: { token: localStorage.getItem("token") } })
        if (!res.data.success) {
            window.location.href = "/reglog"
            toast.error(res.data.msg)
        }
    }
    useEffect(() => {
        FetchData()
    }, [])
    return (
        <div>
            <AddProduct />
        </div>
    )
}

export default DashBoard