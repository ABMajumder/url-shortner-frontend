import React from "react";
import { FaLink, FaShareAlt, FaShieldAlt, FaChartLine, FaUsers, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
    {
        icon: <FaLink />,
        color: "#3b82f6",
        bg: "rgba(59,130,246,0.1)",
        title: "Simple URL Shortening",
        desc: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.",
    },
    {
        icon: <FaChartLine />,
        color: "#8b5cf6",
        bg: "rgba(139,92,246,0.1)",
        title: "Powerful Analytics",
        desc: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.",
    },
    {
        icon: <FaShieldAlt />,
        color: "#10b981",
        bg: "rgba(16,185,129,0.1)",
        title: "Enhanced Security",
        desc: "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.",
    },
    {
        icon: <FaRocket />,
        color: "#f59e0b",
        bg: "rgba(245,158,11,0.1)",
        title: "Fast and Reliable",
        desc: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive.",
    },
];

const stats = [
    { value: "10M+", label: "Links Shortened" },
    { value: "500K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
];

const AboutPage = () => {
    return (
        <div
            className="min-h-[calc(100vh-64px)]"
            style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #eff6ff 100%)" }}
        >
            {/* Hero Section */}
            <div style={{ position: "relative", overflow: "hidden" }}>

                {/* Background blobs */}
                <div style={{
                    position: "absolute", top: "-60px", right: "-60px",
                    width: "300px", height: "300px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                    pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", bottom: "-40px", left: "-40px",
                    width: "220px", height: "220px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                    pointerEvents: "none"
                }} />

                <div className="lg:px-14 sm:px-8 px-5 pt-16 pb-12" style={{ position: "relative", zIndex: 1 }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: "16px" }}
                    >
                        <span style={{
                            display: "inline-block",
                            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            borderRadius: "20px",
                            padding: "6px 18px",
                            color: "white",
                            fontWeight: "700",
                            fontSize: "13px",
                            fontFamily: "Georgia, serif",
                            letterSpacing: "0.5px",
                        }}>
                            🔗 About Linklytics
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            fontSize: "clamp(28px, 4vw, 48px)",
                            fontWeight: "800",
                            fontFamily: "Georgia, serif",
                            background: "linear-gradient(135deg, #1e293b 0%, #8b5cf6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "16px",
                            lineHeight: "1.2",
                        }}
                    >
                        Simplifying the Web,<br />One Link at a Time
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{
                            color: "#64748b",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            maxWidth: "600px",
                            fontFamily: "Georgia, serif",
                            marginBottom: "0",
                        }}
                    >
                        Linklytics is built for individuals and teams who want to share smarter.
                        Generate concise, trackable links in seconds — no clutter, no hassle.
                        Whether you're a marketer, developer, or creator, Linklytics gives you
                        the tools to manage your links with confidence.
                    </motion.p>
                </div>
            </div>

            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:px-14 sm:px-8 px-5"
                style={{ marginBottom: "48px" }}
            >
                <div style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "20px",
                    border: "1.5px solid rgba(139,92,246,0.13)",
                    boxShadow: "0 4px 24px rgba(99,102,241,0.1)",
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "16px",
                    textAlign: "center",
                }}>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div style={{
                                fontSize: "28px",
                                fontWeight: "800",
                                fontFamily: "Georgia, serif",
                                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                marginBottom: "4px",
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: "12px",
                                color: "#94a3b8",
                                fontFamily: "Georgia, serif",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Features Grid */}
            <div className="lg:px-14 sm:px-8 px-5 pb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: "center",
                        fontSize: "22px",
                        fontWeight: "800",
                        fontFamily: "Georgia, serif",
                        color: "#1e293b",
                        marginBottom: "32px",
                    }}
                >
                    Why choose Linklytics?
                </motion.h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                }}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{
                                background: "rgba(255,255,255,0.88)",
                                backdropFilter: "blur(16px)",
                                borderRadius: "20px",
                                border: "1.5px solid rgba(139,92,246,0.12)",
                                boxShadow: "0 4px 20px rgba(99,102,241,0.08)",
                                padding: "28px 24px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                cursor: "default",
                            }}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 12px 32px rgba(99,102,241,0.15)",
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: "52px", height: "52px",
                                borderRadius: "14px",
                                background: feature.bg,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "22px",
                                color: feature.color,
                                marginBottom: "16px",
                            }}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: "17px",
                                fontWeight: "700",
                                fontFamily: "Georgia, serif",
                                color: "#1e293b",
                                marginBottom: "10px",
                            }}>
                                {feature.title}
                            </h3>

                            {/* Desc */}
                            <p style={{
                                fontSize: "13.5px",
                                color: "#64748b",
                                fontFamily: "Georgia, serif",
                                lineHeight: "1.7",
                                margin: 0,
                            }}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:px-14 sm:px-8 px-5 pb-16"
            >
                <div style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    borderRadius: "24px",
                    padding: "40px 32px",
                    textAlign: "center",
                    boxShadow: "0 8px 32px rgba(139,92,246,0.3)",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute", top: "-40px", right: "-40px",
                        width: "180px", height: "180px", borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)", pointerEvents: "none"
                    }} />
                    <div style={{
                        position: "absolute", bottom: "-30px", left: "-30px",
                        width: "140px", height: "140px", borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)", pointerEvents: "none"
                    }} />
                    <h2 style={{
                        color: "white", fontSize: "24px", fontWeight: "800",
                        fontFamily: "Georgia, serif", marginBottom: "12px",
                        position: "relative", zIndex: 1,
                    }}>
                        Ready to shorten smarter? 🚀
                    </h2>
                    <p style={{
                        color: "rgba(255,255,255,0.82)", fontSize: "14px",
                        fontFamily: "Georgia, serif", marginBottom: "24px",
                        position: "relative", zIndex: 1,
                    }}>
                        Join thousands of users already using Linklytics to manage their links.
                    </p>
                    <a href="/register" style={{
                        display: "inline-block",
                        background: "white",
                        color: "#8b5cf6",
                        fontWeight: "700",
                        fontSize: "14px",
                        fontFamily: "Georgia, serif",
                        padding: "12px 32px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                        position: "relative", zIndex: 1,
                        transition: "opacity 0.2s",
                    }}>
                        Get Started Free →
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;