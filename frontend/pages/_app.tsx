import '@/styles/globals.css'
import Cabecalho from "@/src/components/Cabecalho/Cabecalho";
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '@/src/themes/themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
