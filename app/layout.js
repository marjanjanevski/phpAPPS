import '../styles/globals.css';
import Menu                 from '../components/Menu';
import MenuModal            from "../components/MenuModal";
import Footer               from '../components/Footer/Footer';
import Script               from "next/script";

export default function RootLayout({ children }) {
    let isStaging = process.env.APP_ENV === 'staging';
    
  
  return (
    <html>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            <meta name="color-scheme" content="light only"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" key="cookieconsent" />
        </head>

      <body id="body" className={`bg-white mx-auto pb-12`}>

         {/*{isStaging && (*/}
         {/* <Script id="marker-io">*/}
         {/*   {`*/}
         {/*     window.markerConfig = {*/}
         {/*       project: '646b1f3afa5ee0688374d420', */}
         {/*       source: 'snippet'*/}
         {/*     };*/}

         {/*     !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);*/}
         {/*   `}*/}
         {/* </Script>*/}
         {/*)}*/}



      {/*    <Script*/}
      {/*        id="markerio-script"*/}
      {/*        strategy="beforeInteractive"*/}
      {/*        dangerouslySetInnerHTML={{*/}
      {/*            __html: `*/}
      {/*              window.markerConfig = {*/}
      {/*              project: '63dcb19aba93b6e9595d04b8',*/}
      {/*              source: 'snippet'*/}
      {/*              };*/}

      {/*  !function(e,r,a){if(!e.Marker){e.Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);*/}
      {/*`,*/}
      {/*        }}*/}
      {/*    />*/}

          <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"/>
          <Script
              strategy="afterInteractive"
              id="cookieconsent-script"
              dangerouslySetInnerHTML={{
                __html: `
              window.cookieconsent.initialise({
                  "palette": {
                      "popup": {
                          "background": "rgba(0,0,0,0.8)"
                      },
                      "button": {
                          "background": "#f33c6e"
                      }
                  },
                  "theme": "classic",
                  "position": "bottom-left",
                  "content": {
                      "message": "Vår webbplats använder kakor (cookies). Genom att surfa vidare accepterar du att vi använder kakor. Vill du inte ha våra kakor kan du hindra dem genom att göra inställningar i din webbläsare",
                      "dismiss": "Det är helt okej med kakor",
                      "link": "Läs mer här.",
                      "href": "/cookies"
                  }
              });`
          }}>
          </Script>

          <Menu />
          <MenuModal />
          {children}
          <Footer />
      </body>
    </html>
  )
}
