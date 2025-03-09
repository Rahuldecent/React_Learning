import "./app.css"
import ImageSlider from "./components/image-slider/ImageSlider"
import RandomColorGenrator from './components/RandomColorGenrator/RandomColorGenrator'
import StarRating from "./components/StarRating/StarRating"

function App() {


  return (
    <>
      {/* <RandomColorGenrator /> */}
      {/* <StarRating/> */}
      <ImageSlider url={'https:picsum.photos/v2/list'}
      page = {"1"} 
      limit={"4"}/>
    </>
  )
}

export default App
