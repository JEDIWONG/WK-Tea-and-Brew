import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Login from "./modules/auth/view/Login.jsx"
import Register from "./modules/auth/view/Register.jsx"
import Home from "./modules/home/view/Home.jsx"
import Menu from "./modules/menu/view/Menu.jsx"
import ProductPage from "./modules/menu/view/ProductPage.jsx"
import About from "./modules/about/view/About.jsx"

function App() {

  return (  
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/wk-tea-and-brew/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="menu/products/:id" element={<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
