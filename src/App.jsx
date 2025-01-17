import Comments from "./components/Comments"
import Company from "./components/Company"
import Details from "./components/Details"
import First from "./components/First"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Last from "./components/Last"
import Pricing from "./components/Pricing"


function App() {
  

  return (
    <>
     <div className="bg-white min-h-screen px-2 py-3 flex flex-col gap-6 md:p-10 ">
      <Header />
      <First />
      <Comments />
      <Pricing />
      <Details />
      <Company />
      <Last />
      <Footer />
     </div>
    </>
  )
}

export default App
