import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/reset.scss'
import './assets/styles/global.scss'
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