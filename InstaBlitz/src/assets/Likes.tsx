import { useState } from "react"

export const Likes:React.FC = () =>{
    const [likeNum, setLikeNum] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const likePress = () => {
        setIsLiked(!isLiked);
        setLikeNum(likeNum + (isLiked?-1:1));
    }

    return <>
    <button className="bg-red-600" onClick={likePress}>
    {likeNum}
    </button>
    </>
}