import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return(
<>
<QueryClientProvider client={queryClient}>
   <Component {...pageProps}/>
   </QueryClientProvider>
</>
    )
}
