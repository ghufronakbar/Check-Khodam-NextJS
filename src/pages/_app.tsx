import MetaName from "@/components/MetaName";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Archivo } from "next/font/google";
import { ToastProvider } from "@/components/Toast";
const archivo = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastProvider>
        <MetaName />
        <div className={archivo.className}>
          <Component {...pageProps} />
        </div>
      </ToastProvider>
    </>
  );
};

export default App;
