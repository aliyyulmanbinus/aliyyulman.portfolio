// File baru: Context untuk menyimpan dan mengelola state bahasa
"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipe untuk bahasa yang didukung
export type Language = "en" | "id"

// Interface untuk context
interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Nilai default untuk context
const defaultContext: LanguageContextType = {
  language: "id", // Default bahasa Indonesia
  setLanguage: () => {},
  t: (key: string) => key,
}

// Membuat context
const LanguageContext = createContext<LanguageContextType>(defaultContext)

// Hook untuk menggunakan context
export const useLanguage = () => useContext(LanguageContext)

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // State untuk menyimpan bahasa saat ini
  const [language, setLanguage] = useState<Language>("id")

  // Efek untuk memuat preferensi bahasa dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Efek untuk menyimpan preferensi bahasa ke localStorage saat berubah
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Fungsi untuk mengubah bahasa
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  // Fungsi untuk mendapatkan terjemahan berdasarkan key
  type TranslationKey = keyof typeof translations["en"];

  function t(key: TranslationKey): string;
  function t(key: string): string;
  function t(key: string): string {
    const lang = translations[language] ? language : "en";
    const langTranslations = translations[lang] as Record<string, string>;
    const enTranslations = translations["en"] as Record<string, string>;

    return langTranslations[key] || enTranslations[key] || key;
  }


  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Objek terjemahan untuk semua teks dalam aplikasi
