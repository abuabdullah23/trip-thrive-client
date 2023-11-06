import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Trip Thrive | ${title}`;
    }, [title])
}

export default useTitle;