import Content from "./components/Content"
import ExploreStory from "./components/ExploreStory"
import Footer from "./components/Footer"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"

function App() {

  return (
   <div className="flex flex-col">
    <Navbar />
    <Content />
    <Highlights />
    <ExploreStory />
    <HowItWorks />
    <Footer />
   </div>
  )
}

export default App
