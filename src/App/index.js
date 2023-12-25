import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./route"

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </div>
   )
}

export default App