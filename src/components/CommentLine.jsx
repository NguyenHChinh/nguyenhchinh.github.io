import { useEffect, useState } from 'react';

function CommentLine() {
    const [line, setLine] = useState("");

    useEffect(() => {
        function updateLine() {
            const width = window.innerWidth;
            const dashCount = Math.max(3, Math.floor((width -100) / 20));
            setLine(`/* ${'-'.repeat(dashCount)} */`);
        }

        updateLine();
        window.addEventListener('resize', updateLine);
        return () => window.removeEventListener('resize', updateLine);
    }, []);

    useEffect(() => {
        console.log(line);
    }, [line]);

    return(
        <div className='comment-line'>{line}</div>
    )
}

export default CommentLine;