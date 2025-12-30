import "./globals.css";
import I18nProvider from "./components/I18nProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
