
export default function Sidebar () {
    return (
        <div className="bg-blue-400 h-screen w-64">
            <div className="p-5 bg-blue-700 text-white text-xl">
                <h1>Mobile Store</h1>
            </div>
            <div className="p-5 text-white text-xl flex flex-col gap-2">
                <div>Dashboard</div>
                <div>Company</div>
                <div>User</div>
            </div>
        </div>
    )
}