import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();
const TopOffset = 100;

export const ContextProviders = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Intro");
  const [width, setWidth] = useState(0);
  const carosel = useRef();
  const year = new Date().getFullYear();

  // Handler
  const onload = () => {
    setWidth(localStorage.getItem("width"));
  };
  const handelScreenSize = useCallback(() => {
    const screenWidth = window.innerWidth;
    setWidth(screenWidth);
    localStorage.setItem("width", screenWidth);
  }, [width]);

  useEffect(() => {
    onload();
    window.addEventListener("resize", handelScreenSize);
    return () => {
      window.removeEventListener("resize", handelScreenSize);
    };
  }, [width]);

  const handleActiveMenu = useCallback(() => {
    setActiveMenu((currentState) => !currentState);
  }, [activeMenu]);

  const handleScrolle = useCallback(() => {
    const Top = window.scrollY;
    Top > TopOffset ? setScrolled(true) : setScrolled(false);
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolle);
    return () => window.removeEventListener("scroll", handleScrolle);
  }, [scrolled]);

  return (
    <StateContext.Provider
      value={{
        scrolled,
        setScrolled,
        activeMenu,
        handleActiveMenu,
        activeLink,
        setActiveLink,
        carosel,
        width,
        year,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
