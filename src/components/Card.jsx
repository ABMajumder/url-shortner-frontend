import React from 'react';

const cardStyles = [
    {
        icon: "🔗",
        bg: "rgba(59,130,246,0.1)",
        iconColor: "#3b82f6",
        accent: "#3b82f6",
    },
    {
        icon: "📊",
        bg: "rgba(139,92,246,0.1)",
        iconColor: "#8b5cf6",
        accent: "#8b5cf6",
    },
    {
        icon: "🛡️",
        bg: "rgba(16,185,129,0.1)",
        iconColor: "#10b981",
        accent: "#10b981",
    },
    {
        icon: "🚀",
        bg: "rgba(245,158,11,0.1)",
        iconColor: "#f59e0b",
        accent: "#f59e0b",
    },
];

let cardIndex = 0;

const Card = ({ title, desc }) => {
    const style = cardStyles[cardIndex % cardStyles.length];
    cardIndex++;

    return (
        <div
            style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(16px)",
                borderRadius: "20px",
                border: "1.5px solid rgba(139,92,246,0.12)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.08)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.15)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.08)";
            }}
        >
            {/* Icon Box */}
            <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: style.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "4px",
            }}>
                {style.icon}
            </div>

            {/* Accent line */}
            <div style={{
                width: "36px",
                height: "3px",
                borderRadius: "99px",
                background: `linear-gradient(90deg, ${style.accent}, transparent)`,
            }} />

            {/* Title */}
            <h1 style={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Georgia, serif",
                color: "#1e293b",
                margin: 0,
            }}>
                {title}
            </h1>

            {/* Description */}
            <p style={{
                fontSize: "13.5px",
                color: "#64748b",
                fontFamily: "Georgia, serif",
                lineHeight: "1.7",
                margin: 0,
            }}>
                {desc}
            </p>
        </div>
    );
};

// ✅ Reset index for each render cycle
cardIndex = 0;

export default Card;