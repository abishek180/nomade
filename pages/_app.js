import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "/styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="dark:bg-black">
        <Component {...pageProps} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
