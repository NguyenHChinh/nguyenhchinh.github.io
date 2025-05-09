
function Project({ title, description, tags, thumbnail }) {

    return (
        <div className="w-4/5 mx-auto flex flex-row bg-gray-100 rounded-xl overflow-hidden drop-shadow-lg/25">

            {/* Text Content */}
            <div className="w-3/5 p-6 flex flex-col justify-between">
                {/* Title and Description */}
                <div>
                    <h2 className="comment-block text-xs lg:text-sm">// Full-stack Project</h2>
                    <h2 className="font-bold mb-4
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{title}</h2>
                    <p className="text-xs md:text-sm text-gray-700">{description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-blue-200 outline-1 outline-solid outline-blue-700 text-blue-700 text-xs font-medium px-2 py-1 rounded-md"
                        >
                        {tag}
                    </div>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="w-2/5">
                <img
                    src={thumbnail}
                    alt={`${title} Thumbnail`}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        );
}

export default Project;