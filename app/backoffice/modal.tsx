'use client'

interface ModalProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ title, children, isOpen, onClose}: ModalProps) {
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg w-1/2">
                    <h2 className="text-2xl font-bold mb-4 pl-4 py-3
                         bg-sky-600 text-white rounded-t-md">
                        {title}
                        <button className="float-right bg-red-400 text-white 
                            mr-4 rounded-full w-8 h-8" 
                                onClick={onClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </h2>
                    <div className="mt-4 p-2">
                        {children}
                    </div>
                </div>
            </div>
        )
    )
}