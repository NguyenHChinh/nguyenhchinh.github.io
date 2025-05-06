
function Skill() {

    return(
        <div className='skill w-75 h-20 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-2xl flex items-center my-2'>
            <div className='icon w-16 h-16 bg-gradient-to-bl from-green-700 to-green-900 rounded-xl items-center ml-2'>
                
            </div>
            <div className='skill-text ml-2 text-white'>
                <div className='text-xl font-bold'>
                    Skill Name
                </div>
                <div className='text-sm font-light'>
                    Description
                </div>
            </div>
        </div>
    );
}

export default Skill;