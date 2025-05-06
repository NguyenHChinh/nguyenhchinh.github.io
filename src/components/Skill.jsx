import { useState, useEffect } from 'react';

function Skill({ title, description, type, icon }) {

    const [backgroundColor, setBackgroundColor] = useState("bg-gradient-to-tr from-blue-500 to-blue-700");

    if (!title || !description || !type || !icon) {
        console.error("Skill component requires title, key, and icon props.");
        return null;
    }

    useEffect(() => {
        switch (type) {
            case 'languages':
                setBackgroundColor("bg-gradient-to-tr from-red-400 to-red-700");
                break;
            case 'frameworks':
                setBackgroundColor("bg-gradient-to-tr from-blue-500 to-blue-700");
                break;
            case 'backend':
                setBackgroundColor("bg-gradient-to-tr from-green-600 to-green-800");
                break;
            case 'database':
                setBackgroundColor("bg-gradient-to-tr from-yellow-500 to-yellow-700");
                break;
            default:
                setBackgroundColor("bg-gradient-to-tr from-gray-500 to-gray-700");
        }
        console.log(type);
    }, [type]);

    return(
        <div className={`skill w-full h-20 ${backgroundColor} rounded-2xl flex items-center`}>
            <div className='icon w-16 h-16 bg-gradient-to-bl from-gray-400 to-gray-600 rounded-xl items-center ml-2'>
                
            </div>
            <div className='skill-text ml-2 text-white'>
                <div className='text-xl font-bold'>
                    {title}
                </div>
                <div className='text-sm font-light'>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Skill;