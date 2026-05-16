import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const ResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            await api.post('/api/auth/public/reset-password', { token, newPassword: password });
            toast.success('Password reset successful!');
            navigate('/login');
        } catch (error) {
            toast.error('Invalid or expired token!');
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
                    marginBottom: "24px", fontFamily: "Georgia, serif"
                }}>Reset Password</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={6}
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
                        {loader ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;