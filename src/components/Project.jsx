
function Project({ type, title, description, tags, thumbnail, link, imagelink }) {

    return (
        <div className="w-full mb-8 mx-auto drop-shadow-lg/25 px-2">
            <div className="flex flex-row bg-gray-100 rounded-xl overflow-hidden">

                {/* Text Content */}
                <div className="w-3/5 p-4 md:p-5 xl:p-7 flex flex-col justify-between">
                    {/* Title and Description */}
                    <div>
                        {/* Comment Block (Type) */}
                        <h2 className="comment-block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">// {type}</h2>

                        {/* Title */}
                        <h2 className="font-bold mb-1 md:mb-2 lg:mb-3
                            text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h2>

                        {/* Description */}
                        <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700">{description}</p>

                        {/* Source Link */}
                        {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block text-blue-600 hover:underline text-[10px] md:text-xs lg:text-sm"
                        >
                            [Github]
                        </a>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-blue-200 outline-1 outline-solid outline-blue-700 text-blue-700 text-[9px] sm:text-xs md:text-sm xl:text-base font-medium px-1 sm:px-2 py-1 rounded-md"
                            >
                            {tag}
                        </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <a
                    href={imagelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-2/5 overflow-hidden group"
                >
                    <img
                        src={thumbnail}
                        alt={`${title} Thumbnail`}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                    
                </a>
            </div>
        </div>
        );
}

export default Project;