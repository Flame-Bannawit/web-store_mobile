
import Link from "next/link";

export default function Sidebar () {
    return (
        <div className="bg-blue-400 h-screen w-64 fixed">
            <div className="p-5 bg-blue-700 text-white">
                <h1 className="text-xl">Mobile Store</h1>
                <div className="flex items-center gap-2 mt-3">
                    <i className="fa fa-user"></i>
                    <span className="w-full">Admin_Bannawit</span>
                    <button className="bg-blue-400 rounded-md px-2 py-1">
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="bg-red-400 rounded-md px-2 py-1">
                        <i className="fa fa-sign-out-alt"></i>
                    </button>
                </div>

            </div>
            <div className="p-5 text-white text-xl flex flex-col gap-2">
                <div>
                    <Link href="/backoffice/dashboard" >
                        <i className="fa fa-tachometer-alt mr-3 w-[25px] text-center"></i>
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/buy" >
                        <i className="fa fa-shopping-cart mr-3 w-[25px] text-center"></i>
                        ซื้อสินค้า
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/sell" >
                        <i className="fa fa-dollar-sign mr-3 w-[25px] text-center"></i>
                        ขายสินค้า
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/repair" >
                        <i className="fa fa-wrench mr-3 w-[25px] text-center"></i>
                        รับซ่อม
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/company">
                        <i className="fa fa-building mr-3 w-[25px] text-center"></i>
                        ข้อมูลร้าน
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/user">
                        <i className="fa fa-user mr-3 w-[25px] text-center"></i>
                        ผู้ใช้งาน
                    </Link>
                </div>
            </div>
        </div>
    )
}