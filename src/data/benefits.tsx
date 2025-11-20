import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Gas Optimization",
        description: "Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.",
        bullets: [
            {
                title: "Intelligent Categorization",
                description: "Automatically sorts your transactions for crystal-clear insights.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Customizable Goals",
                description: "Set and track financial objectives that matter to you.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Predictive Analysis",
                description: "Get ahead of your finances with spending forecasts and alerts.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "https://images.unsplash.com/photo-1569256174397-819017e58de4?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Static Analysis",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "https://images.unsplash.com/photo-1637778352878-f0b46d574a04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
    },
    {
        title: "AI Assessment & Audit Report",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "https://images.unsplash.com/photo-1737641624486-7846df8528dc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]