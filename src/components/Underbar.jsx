import '../index.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineBell } from 'react-icons/ai'
import React from 'react'

export default function Underbar() {
    return (
        <div className=' bg-white h-[40px] w-full  gap-3 place-items-center  whitespace-nowrap '>

            <ul className='flex h-[40px] w-full md:w-fit  '>
                <li className="pl-40"> Yazilim Geliştirme</li>
                <li className=''> İşletme</li>
                <li className=' '> Finans ve Muhasebe</li>
                <li className=''> Bt ve Yazılım</li>
                <li className=''> Ofiste Verimlilik</li>
                <li className=' '> Kisisel Gelişim</li>
                <li className=''> Tasarım</li>
                <li className=''> Pazarlama</li>
                <li className=''> Sağlik ve Fitness</li>
                <li className='pr-20'> Müzik</li>
            </ul>
            <div className=' justify-between  px-0 '>
                <img className='pl-20 pr-16 pt-0 h-full w-full' width="1340" height="400" alt="" src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/34c63aef-8d1f-483e-b0ea-0ead94879e56.jpg" />
                <div className="container h-[180px] w-[400px] "><h1 className='font-serif font-bold text-left tect-base'>BT sertifikanızı almak  </h1>
                    <h1 className='font-serif font-bold text-left'>için hazırlanın</h1>
                    <p className='text-base'><a className='text-blue-600 ' href=''>BT alanındaki geleceğinizi keşfedin.</a> AWS</p>
                    <p className='text-base'>sertifikasyonu, CompTIA A+ sertifikasyonu ve daha</p>
                    <p className='text-base'> için öğrenmeye başlayın</p>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>

    )
}