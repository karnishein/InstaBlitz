import './App.css'
import { Post } from './assets/Post'
import { mockArray } from './mock/mock'

function App() {

  return (<>
    <h1 className='m-10'>INSTABLITZ</h1>
    {mockArray.map((current)=><Post key={current.publisher} publisher={current.publisher} photo={current.photo}></Post>)}
    </>
  )
}

export default App
