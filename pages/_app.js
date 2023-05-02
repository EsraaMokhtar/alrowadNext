import '@/styles/globals.css'
import Layout from '../components/Layout';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HydrationProvider, Server, Client } from "react-hydration-provider";

library.add(fas);
i18n.use(LanguageDetector).use(HttpBackend).use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en','ar'],
  debug: false,
  detection: {
    order: ['path','cookie','htmlTag'],
    caches: ['cookie'],
  },
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  },
});

import { I18nextProvider } from 'react-i18next';

function App({ Component, pageProps }) {
  return (
    <HydrationProvider>
    <main>
      <Server>
      </Server>
      <Client>
        <I18nextProvider i18n={i18n}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </I18nextProvider>
      </Client>
    </main>
    </HydrationProvider>


  );
}

if (typeof window !== 'undefined') {
  global.$ = global.jQuery = $;
  global.Popper = Popper;
  require('bootstrap');
}


export default App;