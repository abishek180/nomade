import Page from "@/components/page";
import React from "react";
import { useRouter } from "next/router";


function MyComponent() {
  const router = useRouter();

  return (
    <Page>
      <div className="max-w-screen-xl mx-auto px-[16px]">
        <div>
          <h2>Current Pathname: {router.pathname}</h2>
          {/* Other component logic based on pathname */}
        </div>
        <p className="text-[100px] text-center text-black font-semibold">
          Contact
        </p>
      </div>
    </Page>
  );
}

export default MyComponent;

// export default function Contact(){
//   return(
//     <Page>
//       <div className="max-w-screen-xl mx-auto px-[16px">
//         <p className="text-[100px] text-center text-black font-semibold">Contact</p>
//       </div>
//     </Page>
//   )
// }
