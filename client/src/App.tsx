import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/Routes"
import { ScrollToTop } from "./components/commom/ScrollToTop"

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  )
}
