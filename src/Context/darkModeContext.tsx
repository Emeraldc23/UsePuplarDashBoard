import { createContext, useReducer, ReactNode, Dispatch } from "react";
import DarkModeReducer from "./darkModeReducer";

// Define the type for the context
interface DarkModeContextType {
  darkMode: boolean;
  dispatch: Dispatch<{ type: "TOGGLE" }>;
}

// Define the props type for the provider
interface DarkModeProviderProps {
  children: ReactNode;
}

// Initial state
const INITIAL_STATE = {
  darkMode: false,
};

// Provide a default value for createContext
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  dispatch: () => {}, // placeholder
});

// Provider component
export const DarkModeContextProvider = ({
  children,
}: DarkModeProviderProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
