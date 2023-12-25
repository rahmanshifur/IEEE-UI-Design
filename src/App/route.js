import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout"
import HomePage from "../pages/home"
const AppRoutes = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </Layout>
   )
}

export default AppRoutes