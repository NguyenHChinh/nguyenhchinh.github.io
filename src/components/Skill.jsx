import { useState, useEffect } from 'react';
import missingIcon from '../icons/missing.png';

function Skill({ title, description, type, icon, iconSize="w-3/4 h-3/4" }) {

    const [backgroundColor, setBackgroundColor] = useState("bg-gradient-to-tr from-blue-500 to-blue-700");

    if (!title || !description || !type) {
        console.error("Skill component requires title, key, and icon props.");
        return null;
    }

    if (!icon) {
        console.warn(`Icon for ${title} is missing. Using default icon.`);
        icon = missingIcon;
    }

    useEffect(() => {
        switch (type) {
            case 'languages':
                setBackgroundColor("bg-gradient-to-tr from-blue-400 to-blue-700");
                break;
            case 'frameworks':
                setBackgroundColor("bg-gradient-to-tr from-purple-500 to-purple-800");
                break;
            case 'backend':
                setBackgroundColor("bg-gradient-to-tr from-red-500 to-red-900");
                break;
            case 'database':
                setBackgroundColor("bg-gradient-to-tr from-green-600 to-green-800");
                break;
            case 'tools':
                setBackgroundColor("bg-gradient-to-tr from-teal-600 to-teal-800");
                break;
            default:
                setBackgroundColor("bg-gradient-to-tr from-gray-500 to-gray-700");
        }
    }, [type]);

    return(
        <div className={`skill
            h-12
            md:h-14
            lg:h-16
            2xl:h-20
            drop-shadow-lg/25 w-full ${backgroundColor} rounded-xl md:rounded-2xl flex items-center`}>

            <div className='icon
                w-9.5 h-9.5 ml-1.25
                md:w-11 md:h-11 md:ml-1.5
                lg:w-13 lg:h-13 lg:ml-1.5
                2xl:w-16 2xl:h-16 2xl:ml-2
                bg-radial from-gray-600 to-gray-800
                rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-xl
                items-center overflow-hidden
                flex justify-center'>
                <img src={icon} alt={`${title} icon`} className={`${iconSize} object-contain`}/>
            </div>
            <div className='skill-text ml-2 2xl:ml-3 text-white'>
                <div className='skill-title font-bold
                    text-xs
                    md:text-base
                    lg:text-lg
                    2xl:text-xl'>
                    {title}
                </div>
                <div className='skill-description font-light
                    text-xs
                    md:text-sm
                    2xl:text-base'>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Skill;