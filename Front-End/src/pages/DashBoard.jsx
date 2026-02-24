import AddProduct from '../components/AddProduct'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function DashBoard() {
    async function FetchData() {
        let token = window.localStorage.getItem("token")
        let res = await axios.get('http://localhost:8000/admin/dashboard', {
            headers: { token }
        })
        if (!res.data.success) {
            setTimeout(() => {
                window.location.href = "/reglog"
            }, 2000)
            toast.error(res.data.msg)

        }
        if (res.data.success) {
            toast.success(res.data.msg)
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