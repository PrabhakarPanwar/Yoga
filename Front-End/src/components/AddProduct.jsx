import React, { useState } from 'react'
import { assets } from '../assets/product'

function    AddProduct() {

    //Product Upload Image

    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const [img4, setImg4] = useState(false)

    //Product Name

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    //Product Category

    const [cat, setCat] = useState("")
    const [subCat, setSubCat] = useState("")

    const [price, setPrice] = useState("")

    const [sizes, setSizes] = useState([])

    const toggleSize = (size) => {
        setSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };



    return (
        <main className='flex bg-gray-100 border-gray-500 border-t-2'>
            <section className='w-[15%]'>
                <p className='norder-gray-500 border-y-2 p-2'>Add Items</p>
                <p className='norder-gray-500 border-y-2 p-2'>List Items</p>
                <p className='norder-gray-500 border-y-2 p-2'>Order Items</p>
            </section>
            <section className='w-[70%] border-gray-500 border-l-2 pl-10'>
                <form className='py-3'>
                    <p>Upload Images</p>
                    <div className="flex gap-3">
                        <label htmlFor="img1 ">
                            <img className='w-[250px] h-[150px] cursor-pointer' src={`${img1 ? URL.createObjectURL(img1) : assets.uploadImg}`} alt="" />
                            <input className='hidden' id='img1' type="file" onChange={(e) => setImg1(e.target.files[0])} />
                        </label>
                        <label htmlFor="img2">
                            <img className='w-[250px] h-[150px] cursor-pointer' src={`${img2 ? URL.createObjectURL(img2) : assets.uploadImg}`} alt="" />
                            <input className='hidden' id='img2' type="file" onChange={(e) => setImg2(e.target.files[0])} />
                        </label>
                        <label htmlFor="img3">
                            <img className='w-[250px] h-[150px] cursor-pointer' src={`${img3 ? URL.createObjectURL(img3) : assets.uploadImg}`} alt="" />
                            <input className='hidden' id='img3' type="file" onChange={(e) => setImg3(e.target.files[0])} />
                        </label>
                        <label htmlFor="img4">
                            <img className='w-[250px] h-[150px] cursor-pointer' src={`${img4 ? URL.createObjectURL(img4) : assets.uploadImg}`} alt="" />
                            <input className='hidden' id='img4' type="file" onChange={(e) => setImg4(e.target.files[0])} />
                        </label>
                    </div>
                    <p>Product Name</p>
                    <input className='p-2 w-[60%] border-gray-300 border-2' type="text" onChange={(i) => setName(i.target.value)} placeholder='Type Here' />
                    <p>Product Description</p>
                    <textarea onChange={(i) => setDesc(i.target.value)} className='p-2 w-[60%] border-gray-300 border-2' name="" id="" placeholder='Type Here' cols="50"></textarea>
                    <div className='flex gap-5'>
                        <section>
                            <p>Product Category</p>
                            <select className='p-2 border-gray-300 border-2' name="" id="" onChange={(i) => setCat(i.target.value)} >
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kid">Kid</option>
                            </select>
                        </section>
                        <section>
                            <p>Product Sub-Category</p>
                            <select className='p-2 border-gray-300 border-2' name="" id="" onChange={(i) => setSubCat(i.target.value)} >
                                <option value="men">Topwear</option>
                                <option value="women">Bottomwear</option>
                                <option value="kid">Upperware</option>
                            </select>
                        </section>
                        <section>
                            <p>Price</p>
                            <input className='w-[50%] border-gray-300 border-2 p-2' type="text" name="" id="" onChange={(i) => setPrice(i.target.value)} />
                        </section>
                    </div>
                    <p>Product Sizes</p>
                    <div className="flex gap-3 pb-5">
                        {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSize(size)}
                                className={`h-12 w-12 flex items-center justify-center cursor-pointer 
            ${sizes.includes(size) ? "bg-blue-400" : "bg-slate-200"}`}
                            >
                                <p>{size}</p>
                            </div>
                        ))}
                    </div>

                    <button className='px-10 py-3 bg-black text-white' type="submit">Add</button>
                </form>
                <form></form>
                <form></form>
            </section>
        </main >
    )
}

export default AddProduct