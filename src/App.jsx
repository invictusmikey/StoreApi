import ProductProvider from "./Components/ProductContext/ProductContex"
import { Home } from "./Layout/Home/Home"


function App() {

  return (
    <ProductProvider>
    <>
      <Home/>     
    </>
    </ProductProvider>
  )
}

export default App
