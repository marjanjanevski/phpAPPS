import '../styles/globals.css';
import Menu                 from '../components/Menu';
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

      <body id="body" className={`bg-white mx-auto`}>
          <Menu />
          {children}
          <Footer />
      </body>
    </html>
  )
}
