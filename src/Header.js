import React, { useState, useEffect } from "react";

function Header() {
    const [isFixed, setIsFixed] = useState(false)

    const handleWindowScroll = () => {
        if (window.scrollY > 1000) {
            setIsFixed(true);
        }
        else {
            setIsFixed(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);

        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
        }
    }, []);

    return (
        <>
            <header className={isFixed ? "headerFixed" : "headerNormal"}>Nagłówek</header>
        </>
    )
}

export default Header;

