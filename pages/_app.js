import {useRouter} from "next/navigation";
import "/styles/globals.css"

const App = ({Component, pageProps})=>{
  const router = useRouter();

  return(
    <div key={router.pathname} className="dark:bg-black">
      <Component {...pageProps}/>
    </div>
  )
}

export default App;