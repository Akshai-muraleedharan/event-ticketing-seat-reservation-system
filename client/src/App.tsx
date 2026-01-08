import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/Routes"

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}
