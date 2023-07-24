import '@/styles/globals.css'
import Cabecalho from "@/src/components/Cabecalho/Cabecalho";
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Cabecalho></Cabecalho>
    </>
  )
}
