import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/Routes"
import { ScrollToTop } from "./components/commom/ScrollToTop"
import { ToastContainer } from "react-toastify"

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRoute />
    </BrowserRouter>
  )
}
