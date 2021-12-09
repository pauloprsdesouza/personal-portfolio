import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
initFacebookSdk();

export function initFacebookSdk() {
  return new Promise(resolve => {
      window.fbAsyncInit = function () {
        console.info(123);
          window.FB.init({
              appId: process.env.RECT_APP_ID_FACEBOOK,
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v12.0'
          });
      };

      (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));    
  });
}