const translations = {
  en: {
    // Header
    About: "About",
    Work: "Work",
    Resume: "Resume",

    // Hero Section
    "Hello! I'm": "Hello! I'm",
    "Programmer dan Data Analyst. Pemecah masalah, pengambil keputusan berbasis data, komunikator kolaboratif, dan pecinta data.":
      "Programmer dan Data Analyst. Pemecah masalah, pengambil keputusan berbasis data, komunikator kolaboratif, dan pecinta data.",

    // Work Section
    "Selected Work": "Selected Work",
    "Project type:": "Project type:",
    "Role:": "Role:",
    "Industry:": "Industry:",
    "View case study": "View case study",
    "View details": "View details",
    "Company profile website": "Company profile website",
    "Frontend Web Developer": "Frontend Web Developer",
    "Interior Design, Architecture, Creative Agency": "Interior Design, Architecture, Creative Agency",
    "3D simulation for digital training website": "3D simulation for digital training website",
    "Unity Game Developer": "Unity Game Developer",
    "Energy, Safety Training, Digital Simulation": "Energy, Safety Training, Digital Simulation",
    "Interactive 3D simulation for e-learning platform": "Interactive 3D simulation for e-learning platform",
    "Ed Tech, Health Education": "Ed Tech, Health Education",
    "3D interactive simulation applications": "3D interactive simulation applications",
    "Unreal Engine Developer": "Unreal Engine Developer",
    "Heavy Machinery, Industrial Training": "Heavy Machinery, Industrial Training",
    "Mobile App": "Mobile App",
    "Web 3D": "Web 3D",
    WordPress: "WordPress",
    "VR Tour": "VR Tour",
    "AR App": "AR App",

    // About Section
    "About Me": "About Me",
    "My Background": "My Background",
    "I started my career in education, where I developed a deep understanding of how people learn and interact. This background has been invaluable in my transition to product design, where I focus on creating intuitive and accessible user experiences.":
      "I started my career in education, where I developed a deep understanding of how people learn and interact. This background has been invaluable in my transition to product design, where I focus on creating intuitive and accessible user experiences.",
    "My approach combines empathy with data-driven decision making, ensuring that the products I design not only look good but also solve real problems for users.":
      "My approach combines empathy with data-driven decision making, ensuring that the products I design not only look good but also solve real problems for users.",
    "My Skills": "My Skills",
    "UX/UI Design": "UX/UI Design",
    "User Research": "User Research",
    Prototyping: "Prototyping",
    "Design Systems": "Design Systems",
    "Collaborative Workshops": "Collaborative Workshops",

    // Resume Section
    Experience: "Experience",
    "Senior Product Designer": "Senior Product Designer",
    "Design Company • 2021 - Present": "Design Company • 2021 - Present",
    "Leading product design for multiple projects, conducting user research, and collaborating with cross-functional teams.":
      "Leading product design for multiple projects, conducting user research, and collaborating with cross-functional teams.",
    "UX Designer": "UX Designer",
    "Tech Startup • 2018 - 2021": "Tech Startup • 2018 - 2021",
    "Designed user interfaces and experiences for web and mobile applications, created wireframes, prototypes, and conducted usability testing.":
      "Designed user interfaces and experiences for web and mobile applications, created wireframes, prototypes, and conducted usability testing.",
    "Education Specialist": "Education Specialist",
    "Education Institute • 2015 - 2018": "Education Institute • 2015 - 2018",
    "Developed curriculum and teaching materials, facilitated workshops, and collaborated with educators to improve learning outcomes.":
      "Developed curriculum and teaching materials, facilitated workshops, and collaborated with educators to improve learning outcomes.",
    Education: "Education",
    "Master of Design": "Master of Design",
    "Design University • 2017 - 2018": "Design University • 2017 - 2018",
    "Specialized in User Experience Design with a focus on educational technology.":
      "Specialized in User Experience Design with a focus on educational technology.",
    "Bachelor of Education": "Bachelor of Education",
    "State University • 2011 - 2015": "State University • 2011 - 2015",
    "Graduated with honors, specialized in curriculum development and educational psychology.":
      "Graduated with honors, specialized in curriculum development and educational psychology.",
    "Download Full Resume": "Download Full Resume",

    // Contact Section
    "Let's Connect": "Let's Connect",
    "Have a project in mind or just want to chat?": "Have a project in mind or just want to chat?",

    // Footer
    "All rights reserved.": "All rights reserved.",

    // Language Toggle
    English: "English",
    Indonesian: "Indonesian",

    // Case Studies
    "Back to Work": "Back to Work",
    Overview: "Overview",
    "The Challenge": "The Challenge",
    "Development Process": "Development Process",
    "Design Process": "Design Process",
    "The Solution": "The Solution",
    Results: "Results",
    "Next Project": "Next Project",
    Conclusion: "Conclusion",
  },
  id: {
    // Header
    About: "Tentang",
    Work: "Karya",
    Resume: "Resume",

    // Hero Section
    "Hello! I'm": "Halo! Saya",
    "Programmer and Data Analyst. Problem solver, data-driven decision-maker, collaborative communicator, and passionate data enthusiast.":
      "Programmer dan Data Analyst. Pemecah masalah, pengambil keputusan berbasis data, komunikator kolaboratif, dan pecinta data.",

    // Work Section
    "Selected Work": "Karya Pilihan",
    "Project type:": "Jenis proyek:",
    "Role:": "Peran:",
    "Industry:": "Industri:",
    "View case study": "Lihat studi kasus",
    "View details": "Lihat detail",
    "Company profile website": "Website profil perusahaan",
    "Frontend Web Developer": "Pengembang Web Frontend",
    "Interior Design, Architecture, Creative Agency": "Desain Interior, Arsitektur, Agensi Kreatif",
    "3D simulation for digital training website": "Simulasi 3D untuk website pelatihan digital",
    "Unity Game Developer": "Pengembang Game Unity",
    "Energy, Safety Training, Digital Simulation": "Energi, Pelatihan Keselamatan, Simulasi Digital",
    "Interactive 3D simulation for e-learning platform": "Simulasi 3D interaktif untuk platform e-learning",
    "Ed Tech, Health Education": "Teknologi Pendidikan, Pendidikan Kesehatan",
    "3D interactive simulation applications": "Aplikasi simulasi interaktif 3D",
    "Unreal Engine Developer": "Pengembang Unreal Engine",
    "Heavy Machinery, Industrial Training": "Alat Berat, Pelatihan Industri",
    "Mobile App": "Aplikasi Mobile",
    "Web 3D": "Web 3D",
    WordPress: "WordPress",
    "VR Tour": "Tur VR",
    "AR App": "Aplikasi AR",

    // About Section
    "About Me": "Tentang Saya",
    "My Background": "Latar Belakang Saya",
    "I started my career in education, where I developed a deep understanding of how people learn and interact. This background has been invaluable in my transition to product design, where I focus on creating intuitive and accessible user experiences.":
      "Saya memulai karir di bidang pendidikan, di mana saya mengembangkan pemahaman mendalam tentang bagaimana orang belajar dan berinteraksi. Latar belakang ini sangat berharga dalam transisi saya ke desain produk, di mana saya fokus pada pembuatan pengalaman pengguna yang intuitif dan mudah diakses.",
    "My approach combines empathy with data-driven decision making, ensuring that the products I design not only look good but also solve real problems for users.":
      "Pendekatan saya menggabungkan empati dengan pengambilan keputusan berbasis data, memastikan bahwa produk yang saya desain tidak hanya terlihat bagus tetapi juga memecahkan masalah nyata bagi pengguna.",
    "My Skills": "Keahlian Saya",
    "UX/UI Design": "Desain UX/UI",
    "User Research": "Riset Pengguna",
    Prototyping: "Pembuatan Prototipe",
    "Design Systems": "Sistem Desain",
    "Collaborative Workshops": "Workshop Kolaboratif",

    // Resume Section
    Experience: "Pengalaman",
    "Senior Product Designer": "Desainer Produk Senior",
    "Design Company • 2021 - Present": "Perusahaan Desain • 2021 - Sekarang",
    "Leading product design for multiple projects, conducting user research, and collaborating with cross-functional teams.":
      "Memimpin desain produk untuk berbagai proyek, melakukan riset pengguna, dan berkolaborasi dengan tim lintas fungsi.",
    "UX Designer": "Desainer UX",
    "Tech Startup • 2018 - 2021": "Startup Teknologi • 2018 - 2021",
    "Designed user interfaces and experiences for web and mobile applications, created wireframes, prototypes, and conducted usability testing.":
      "Mendesain antarmuka dan pengalaman pengguna untuk aplikasi web dan mobile, membuat wireframe, prototipe, dan melakukan pengujian kegunaan.",
    "Education Specialist": "Spesialis Pendidikan",
    "Education Institute • 2015 - 2018": "Institut Pendidikan • 2015 - 2018",
    "Developed curriculum and teaching materials, facilitated workshops, and collaborated with educators to improve learning outcomes.":
      "Mengembangkan kurikulum dan materi pengajaran, memfasilitasi workshop, dan berkolaborasi dengan pendidik untuk meningkatkan hasil pembelajaran.",
    Education: "Pendidikan",
    "Master of Design": "Master Desain",
    "Design University • 2017 - 2018": "Universitas Desain • 2017 - 2018",
    "Specialized in User Experience Design with a focus on educational technology.":
      "Spesialisasi dalam Desain Pengalaman Pengguna dengan fokus pada teknologi pendidikan.",
    "Bachelor of Education": "Sarjana Pendidikan",
    "State University • 2011 - 2015": "Universitas Negeri • 2011 - 2015",
    "Graduated with honors, specialized in curriculum development and educational psychology.":
      "Lulus dengan predikat kehormatan, spesialisasi dalam pengembangan kurikulum dan psikologi pendidikan.",
    "Download Full Resume": "Unduh Resume Lengkap",

    // Contact Section
    "Let's Connect": "Mari Terhubung",
    "Have a project in mind or just want to chat?": "Punya proyek dalam pikiran atau hanya ingin mengobrol?",

    // Footer
    "All rights reserved.": "Hak cipta dilindungi.",

    // Language Toggle
    English: "Bahasa Inggris",
    Indonesian: "Bahasa Indonesia",

    // Case Studies
    "Back to Work": "Kembali ke Karya",
    Overview: "Ikhtisar",
    "The Challenge": "Tantangan",
    "Development Process": "Proses Pengembangan",
    "Design Process": "Proses Desain",
    "The Solution": "Solusi",
    Results: "Hasil",
    "Next Project": "Proyek Berikutnya",
    Conclusion: "Kesimpulan",
  },
}
