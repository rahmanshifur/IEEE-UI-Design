import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout"
import EventPage from "../pages/event"
import EventDetails from "../pages/event/details"
import HomePage from "../pages/home"
const AppRoutes = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/events/:id" element={<EventDetails />} />
         </Routes>
      </Layout>
   )
}

export default AppRoutes