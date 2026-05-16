import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            console.log("Backend response:", response);
            console.log("Token:", response.token);

            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", response.token);
            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed!");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #eff6ff 100%)" }}>

            {/* Background decorative blobs */}
            <div style={{
                position: "absolute", top: "-80px", right: "-80px",
                width: "320px", height: "320px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute", bottom: "-60px", left: "-60px",
                width: "260px", height: "260px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute", top: "40%", left: "10%",
                width: "120px", height: "120px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            {/* Card */}
            <div style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 8px 40px rgba(99,102,241,0.13), 0 1.5px 8px rgba(0,0,0,0.07)",
                border: "1.5px solid rgba(139,92,246,0.13)",
                padding: "44px 40px 36px 40px",
                width: "100%",
                maxWidth: "420px",
                position: "relative",
                zIndex: 1,
            }}>

                {/* Logo / Brand */}
                <div style={{ textAlign: "center", marginBottom: "6px" }}>
                    <span style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        borderRadius: "12px",
                        padding: "8px 18px",
                        color: "white",
                        fontWeight: "800",
                        fontSize: "18px",
                        letterSpacing: "0.5px",
                        marginBottom: "16px",
                        fontFamily: "'Georgia', serif",
                    }}>
                        🔗 Linklytics
                    </span>
                </div>

                {/* Heading */}
                <h1 style={{
                    textAlign: "center",
                    fontSize: "26px",
                    fontWeight: "800",
                    fontFamily: "'Georgia', serif",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "4px",
                }}>
                    Welcome Back
                </h1>
                <p style={{
                    textAlign: "center",
                    color: "#94a3b8",
                    fontSize: "13.5px",
                    marginBottom: "24px",
                    fontFamily: "Georgia, serif",
                }}>
                    Login to manage your short links 🔗
                </p>

                {/* Divider */}
                <div style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)",
                    marginBottom: "24px",
                }} />

                <form onSubmit={handleSubmit(loginHandler)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                        {/* Username */}
                        <div>
                            <label style={{
                                display: "block", fontSize: "13px", fontWeight: "600",
                                color: "#475569", marginBottom: "6px", fontFamily: "Georgia, serif"
                            }}>
                                Username
                            </label>
                            <div style={{ position: "relative" }}>
                                <span style={{
                                    position: "absolute", left: "12px", top: "50%",
                                    transform: "translateY(-50%)", fontSize: "16px"
                                }}>👤</span>
                                <input
                                    type="text"
                                    placeholder="Type your username"
                                    {...register("username", { required: "*Username is required" })}
                                    style={{
                                        width: "100%", padding: "10px 12px 10px 38px",
                                        borderRadius: "10px", fontSize: "14px",
                                        border: errors.username ? "1.5px solid #f87171" : "1.5px solid #e2e8f0",
                                        background: "#f8fafc", outline: "none",
                                        fontFamily: "Georgia, serif", color: "#1e293b",
                                        boxSizing: "border-box",
                                        transition: "border-color 0.2s",
                                    }}
                                    onFocus={e => e.target.style.borderColor = "#8b5cf6"}
                                    onBlur={e => e.target.style.borderColor = errors.username ? "#f87171" : "#e2e8f0"}
                                />
                            </div>
                            {errors.username && (
                                <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                                <label style={{
                                    fontSize: "13px", fontWeight: "600",
                                    color: "#475569", fontFamily: "Georgia, serif"
                                }}>
                                    Password
                                </label>
                                {/* Forgot password hint */}
                                <Link to="/forgot-password" style={{
                                    fontSize: "12px", color: "#8b5cf6",
                                    fontFamily: "Georgia, serif", cursor: "pointer",
                                    textDecoration: "none"
                                }}>
                                    Forgot password?
                                </Link>
                            </div>
                            <div style={{ position: "relative" }}>
                                <span style={{
                                    position: "absolute", left: "12px", top: "50%",
                                    transform: "translateY(-50%)", fontSize: "16px"
                                }}>🔒</span>
                                <input
                                    type="password"
                                    placeholder="Type your password"
                                    {...register("password", {
                                        required: "*Password is required",
                                        minLength: { value: 6, message: "*Minimum 6 characters required" }
                                    })}
                                    style={{
                                        width: "100%", padding: "10px 12px 10px 38px",
                                        borderRadius: "10px", fontSize: "14px",
                                        border: errors.password ? "1.5px solid #f87171" : "1.5px solid #e2e8f0",
                                        background: "#f8fafc", outline: "none",
                                        fontFamily: "Georgia, serif", color: "#1e293b",
                                        boxSizing: "border-box",
                                        transition: "border-color 0.2s",
                                    }}
                                    onFocus={e => e.target.style.borderColor = "#8b5cf6"}
                                    onBlur={e => e.target.style.borderColor = errors.password ? "#f87171" : "#e2e8f0"}
                                />
                            </div>
                            {errors.password && (
                                <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={loader}
                        type="submit"
                        style={{
                            width: "100%",
                            marginTop: "24px",
                            padding: "12px",
                            borderRadius: "12px",
                            border: "none",
                            background: loader
                                ? "#cbd5e1"
                                : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                            color: "white",
                            fontWeight: "700",
                            fontSize: "15px",
                            fontFamily: "Georgia, serif",
                            cursor: loader ? "not-allowed" : "pointer",
                            boxShadow: loader ? "none" : "0 4px 15px rgba(139,92,246,0.35)",
                            transition: "all 0.2s",
                            letterSpacing: "0.3px",
                        }}
                        onMouseEnter={e => { if (!loader) e.target.style.opacity = "0.92" }}
                        onMouseLeave={e => { e.target.style.opacity = "1" }}
                    >
                        {loader ? "⏳ Logging in..." : "🔑 Login"}
                    </button>
                </form>

                {/* Divider */}
                <div style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)",
                    margin: "24px 0 16px",
                }} />

                {/* Register link */}
                <p style={{
                    textAlign: "center", fontSize: "13.5px",
                    color: "#94a3b8", fontFamily: "Georgia, serif"
                }}>
                    Don't have an account?{" "}
                    <Link to="/register" style={{
                        fontWeight: "700",
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textDecoration: "underline",
                        textDecorationColor: "#8b5cf6",
                    }}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;