import { useState } from "react"

export const Comments:React.FC = () =>{
    const [commentContent, setCommentContent] = useState("");
    const [allComments, setAllComments] = useState<string[]>([]);
    const enterComment = () =>{
        setAllComments([...allComments, commentContent]);
        setCommentContent("");
    }
    return <div className="mb-10">
    <input
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Enter a comment"
      />
      <button onClick={enterComment}>enter</button>
      {allComments.map((current)=> <h4>{current}</h4>)}
    </div>
}