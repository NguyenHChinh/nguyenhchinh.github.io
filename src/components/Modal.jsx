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
        <div className='min-h-[280px] transition-all duration-300 ease-in-out'>
            {section === "about" && (
                <section>
                    <h2 className="text-xl font-bold mb-2">Hi, I'm Chinh!</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        I'm a recent Computer Science graduate from the University of Kansas,
                        passionate about building clean and responsive web applications.
                        I enjoy solving problems with code and learning new technologies.
                        Whether I'm refining UI/UX or deploying backend features, I aim to write
                        code that is both efficient and maintainable.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-3">
                        Outside of tech, I previously competed in FPS games at the collegiate level.
                        These days, I enjoy gaming casually, studying Japanese, picking up new skills,
                        and pursuing bodybuilding as a personal goal.
                    </p>
                </section>
            )}

            {section === "education" && (
                <section>
                <h2 className="text-xl font-bold mb-2">University of Kansas</h2>
                <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-semibold">Bachelor of Science in Computer Science</span><br/>
                    Lawrence, KS | May 2024<br/>
                    <span className="block">GPA: 3.54 | Major GPA: 3.47</span>
                </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-3">
                    <span className="font-semibold">Key coursework:</span> Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks, Compiler Construction, and Computer Architecture.
                </p>
                </section>
            )}

            {section === "contact" && (
                <section>
                    <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
                    <p className="text-sm sm:text-base text-gray-700">
                        I'm currently actively looking for full-time software engineering opportunities. Please feel free to reach out if you have any questions or would like to connect!
                    </p>
                    <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                        <li>Email: <a href="mailto:contact@chinhnguyen.dev" className="text-blue-600 hover:underline">contact@chinhnguyen.dev</a></li>
                        <li>GitHub: <a href="https://github.com/nguyenhchinh" target="_blank" className="text-blue-600 hover:underline">github.com/nguyenhchinh</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/in/nguyenhchinh" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/nguyenhchinh</a></li>
                    </ul>
                </section>
            )}
        </div>
        </div>
    );
}

export default Modal;