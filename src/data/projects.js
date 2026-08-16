export const projects = [
    {
        id: "zr-explore",
        title: "ZR-Explore: NYC Zoning Navigator",
        tagline: "Interactive 3D Zoning Simulation & AI Resolution Assistant",
        description: "An interactive platform to demystify NYC's complex zoning regulations. Features 3D building massing visualization, lot buildable calculations, and an AI assistant grounded in official Zoning Resolution text.",
        tech: ["Next.js", "React", "TypeScript", "MapLibre GL", "Tailwind CSS", "Gemini AI"],
        category: "Spatial & 3D",
        github: "https://github.com/CTC3PO/zr-explore",
        live: "https://zr-explore.vercel.app",
        image: "/images/p1-zr.png",
        featured: true
    },
    {
        id: "volunteer-manager",
        title: "Volunteer Management System",
        tagline: "Operations & Coordination Platform for Retreat Centers",
        description: "A tailored Volunteer Management System for retreat centers. Features volunteer tracking, dynamic team assignments, CSV sync, document uploads, and offline PWA support.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
        category: "Full Stack",
        github: "https://github.com/CTC3PO/volunteer-manager",
        live: "https://tnv-langmai.vercel.app/",
        image: "/images/p2-volunteer-1.png",
        featured: true
    },
    {
        id: "growth-tracker",
        title: "Growth Tracker",
        tagline: "Mindful Habit & Well-Being Journal",
        description: "A comprehensive platform dedicated to supporting mental well-being, featuring habit tracking, gratitude prompts, and mindful living concepts with intuitive UX.",
        tech: ["React", "CSS", "Frontend UI", "Mobile First"],
        category: "Full Stack",
        github: "https://github.com/CTC3PO/growth-track",
        live: "https://growth-track1.vercel.app/",
        image: ["/images/p3-track-app-1.png", "/images/p3-track-app-2.png"],
        featured: true
    },
    {
        id: "genai-ue5",
        title: "Generative AI for Virtual Environment",
        tagline: "Landscape Generation in Unreal Engine 5",
        description: "An advanced Unreal Engine 5 project exploring generative AI techniques to procedurally generate, texture, and illuminate immersive 3D landscapes.",
        tech: ["Unreal Engine 5", "Generative AI", "C++", "3D Rendering"],
        category: "Spatial & 3D",
        github: null,
        live: "https://drive.google.com/file/d/1MZcDWdkuWxCIQwSUONSxhmDWqFsLyLsF/view?usp=sharing",
        image: "/images/p4-photo-1.png",
        featured: true
    },
    {
        id: "pacman-rl",
        title: "Pacman Q-Learning Agent",
        tagline: "Reinforcement Learning with Approximate Q-Learning",
        description: "A reinforcement learning agent that masters Pacman through Q-learning and feature extraction, efficiently navigating grids, avoiding ghosts, and maximizing score.",
        tech: ["Python", "Reinforcement Learning", "Algorithms", "AI"],
        category: "AI & ML",
        github: "https://github.com/CTC3PO",
        live: null,
        image: "/images/projects/ai-pacman-2.gif",
        featured: false
    },
    {
        id: "food-nutriscore",
        title: "Food Nutri-score Prediction",
        tagline: "Machine Learning on 1M+ Global Food Records",
        description: "A machine learning pipeline combining Open Food Facts (1M rows) and World Bank data to analyze global nutrition patterns and predict Nutri-score classification using XGBoost.",
        tech: ["Python", "pandas", "scikit-learn", "XGBoost", "Data Science"],
        category: "AI & ML",
        github: "https://github.com/CTC3PO/ml-nutri-score-prediction",
        live: null,
        image: "/images/projects/food-project.png",
        featured: false
    }
];

export const categorizedSkills = {
    "Spatial & 3D": ["MapLibre GL", "Three.js", "Unreal Engine 5", "GIS / Urban Data", "Mapbox", "WebGL"],
    "Full-Stack Web": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js"],
    "AI & Data Science": ["Generative AI", "Reinforcement Learning", "scikit-learn", "pandas", "XGBoost", "Python"],
    "Cloud & Tools": ["Supabase", "Firebase", "MongoDB", "AWS", "Docker", "Git", "C++"]
};

export const skills = [
    "Next.js", "React", "TypeScript", "Python", "MapLibre GL", "Three.js", "Unreal Engine",
    "Generative AI", "Reinforcement Learning", "Tailwind CSS", "Node.js", "scikit-learn",
    "pandas", "Supabase", "Firebase", "AWS", "Docker", "Git"
];

export const bioData = {
    name: "Chau Tran",
    title: "Full-Stack Developer & Spatial Computing",
    location: "Philadelphia, PA / New York, NY",
    summary: "Full-stack developer with a unique background at the NYC Department of City Planning, currently pursuing a Master's in Information Technology at the University of Pennsylvania. Specializing in modern web applications, 3D spatial interfaces, and machine learning systems.",
    aboutStory: [
        "I'm a full-stack developer with a unique foundation in urban systems at the NYC Department of City Planning, now completing my Master's in Information Technology at the University of Pennsylvania.",
        "My work bridges modern web development, spatial computing, and intelligent systems. Whether building interactive 3D zoning navigators with MapLibre, production PWAs with Next.js, or training machine learning models on millions of records, I focus on crafting clean, high-utility digital tools.",
        "Outside of development, I enjoy urban sketching, exploring new technologies, and hiking with my Australian cattle dog."
    ],
    socials: {
        github: "https://github.com/CTC3PO",
        linkedin: "https://www.linkedin.com/in/chautrancmt26/",
        email: "ctran@alumni.upenn.edu",
        resume: "/Ctran_Resume_v2.pdf"
    }
};
