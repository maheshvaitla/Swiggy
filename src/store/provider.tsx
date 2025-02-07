"use client"; // Only needed in Next.js apps

import { Provider } from "react-redux";
import store  from "../store/store"; // Ensure the path is correct

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
