"use client";
import { Input, Tooltip } from 'antd';
import Image from 'next/image';
import React from 'react';
import "@/style/page.scss"
import icon from '@/../public/icons/index';

const MenuPage = () => {
    const srcIconDelete = icon['iconDelete']
    const srcIconEdit = icon['iconEdit']
    const srcIconView = icon['iconView']

    return (
        <>
            <div className='px-8 py-6'>
                <div className='text-[28px] text-blue-primary font-semibold'>Quản lý món ăn</div>
                <div className='app-screen'>
                    <div className='flex justify-between h-10 my-3'>
                        <div><Input placeholder="Basic usage" /></div>
                        <div><button>Thêm mới</button></div>
                    </div>
                    <div className='app-table-outline'>
                        <table className="app-table">
                            <thead>
                                <tr>
                                    <th><span>No.</span></th>
                                    <th className="scroll-header" style={{ minWidth: "200px" }}>Tên món ăn</th>
                                    <th className="scroll-header" style={{ minWidth: "200px" }}>Miêu tả</th>
                                    <th className="scroll-header" style={{ width: "120px" }}>Ảnh</th>
                                    <th className="scroll-header" style={{ minWidth: "200px" }}>Loại món</th>
                                    <th className="scroll-header" style={{ minWidth: "200px" }}>Trạng thái</th>
                                    <th style={{ width: "170px" }}><span className="text-left">Hành động</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td className="bg-no-scroll" style={{ minWidth: '60px' }}>{(index + 1) + (currentPage - 1) * pageSize}</td> */}
                                    <td><div className="text-center">1</div></td>
                                    <td><div className="text-center">Bánh rán</div></td>
                                    <td><div className="text-center">Món ăn số 1 Việt Nam</div></td>
                                    <td><div className="text-center"><Image src="https://mquickb.s3.amazonaws.com/d4d7a80b-4c5f-41ae-a36a-71af571e88ea.jpg" alt="" className='mt-5' width={120} height={120} /></div></td>
                                    <td><div className="text-center">Món tráng miệng</div></td>
                                    <td><div className="text-center">Hiển thị</div></td>
                                    <td className="bg-no-scroll" style={{ width: "170px" }}>
                                        <div className="flex justify-between">
                                            <Tooltip title={"detail"}>
                                                <button><Image src={srcIconView} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"edit"}>
                                                <button><Image src={srcIconEdit} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"delete"}>
                                                <button><Image src={srcIconDelete} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="bg-no-scroll" style={{ minWidth: '60px' }}>{(index + 1) + (currentPage - 1) * pageSize}</td> */}
                                    <td><div className="text-center">1</div></td>
                                    <td><div className="text-center">Bánh rán</div></td>
                                    <td><div className="text-center">Món ăn số 1 Việt Nam</div></td>
                                    <td><div className="text-center"><Image src="https://mquickb.s3.amazonaws.com/d4d7a80b-4c5f-41ae-a36a-71af571e88ea.jpg" alt="" className='mt-5' width={120} height={120} /></div></td>
                                    <td><div className="text-center">Món tráng miệng</div></td>
                                    <td><div className="text-center">Hiển thị</div></td>
                                    <td className="bg-no-scroll" style={{ width: "150px" }}>
                                        <div className="flex justify-between">
                                            <Tooltip title={"detail"}>
                                                <button><Image src={srcIconView} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"edit"}>
                                                <button><Image src={srcIconEdit} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"delete"}>
                                                <button><Image src={srcIconDelete} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="bg-no-scroll" style={{ minWidth: '60px' }}>{(index + 1) + (currentPage - 1) * pageSize}</td> */}
                                    <td><div className="text-center">1</div></td>
                                    <td><div className="text-center">Bánh rán</div></td>
                                    <td><div className="text-center">Món ăn số 1 Việt Nam</div></td>
                                    <td><div className="text-center"><Image src="https://mquickb.s3.amazonaws.com/d4d7a80b-4c5f-41ae-a36a-71af571e88ea.jpg" alt="" className='mt-5' width={120} height={120} /></div></td>
                                    <td><div className="text-center">Món tráng miệng</div></td>
                                    <td><div className="text-center">Hiển thị</div></td>
                                    <td className="bg-no-scroll" style={{ width: "150px" }}>
                                        <div className="flex justify-between">
                                            <Tooltip title={"detail"}>
                                                <button><Image src={srcIconView} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"edit"}>
                                                <button><Image src={srcIconEdit} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"delete"}>
                                                <button><Image src={srcIconDelete} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="bg-no-scroll" style={{ minWidth: '60px' }}>{(index + 1) + (currentPage - 1) * pageSize}</td> */}
                                    <td><div className="text-center">1</div></td>
                                    <td><div className="text-center">Bánh rán</div></td>
                                    <td><div className="text-center">Món ăn số 1 Việt Nam</div></td>
                                    <td><div className="text-center"><Image src="https://mquickb.s3.amazonaws.com/d4d7a80b-4c5f-41ae-a36a-71af571e88ea.jpg" alt="" className='mt-5' width={120} height={120} /></div></td>
                                    <td><div className="text-center">Món tráng miệng</div></td>
                                    <td><div className="text-center">Hiển thị</div></td>
                                    <td className="bg-no-scroll" style={{ width: "170px" }}>
                                        <div className="flex justify-between">
                                            <Tooltip title={"detail"}>
                                                <button><Image src={srcIconView} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"edit"}>
                                                <button><Image src={srcIconEdit} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"delete"}>
                                                <button><Image src={srcIconDelete} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="bg-no-scroll" style={{ minWidth: '60px' }}>{(index + 1) + (currentPage - 1) * pageSize}</td> */}
                                    <td><div className="text-center">1</div></td>
                                    <td><div className="text-center">Bánh rán</div></td>
                                    <td><div className="text-center">Món ăn số 1 Việt Nam</div></td>
                                    <td><div className="text-center"><Image src="https://mquickb.s3.amazonaws.com/d4d7a80b-4c5f-41ae-a36a-71af571e88ea.jpg" alt="" className='mt-5' width={120} height={120} /></div></td>
                                    <td><div className="text-center">Món tráng miệng</div></td>
                                    <td><div className="text-center">Hiển thị</div></td>
                                    <td className="bg-no-scroll" style={{ width: "170px" }}>
                                        <div className="flex justify-between">
                                            <Tooltip title={"detail"}>
                                                <button><Image src={srcIconView} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"edit"}>
                                                <button><Image src={srcIconEdit} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                            <Tooltip title={"delete"}>
                                                <button><Image src={srcIconDelete} alt="" className='mt-5' width={40} height={40} /></button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>

    );
};

export default MenuPage;
