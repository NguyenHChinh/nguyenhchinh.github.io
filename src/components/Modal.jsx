import { useState, useEffect } from 'react';

function Modal({ defaultSection = "about", onClose }) {
    const [section, setSection] = useState(defaultSection);

    useEffect(() => {
        setSection(defaultSection);
    }, [defaultSection]);

    const sections = ["about", "education", "contact"];

    return (
        <div className="bg-white rounded-xl shadow-lg text-black w-full max-w-2xl mx-auto p-6 relative">

        {/* Close Button */}
        <button
            onClick={onClose}
            className="absolute top-5 right-5 text-sm font-medium text-gray-600 hover:text-red-500 border border-gray-300 px-3 py-1 rounded">
            Close
        </button>

        {/* Modal Tabs */}
        <div className="flex space-x-6 border-b border-gray-200 pb-4 mb-4">
            {sections.map((sec) => (
                <button
                    key={sec}
                    onClick={() => setSection(sec)}
                    className={`text-base font-medium capitalize ${
                        section === sec ? "text-black font-semibold border-b-2 border-black" : "text-gray-500 hover:text-black"
                    }`}>

                    {sec}
                </button>
            ))}
        </div>

        {/* Modal Content */}
        <div>
            {section === "about" && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">About</h2>
                    <p className="text-gray-700">About section.</p>
                </div>
            )}

            {section === "education" && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Education</h2>
                    <p className="text-gray-700">Education section.</p>
                </div>
            )}

            {section === "contact" && (
                <div>
                    <h2 className="text-2xl font-bold mb-2">Contact</h2>
                    <p className="text-gray-700">Contact section.</p>
                </div>
            )}
        </div>
        </div>
    );
}

export default Modal;