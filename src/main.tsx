import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '/src/styles/reset.scss'
import '/src/styles/global.scss'
import '/src/styles/extra.scss'
import '/src/styles/glows.scss'
import '/src/styles/hamburger.scss'
import '/src/styles/swiper.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IsDarkModeProvider } from './providers/ThemeProvider.tsx'
import { IsLanguagePtProvider } from './providers/LanguageProvider.tsx'
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <IsLanguagePtProvider>
          <IsDarkModeProvider>
            <App />
          </IsDarkModeProvider>
        </IsLanguagePtProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)