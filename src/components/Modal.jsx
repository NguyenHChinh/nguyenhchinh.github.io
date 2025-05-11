import { useState, useEffect } from 'react';

function Modal({ defaultSection = "about", onClose }) {
    const [section, setSection] = useState("about");


    const sections = ["about", "education", "interests"];

    return (
        <div className="bg-white rounded-l-xl text-black w-full max-w-2xl p-6 relative h-full">

        {/* Modal Tabs */}
        <div className="flex-wrap space-x-6 border-b border-gray-200 pb-2 sm:pb-4 mb-2 sm:mb-4">
            {sections.map((sec) => (
                <button
                    key={sec}
                    onClick={() => setSection(sec)}
                    className={`text-xs sm:text-sm md:text-base font-medium capitalize ${
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
                    <h2 className="text-base sm:text-xl font-bold mb-2">A little about me..</h2>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        I'm a recent Computer Science graduate from the University of Kansas
                        with a passion for building functional software. I enjoy creating
                        web applications and developing tools that enhance the games I play.
                        I'm driven by problem-solving and continuously learning new technologies.
                        From refining UI/UX to implementing backend features, I focus on writing clean,
                        efficient, and maintainable code.
                    </p>
                </section>
            )}

            {section === "education" && (
                <section>
                <h2 className="text-base sm:text-xl md:text-xl font-bold mb-2">University of Kansas</h2>
                <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-semibold">Bachelor of Science in Computer Science</span><br/>
                    <span className='text-[11px] sm:text-sm md:text-base'>Lawrence, KS | May 2024</span><br/>
                    <span className="text-[11px] sm:text-sm md:text-base block">GPA: 3.54 | Major GPA: 3.47</span>
                </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-3">
                    <span className="font-semibold">Key coursework:</span><br/>
                    <span className='text-[11px] sm:text-sm md:text-base'>Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks, Compiler Construction, and Computer Architecture.</span>
                </p>
                </section>
            )}

            {section === "interests" && (
                <section>
                    <h2 className="text-base sm:text-xl font-bold mb-2">Outside of tech..</h2>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-700 mt-3">
                        I previously competed in FPS games at the collegiate level.
                        These days, I enjoy gaming casually, studying Japanese, picking up new skills,
                        and pursuing bodybuilding as a personal goal.
                    </p>
                </section>
            )}

        </div>
        </div>
    );
}

export default Modal;