import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/Routes"
import { ScrollToTop } from "./components/commom/ScrollToTop"
import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { useAuthStore } from "./store"
import { axiosInstance } from "./lib/axiosInstance"

export const App = () => {

  const { setHydrated, loginAuth, logOut } = useAuthStore((state) => state)



  useEffect(() => {

    const checkAuth = async () => {
      try {

        const res = await axiosInstance.post("auth/refresh")

        loginAuth(res.data?.data, res.data.accessToken)
      } catch (error) {
        logOut()
      } finally {
        setHydrated()
      }
    }

    checkAuth()
  }, [])

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
