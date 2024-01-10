"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: React.PropsWithChildren) => (
  <>
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  </>
);

export default Providers;
