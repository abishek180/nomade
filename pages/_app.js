import { useRouter } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "/styles/globals.css";

// const App = ({ Component, pageProps }) => {
//   const router = useRouter();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div key={router.pathname} className="dark:bg-black">
//         <Component {...pageProps} />
//         <motion.div
//           className="slide-in"
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: 0 }}
//           exit={{ scaleY: 1 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         ></motion.div>
//         <motion.div
//           className="slide-out"
//           initial={{ scaleY: 1 }}
//           animate={{ scaleY: 0 }}
//           exit={{ scaleY: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         ></motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default App;

const App = ({ Component, pageProps, router }) => {
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    setRoutes([
      {
        key: router.pathname,
        Component,
        pageProps,
      },
    ]);
  }, [Component, pageProps, router.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="dark:bg-black">
        <AnimatePresence>
          {routes.map((route, i) => (
            <motion.div
              key={route.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: i * 0.1 } }}
            >
              {route.Component && <route.Component {...route.pageProps} />}
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
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, router: ctx.router };
};

export default App;
