import React, { useState } from 'react';
import api from '../api/api';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            await api.post('/api/auth/public/forgot-password', { email });
            setSent(true);
            toast.success('Reset link sent! Check your console for now.');
        } catch (error) {
            toast.error('Email not found!');
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center"
            style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #eff6ff 100%)" }}>
            <div style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                boxShadow: "0 8px 40px rgba(99,102,241,0.13)",
                border: "1.5px solid rgba(139,92,246,0.13)",
                padding: "44px 40px",
                width: "100%",
                maxWidth: "420px",
            }}>
                <h1 style={{
                    textAlign: "center", fontSize: "24px", fontWeight: "800",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    marginBottom: "8px", fontFamily: "Georgia, serif"
                }}>Forgot Password</h1>
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "13.5px", marginBottom: "24px", fontFamily: "Georgia, serif" }}>
                    Enter your email to receive a reset link
                </p>

                {sent ? (
                    <p style={{ textAlign: "center", color: "#22c55e", fontFamily: "Georgia, serif" }}>
                        ✅ Reset link sent! Check your backend console.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%", padding: "10px 12px", borderRadius: "10px",
                                fontSize: "14px", border: "1.5px solid #e2e8f0",
                                background: "#f8fafc", outline: "none", boxSizing: "border-box",
                                fontFamily: "Georgia, serif", marginBottom: "16px"
                            }}
                        />
                        <button type="submit" disabled={loader} style={{
                            width: "100%", padding: "12px", borderRadius: "12px", border: "none",
                            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                            color: "white", fontWeight: "700", fontSize: "15px",
                            fontFamily: "Georgia, serif", cursor: "pointer"
                        }}>
                            {loader ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>
                )}

                <p style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "#94a3b8", fontFamily: "Georgia, serif" }}>
                    <Link to="/login" style={{ color: "#8b5cf6", fontWeight: "700" }}>Back to Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;