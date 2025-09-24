import { Comments } from "./Comments";
import { Likes } from "./Likes";

interface postProps {
    publisher :string,
    photo: string,
    
}

export const Post: React.FC<postProps> = ({publisher, photo}) => {
    
    return <>
    <h2 className="text-l" >{publisher}</h2>
    <img className="w-1/4 h-1/4 justify-self-center" src={photo}></img>
    <Likes></Likes> 
    <Comments></Comments>
<br></br><br></br>
    </>
}