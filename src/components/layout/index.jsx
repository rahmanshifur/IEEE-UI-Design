import { Fragment } from "react"
import Footer from "./footer"
import Header from "./header"


const Layout = (props) => {
   console.log('props', props)
   return (
      <Fragment>
         <Header />
         {props.children}
         <Footer />
      </Fragment>
   )
}
export default Layout