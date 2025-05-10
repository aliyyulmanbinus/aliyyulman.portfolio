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
    "I hold a degree in Computer Science and have over three years of professional experience in software development, both as a full-time employee in the private sector and as a freelance programmer. Throughout my career, I have worked on various projects ranging from simulation-based applications to web-based interactive dashboards.":
      "I hold a degree in Computer Science and have over three years of professional experience in software development, both as a full-time employee in the private sector and as a freelance programmer. Throughout my career, I have worked on various projects ranging from simulation-based applications to web-based interactive dashboards.",
    "This technical background has given me a strong foundation in problem-solving, system logic, and clean coding practices. It also fuels my passion for creating software that is not only functional but also user-centric. I approach each project by balancing technical efficiency with thoughtful design, ensuring that the solutions I build meet real user needs while maintaining scalability and maintainability.":
      "This technical background has given me a strong foundation in problem-solving, system logic, and clean coding practices. It also fuels my passion for creating software that is not only functional but also user-centric. I approach each project by balancing technical efficiency with thoughtful design, ensuring that the solutions I build meet real user needs while maintaining scalability and maintainability.",
    "My Skills": "My Skills",
    "UX/UI Design": "UX/UI Design",
    "User Research": "User Research",
    Prototyping: "Prototyping",
    "Design Systems": "Design Systems",
    "Collaborative Workshops": "Collaborative Workshops",

    // Resume Section
    Experience: "Experience",
    "Programmer Staff": "Programmer Staff",
    "PT. Kreasi Kode Biner • Sep 2021 - Present": "PT. Kreasi Kode Biner • Sep 2021 - Present",
    "Developed 3D simulations, gameplay modules, and warehouse handling systems using C# and C++.":
      "Developed 3D simulations, gameplay modules, and warehouse handling systems using C# and C++.",
    "Programmer": "Programmer",
    "PT. Mina Nusantara Ahingani • Oct 2020 - Sep 2021": "PT. Mina Nusantara Ahingani • Oct 2020 - Sep 2021",
    "Built NuFish Android app, designed UI/UX, and migrated parts to Flutter.":
      "Built NuFish Android app, designed UI/UX, and migrated parts to Flutter.",
    "Programmer (Intern)": "Programmer (Intern)",
    "JAGAD CREATIVE • Jan 2021 - Jul 2021": "JAGAD CREATIVE • Jan 2021 - Jul 2021",
    "Developed 'AR Melody' Android app and expanded client base with AR/VR projects.":
      "Developed 'AR Melody' Android app and expanded client base with AR/VR projects.",
    "Fresh Graduate Academy - Data Analytics": "Fresh Graduate Academy - Data Analytics",
    "Digital Talent Scholarship • Apr 2024 - Aug 2024": "Digital Talent Scholarship • Apr 2024 - Aug 2024",
    "Completed Google Data Analytics training, specializing in real-world data cleaning and visualization.":
      "Completed Google Data Analytics training, specializing in real-world data cleaning and visualization.",
    // Education Section (English)
    Education: "Education",
    "Bachelor of Computer Science": "Bachelor of Computer Science",
    "Bina Nusantara University • Feb 2023 - Feb 2025": "Bina Nusantara University • Feb 2023 - Feb 2025",
    "Developed a web-based dashboard and graduated with Magna Cum Laude honors.":
      "Developed a web-based dashboard and graduated with Magna Cum Laude honors.",
    "Diploma in Application Software Engineering": "Diploma in Application Software Engineering",
    "Telkom University • Aug 2018 - Aug 2021": "Telkom University • Aug 2018 - Aug 2021",
    "Received GenBI Scholarship and became finalist in national technology competitions.":
      "Received GenBI Scholarship and became finalist in national technology competitions.",
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

    // Projects Section
    "Developed a company profile website for Kurnia Interior Studio, an interior design studio showcasing project portfolios, design services, and company profile.":
      "Pembuatan website company profile untuk Kurnia Interior Studio, sebuah studio desain interior yang menampilkan portofolio proyek, layanan desain, serta profil perusahaan.",

    "Built over 10 simulation gameplay features for the Pertamina Digital HSSE Demo Room website using Unity and C#.":
      "Pengembangan lebih dari 10 fitur gameplay simulasi 3D untuk website Pertamina Digital HSSE Demo Room menggunakan Unity dan C#.",

    "Created 5 out of 20 interactive simulation gameplay modules for DIGINLab, an online nursing laboratory platform, using Unity and C#.":
      "Pembuatan 5 dari 20 gameplay simulasi interaktif untuk website DIGINLab, laboratorium keperawatan berbasis online, menggunakan Unity dan C#.",

    "Developed 4 modules with over 100 gameplay flows for the Electric ECM Tractor and Tractor Oil Flow 3D interactive simulation applications using Unreal Engine and C++.":
      "Pengembangan 4 modul dengan lebih dari 100 gameplay flow untuk aplikasi simulasi 3D interaktif Electric ECM Tractor dan Tractor Oil Flow menggunakan Unreal Engine dan C++.",

    "Contributed to 60% of the core features of the NuFish Android application as a full-stack developer using Kotlin.":
      "Pengembangan 60% fitur inti aplikasi NuFish untuk Android sebagai full-stack developer menggunakan Kotlin.",

    "Designed and implemented 2D and 3D canvas features for the Houset website using C# and JavaScript.":
      "Desain dan implementasi fitur 2D dan 3D canvas pada website Houset menggunakan C# dan JavaScript.",

    "Built a company profile website for Envisions, a platform for automation and data analytics in building and business management.":
      "Company profile website untuk Envisions, platform automation dan data analytics untuk manajemen gedung dan bisnis.",

    "Created a virtual reality tour to promote Dewi Nadulang tourist destination using the theasys.io platform.":
      "Virtual reality tour untuk memperkenalkan destinasi wisata Dewi Nadulang menggunakan platform theasys.io.",

    "Implemented Augmented Reality features to support component value visualization and electrical circuit simulation in educational settings.":
      "Implementasi Augmented Reality untuk membantu visualisasi nilai komponen dan simulasi rangkaian listrik dalam pembelajaran.",

    // About Section
    "About Me": "Tentang Saya",
    "My Background": "Latar Belakang Saya",
    "I hold a degree in Computer Science and have over three years of professional experience in software development, both as a full-time employee in the private sector and as a freelance programmer. Throughout my career, I have worked on various projects ranging from simulation-based applications to web-based interactive dashboards.":
      "Saya memiliki gelar di bidang Ilmu Komputer dan memiliki lebih dari tiga tahun pengalaman profesional dalam pengembangan perangkat lunak, baik sebagai karyawan tetap di sektor swasta maupun sebagai programmer lepas. Sepanjang karier saya, saya telah mengerjakan berbagai proyek mulai dari aplikasi berbasis simulasi hingga dasbor interaktif berbasis web.",
    "This technical background has given me a strong foundation in problem-solving, system logic, and clean coding practices. It also fuels my passion for creating software that is not only functional but also user-centric. I approach each project by balancing technical efficiency with thoughtful design, ensuring that the solutions I build meet real user needs while maintaining scalability and maintainability.":
      "Latar belakang teknis ini telah memberi saya dasar yang kuat dalam pemecahan masalah, logika sistem, dan praktik pengkodean yang bersih. Hal ini juga mendorong semangat saya untuk menciptakan perangkat lunak yang tidak hanya fungsional tetapi juga berpusat pada pengguna. Saya mendekati setiap proyek dengan menyeimbangkan efisiensi teknis dengan desain yang bijaksana, memastikan bahwa solusi yang saya bangun memenuhi kebutuhan pengguna dengan tetap menjaga skalabilitas dan pemeliharaan.",
    "My Skills": "Keahlian Saya",
    "UX/UI Design": "Desain UX/UI",
    "User Research": "Riset Pengguna",
    Prototyping: "Pembuatan Prototipe",
    "Design Systems": "Sistem Desain",
    "Collaborative Workshops": "Workshop Kolaboratif",

    // Resume Section (Bahasa Indonesia)
    Experience: "Pengalaman",
    "Programmer Staff": "Staf Programmer",
    "PT. Kreasi Kode Biner • Sep 2021 - Present": "PT. Kreasi Kode Biner • Sep 2021 - Sekarang",
    "Developed 3D simulations, gameplay modules, and warehouse handling systems using C# and C++.":
      "Mengembangkan simulasi 3D, modul gameplay, dan sistem penanganan gudang dengan C# dan C++.",
    "Programmer": "Programmer",
    "PT. Mina Nusantara Ahingani • Oct 2020 - Sep 2021": "PT. Mina Nusantara Ahingani • Okt 2020 - Sep 2021",
    "Built NuFish Android app, designed UI/UX, and migrated parts to Flutter.":
      "Membangun aplikasi Android NuFish, mendesain UI/UX, dan migrasi sebagian ke Flutter.",
    "Programmer (Intern)": "Programmer (Magang)",
    "JAGAD CREATIVE • Jan 2021 - Jul 2021": "JAGAD CREATIVE • Jan 2021 - Jul 2021",
    "Developed 'AR Melody' Android app and expanded client base with AR/VR projects.":
      "Mengembangkan aplikasi Android 'AR Melody' dan memperluas basis klien dengan proyek AR/VR.",
    "Fresh Graduate Academy - Data Analytics": "Akademi Lulusan Baru - Analisis Data",
    "Digital Talent Scholarship • Apr 2024 - Aug 2024": "Beasiswa Talenta Digital • Apr 2024 - Agu 2024",
    "Completed Google Data Analytics training, specializing in real-world data cleaning and visualization.":
      "Menyelesaikan pelatihan Google Data Analytics, fokus pada pembersihan dan visualisasi data nyata.",
    // Education Section (Bahasa Indonesia)
    Education: "Pendidikan",
    "Bachelor of Computer Science": "Sarjana Ilmu Komputer",
    "Bina Nusantara University • Feb 2023 - Feb 2025": "Universitas Bina Nusantara • Feb 2023 - Feb 2025",
    "Developed a web-based dashboard and graduated with Magna Cum Laude honors.":
      "Mengembangkan dashboard berbasis web dan lulus dengan predikat Magna Cum Laude.",
    "Diploma in Application Software Engineering": "Diploma Rekayasa Perangkat Lunak Aplikasi",
    "Telkom University • Aug 2018 - Aug 2021": "Universitas Telkom • Agu 2018 - Agu 2021",
    "Received GenBI Scholarship and became finalist in national technology competitions.":
      "Menerima Beasiswa GenBI dan menjadi finalis kompetisi teknologi nasional.",
    "Download Full Resume": "Unduh CV Lengkap",

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
