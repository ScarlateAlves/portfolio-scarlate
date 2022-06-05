import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { NavBar } from '../src/components/nav-bar/nav'

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@200;300;400;700&display=swap');
    padding: 0 ;
    margin: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`
const theme = {
  colors: {
    primary1: '#CF3B53',
    primary0: '#E85A71',
    primary: '#E8A0AC',
  },
}

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
