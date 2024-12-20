import { Slide, ToastContainer } from "react-toastify"
import { HomePage } from "./pages/HomePage"
import { MainHeader } from "./components/MainHeader/MainHeader"
import { MainFooter } from "./components/MainFooter"
import global_pt from "./data/translations/global_pt.json"
import global_en from "./data/translations/global_en.json"
import i18next from "i18next"

function App() {

  i18next.init({
    interpolation: {escapeValue: false},
    lng: `${localStorage.getItem("isLanguagePt") != null ? (JSON.parse(localStorage.getItem("isLanguagePt") as any) ? "pt" : "en") : "pt"}`,
    resources: {
      pt: {
        global: global_pt,
      },
      en: {
        global: global_en
      }
    }
  })

  return (
    <>
      <ToastContainer position="bottom-right" transition={Slide} pauseOnHover={false} autoClose={5000} theme={`dark`}/>
      <MainHeader/>
      <HomePage/>
      <MainFooter/>
    </>
  )
}

export default App
