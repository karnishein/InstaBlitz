import { Comments } from "./Comments";
import { Likes } from "./Likes";

interface postProps {
    publisher :string,
    photo: string,
    
}

export const Post: React.FC<postProps> = ({publisher, photo}) => {
    
    return <div>
    <h2 className="text-l" >{publisher}</h2>
    <img className="w-1/4 h-1/4 justify-self-center m-5" src={photo}></img>
    <Likes></Likes> 
    <Comments></Comments>

    </div>
}