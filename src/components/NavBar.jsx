import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useStoreContext();
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    const onLogOutHandler = () => {
        setToken(null);
        localStorage.removeItem("JWT_TOKEN");
        navigate("/login");
    };

    return (
        <div
            className="h-16 z-50 sticky top-0"
            style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                boxShadow: "0 2px 16px rgba(99,102,241,0.25)",
            }}
        >
            {/* ✅ Fix: single container, proper width, no double gradient */}
            <div className="h-full lg:px-14 sm:px-8 px-4 flex items-center justify-between w-full">

                {/* Logo */}
                <Link to="/">
                    <h1 style={{
                        fontWeight: "800",
                        fontSize: "24px",
                        color: "white",
                        fontFamily: "Georgia, serif",
                        letterSpacing: "0.5px",
                        fontStyle: "italic",
                        margin: 0,
                    }}>
                        🔗 Linklytics
                    </h1>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="sm:flex hidden items-center gap-8 m-0 p-0 list-none">
                    <li>
                        <Link
                            to="/"
                            style={{
                                color: path === "/" ? "white" : "rgba(255,255,255,0.75)",
                                fontWeight: path === "/" ? "700" : "500",
                                fontSize: "15px",
                                fontFamily: "Georgia, serif",
                                textDecoration: "none",
                                borderBottom: path === "/" ? "2px solid white" : "2px solid transparent",
                                paddingBottom: "2px",
                                transition: "all 0.2s",
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            style={{
                                color: path === "/about" ? "white" : "rgba(255,255,255,0.75)",
                                fontWeight: path === "/about" ? "700" : "500",
                                fontSize: "15px",
                                fontFamily: "Georgia, serif",
                                textDecoration: "none",
                                borderBottom: path === "/about" ? "2px solid white" : "2px solid transparent",
                                paddingBottom: "2px",
                                transition: "all 0.2s",
                            }}
                        >
                            About
                        </Link>
                    </li>
                    {token && (
                        <li>
                            <Link
                                to="/dashboard"
                                style={{
                                    color: path === "/dashboard" ? "white" : "rgba(255,255,255,0.75)",
                                    fontWeight: path === "/dashboard" ? "700" : "500",
                                    fontSize: "15px",
                                    fontFamily: "Georgia, serif",
                                    textDecoration: "none",
                                    borderBottom: path === "/dashboard" ? "2px solid white" : "2px solid transparent",
                                    paddingBottom: "2px",
                                    transition: "all 0.2s",
                                }}
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}
                    <li>
                        {!token ? (
                            <Link to="/register">
                                <button style={{
                                    background: "#ef4444",
                                    border: "1.5px solid rgba(255,255,255,0.6)",
                                    color: "white",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                    fontFamily: "Georgia, serif",
                                    padding: "7px 20px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                                    onMouseEnter={e => e.target.style.background = "0.88"}
                                    onMouseLeave={e => e.target.style.background = "1"}
                                >
                                    Sign Up
                                </button>
                            </Link>
                        ) : (
                            <button
                                onClick={onLogOutHandler}
                                style={{
                                    background: "#ef4444",
                                    border: "none",
                                    color: "white",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                    fontFamily: "Georgia, serif",
                                    padding: "7px 20px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    boxShadow: "0 2px 8px rgba(239,68,68,0.4)",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={e => e.target.style.opacity = "0.88"}
                                onMouseLeave={e => e.target.style.opacity = "1"}
                            >
                                LogOut
                            </button>
                        )}
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                    {navbarOpen
                        ? <RxCross2 style={{ color: "white", fontSize: "28px" }} />
                        : <IoIosMenu style={{ color: "white", fontSize: "28px" }} />
                    }
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {navbarOpen && (
                <div
                    className="sm:hidden"
                    style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                        padding: "12px 20px 20px",
                        boxShadow: "0 8px 24px rgba(99,102,241,0.25)",
                        position: "absolute",
                        width: "100%",
                        zIndex: 99,
                    }}
                >
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={() => setNavbarOpen(false)}
                                style={{
                                    color: path === "/" ? "white" : "rgba(255,255,255,0.8)",
                                    fontWeight: path === "/" ? "700" : "500",
                                    fontSize: "15px",
                                    fontFamily: "Georgia, serif",
                                    textDecoration: "none",
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setNavbarOpen(false)}
                                style={{
                                    color: path === "/about" ? "white" : "rgba(255,255,255,0.8)",
                                    fontWeight: path === "/about" ? "700" : "500",
                                    fontSize: "15px",
                                    fontFamily: "Georgia, serif",
                                    textDecoration: "none",
                                }}
                            >
                                About
                            </Link>
                        </li>
                        {token && (
                            <li>
                                <Link
                                    to="/dashboard"
                                    onClick={() => setNavbarOpen(false)}
                                    style={{
                                        color: path === "/dashboard" ? "white" : "rgba(255,255,255,0.8)",
                                        fontWeight: path === "/dashboard" ? "700" : "500",
                                        fontSize: "15px",
                                        fontFamily: "Georgia, serif",
                                        textDecoration: "none",
                                    }}
                                >
                                    Dashboard
                                </Link>
                            </li>
                        )}
                        <li>
                            {!token ? (
                                <Link to="/register" onClick={() => setNavbarOpen(false)}>
                                    <button style={{
                                        background: "rgba(255,255,255,0.15)",
                                        border: "1.5px solid rgba(255,255,255,0.6)",
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        fontFamily: "Georgia, serif",
                                        padding: "7px 20px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    }}>
                                        Sign Up
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={onLogOutHandler}
                                    style={{
                                        background: "#ef4444",
                                        border: "none",
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        fontFamily: "Georgia, serif",
                                        padding: "7px 20px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    }}
                                >
                                    LogOut
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;