import Modal from "react-modal";
import { useState } from "react";

import { IoClose } from "react-icons/io5";


Modal.setAppElement("#root"); // Required for accessibility

const EnquireNowButton = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setModalIsOpen(true)}
                className="fixed right-0 top-1/2 z-40 transform -translate-y-1/2 bg-[#1e5593] text-white px-3.5 sm:px-4 text-sm sm:text-base py-3 rounded shadow-lg cursor-pointer"
            >
                <div className="flex flex-col -space-y-0.5">
                    <p>E</p>
                    <p>N</p>
                    <p>Q</p>
                    <p>U</p>
                    <p>I</p>
                    <p>R</p>
                    <p>E</p>
                </div>

            </button>

            {/* MODAL */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="bg-white px-6 py-6 rounded shadow-lg max-w-xl w-full mx-auto relative"
                overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center p-4"
            >
                <button onClick={() => setModalIsOpen(false)} className="absolute top-3 right-3 cursor-pointer"><IoClose className="h-7 w-7 text-gray-500 flex-shrink-0" /></button>
                <form>
                    <h1 className="text-2xl helvectica">Enquiry Form</h1>
                    <hr className="my-4 text-gray-300" />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="w-full bg-gray-100 p-4 rounded mb-2.5"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
                    />
                    <input
                        type="number"
                        placeholder="Contact No."
                        required
                        className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="bg-[#202425] text-white helvectica px-6 py-3 rounded tracking-wide"
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default EnquireNowButton;
