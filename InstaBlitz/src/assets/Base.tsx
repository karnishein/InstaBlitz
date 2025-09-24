import { mockArray } from "../mock/mock"
import { Post } from "./Post"

export const Base :React.FC = () =>{
    return <>
    {mockArray.map((current)=>{return <Post key={current.publisher} publisher={current.publisher} photo={current.photo}></Post>})}
    </>
}

