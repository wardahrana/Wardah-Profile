
"use client";
import  React ,{ createContext, useEffect } from "react";


type Theme="light" |"dark" ;

interface ThemeContextType{
theme :Theme ;
toggleTheme : () => void ;
setTheme:(theme : Theme) => void ;
}
const ThemeContext= createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider=( {children} : {children :React.ReactNode}) =>{
    const [theme ,setThemeState]=React.useState<Theme>("light");
    const [mounted ,setMounted]=React.useState(false);
    //update the theme

    const setTheme=(newTheme :Theme)=>
    {
setThemeState(newTheme);
localStorage.setItem("theme",newTheme);
document.documentElement.classList.toggle("dark" , newTheme==="dark");
    }

    //toggle the theme
const toggleTheme =( )=>
{
    setTheme(theme === "light" ? "dark" :"light");
}

//initialize theme 
useEffect(()=>
{
    const savedTheme= localStorage.getItem("theme") as Theme | null ;
    const systemTheme=window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    const initialTheme =savedTheme || systemTheme;
    setThemeState(initialTheme);
    document.documentElement.classList.toggle("dark" ,initialTheme  === "dark");
    setMounted(true);
},[]);

// prevent of flash  of wrong theme
if(!mounted){
    return null ;
}
    return(
    <ThemeContext.Provider value={{theme ,toggleTheme ,setTheme}}>
        {children}
        </ThemeContext.Provider>
        )
}
// use custom hook  to use the ThemeContext
export  function useTheme() {
const context=React.useContext(ThemeContext);

if(context === undefined){
throw new Error("useTheme  must be used within a ThemeProvider");
}

return context ;
}