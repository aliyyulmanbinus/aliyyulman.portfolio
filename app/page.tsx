"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
// Tambahkan import untuk useLanguage
import { useLanguage } from "@/lib/language-context"
// Tambahkan import untuk LanguageToggle
import LanguageToggle from "@/components/language-toggle"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  // Tambahkan hook useLanguage untuk mendapatkan fungsi terjemahan
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <Link href="/" className="block">
          <div className="w-12 h-12 custom-circle flex items-center justify-center">
            <span className="text-custom-dark text-xl font-bold">J</span>
          </div>
        </Link>
        <nav className="flex items-center">
          {/* Tambahkan LanguageToggle di sini */}
          <div className="mr-6">
            <LanguageToggle />
          </div>
          <ul className="flex space-x-6 md:space-x-10">
            <li>
              <Link href="#about" className="text-custom-dark hover:text-black underline-offset-4 hover:underline">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("About")}
              </Link>
            </li>
            <li>
              <Link href="#work" className="text-custom-dark hover:text-black underline-offset-4 hover:underline">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("Work")}
              </Link>
            </li>
            <li>
              <Link href="#resume" className="text-custom-dark hover:text-black underline-offset-4 hover:underline">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("Resume")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-64 md:pt-40 md:pb-80 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center mb-4 md:mb-6">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
              width={40}
              height={40}
              className="mr-4 rounded-full custom-circle p-1"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-custom-dark"
            >
              {/* Gunakan fungsi t() untuk terjemahan */}
              {t("Hello! I'm")}
            </motion.h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-custom-dark mb-8 md:mb-12 relative z-20 bg-white/80 inline-block px-4 py-2"
          >
            Aliyyulman J.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl ml-auto text-right relative z-20 bg-white/80 p-4 inline-block float-right"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t(
              "Programmer and Data Analyst. Problem solver, data-driven decision-maker, collaborative communicator, and passionate data enthusiast.",
            )}
          </motion.p>
        </div>

        {/* Arc Background */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-custom-dark h-[400px] md:h-[500px] rounded-t-full"
          style={{
            transform: `translateY(${Math.min(60, scrollY * 0.1)}%)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-custom-dark"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t("Selected Work")}
          </motion.h2>
        </div>

        {/* Project 1 - Kurnia Interior Studio */}
        <motion.div
          className="w-full bg-custom-dark py-16 md:py-24 px-6 md:px-12 mb-8 custom-card-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-black/10 -z-10 transform rotate-12 rounded-lg"></div>
              <Image
                src="/assets/kurniainterior/kurniainteriorstudiodashboard.png"
                alt="Kurnia Interior Studio Website"
                width={800}
                height={600}
                className="w-full max-w-[500px] mx-auto md:mx-0 relative z-10 custom-card p-2"
              />
              <div className="absolute -top-4 right-4 md:-top-8 md:right-8">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-custom-dark border-r-[15px] border-r-transparent transform rotate-45"></div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Kurnia Interior Studio Website</h3>
              <p className="text-lg mb-6 text-white">
                Pembuatan website company profile untuk Kurnia Interior Studio, sebuah studio desain interior yang
                menampilkan portofolio proyek, layanan desain, serta profil perusahaan.
              </p>

              <div className="space-y-2 mb-8 text-white">
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Project type:")}</span> {t("Company profile website")}
                </p>
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Role:")}</span> {t("Frontend Web Developer")}
                </p>
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Industry:")}</span>{" "}
                  {t("Interior Design, Architecture, Creative Agency")}
                </p>
              </div>

              <Link
                href="/case-studies/kurnia-interior"
                className="inline-block custom-button-light px-6 py-3 text-custom-dark font-medium"
              >
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("View case study")}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Lanjutkan dengan mengganti semua teks statis dengan fungsi t() untuk semua bagian lainnya */}
        {/* Contoh untuk Project 2 */}
        <motion.div
          className="w-full bg-white py-16 md:py-24 px-6 md:px-12 mb-8 custom-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">PERTAMINA DIGITAL HSSE DEMO ROOM</h3>
              <p className="text-lg mb-6 text-custom-dark">
                Pengembangan lebih dari 10 fitur gameplay simulasi 3D untuk website Pertamina Digital HSSE Demo Room
                menggunakan Unity dan C#.
              </p>

              <div className="space-y-2 mb-8 text-custom-dark">
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Project type:")}</span>{" "}
                  {t("3D simulation for digital training website")}
                </p>
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Role:")}</span> {t("Unity Game Developer")}
                </p>
                <p className="text-sm">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  <span className="font-bold">{t("Industry:")}</span> {t("Energy, Safety Training, Digital Simulation")}
                </p>
              </div>

              <Link
                href="/case-studies/pertamina-hsse"
                className="inline-block custom-button px-6 py-3 text-white font-medium"
              >
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("View case study")}
              </Link>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-black/10 -z-10 rounded-full"></div>
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/assets/pertamina/ptc-pertamina.png"
                  alt="Pertamina Digital HSSE Demo Room"
                  width={600}
                  height={400}
                  className="w-full max-w-[500px] custom-card-dark p-2"
                />
              </div>
              <div className="absolute -top-4 left-4 md:-top-8 md:left-8">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white border-r-[15px] border-r-transparent transform rotate-45"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - DIGINLab */}
        <motion.div
          className="w-full bg-custom-dark py-16 md:py-24 px-6 md:px-12 mb-8 custom-card-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-black/20 -z-10 transform rotate-12 rounded-lg"></div>
              <Image
                src="/assets/vnurse/vnurse.png"
                alt="DIGINLab Online Nursing Laboratory"
                width={800}
                height={600}
                className="w-full max-w-[500px] mx-auto md:mx-0 relative z-10 custom-card p-2"
              />
              <div className="absolute -top-4 right-4 md:-top-8 md:right-8">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-custom-dark border-r-[15px] border-r-transparent transform rotate-45"></div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">DIGINLab Online Nursing Laboratory</h3>
              <p className="text-lg mb-6 text-white">
                Pembuatan 5 dari 20 gameplay simulasi interaktif untuk website DIGINLab, laboratorium keperawatan
                berbasis online, menggunakan Unity dan C#.
              </p>

              <div className="space-y-2 mb-8 text-white">
                <p className="text-sm">
                  <span className="font-bold">{t("Project type:")}</span> Interactive 3D simulation for e-learning
                  platform
                </p>
                <p className="text-sm">
                  <span className="font-bold">{t("Role:")}</span> Unity Game Developer
                </p>
                <p className="text-sm">
                  <span className="font-bold">{t("Industry:")}</span> Ed Tech, Health Education
                </p>
              </div>

              <Link
                href="/case-studies/diginlab"
                className="inline-block custom-button-light px-6 py-3 text-custom-dark font-medium"
              >
                {t("View case study")}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Electric ECM Tractor */}
        <motion.div
          className="w-full bg-white py-16 md:py-24 px-6 md:px-12 mb-8 custom-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">
                Electric ECM Tractor & Tractor Oil Flow
              </h3>
              <p className="text-lg mb-6 text-custom-dark">
                Pengembangan 4 modul dengan lebih dari 100 gameplay flow untuk aplikasi simulasi 3D interaktif Electric
                ECM Tractor dan Tractor Oil Flow menggunakan Unreal Engine dan C++.
              </p>

              <div className="space-y-2 mb-8 text-custom-dark">
                <p className="text-sm">
                  <span className="font-bold">{t("Project type:")}</span> 3D interactive simulation applications
                </p>
                <p className="text-sm">
                  <span className="font-bold">{t("Role:")}</span> Unreal Engine Developer
                </p>
                <p className="text-sm">
                  <span className="font-bold">{t("Industry:")}</span> Heavy Machinery, Industrial Training
                </p>
              </div>

              <Link
                href="/case-studies/ecm-tractor"
                className="inline-block custom-button px-6 py-3 text-white font-medium"
              >
                {t("View case study")}
              </Link>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-black/10 -z-10 rounded-full"></div>
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/assets/ck/ck.png"
                  alt="Electric ECM Tractor & Tractor Oil Flow"
                  width={600}
                  height={400}
                  className="w-full max-w-[500px] custom-card p-2"
                />
              </div>
              <div className="absolute -top-4 left-4 md:-top-8 md:left-8">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-custom-dark border-r-[15px] border-r-transparent transform rotate-45"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid for remaining projects */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 5 - NuFish */}
            <motion.div
              className="custom-card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 relative">
                <Image
                  src="/assets/minakita/minakita.png"
                  alt="NuFish Android Application"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-custom-dark text-white px-3 py-1 text-xs rounded-full">
                  Mobile App
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-custom-dark">NuFish Android Application</h3>
              <p className="text-sm mb-4 text-custom-dark flex-grow">
                Pengembangan 60% fitur inti aplikasi NuFish untuk Android sebagai full-stack developer menggunakan
                Kotlin.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/nufish" className="flex items-center text-custom-dark hover:underline">
                  <span className="mr-2">{t("View details")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Project 6 - Houset */}
            <motion.div
              className="custom-card-dark p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 relative">
                <Image
                  src="/assets/houset/houset.png"
                  alt="Houset Website 2D & 3D Canvas"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white text-custom-dark px-3 py-1 text-xs rounded-full">
                  Web 3D
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Houset Website 2D & 3D Canvas</h3>
              <p className="text-sm mb-4 text-white flex-grow">
                Desain dan implementasi fitur 2D dan 3D canvas pada website Houset menggunakan C# dan JavaScript.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/houset" className="flex items-center text-white hover:underline">
                  <span className="mr-2">{t("View details")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Project 7 - Envisions.id */}
            <motion.div
              className="custom-card-dark p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4 relative">
                <Image
                  src="/assets/envisions/envisions.png"
                  alt="Envisions.id"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white text-custom-dark px-3 py-1 text-xs rounded-full">
                  WordPress
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Envisions.id</h3>
              <p className="text-sm mb-4 text-white flex-grow">
                Company profile website untuk Envisions, platform automation dan data analytics untuk manajemen gedung
                dan bisnis.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/envisions" className="flex items-center text-white hover:underline">
                  <span className="mr-2">{t("View details")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Project 8 - Dewinadulang.com */}
            <motion.div
              className="custom-card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Dewinadulang.com"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-custom-dark text-white px-3 py-1 text-xs rounded-full">
                  VR Tour
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-custom-dark">Dewinadulang.com</h3>
              <p className="text-sm mb-4 text-custom-dark flex-grow">
                Virtual reality tour untuk memperkenalkan destinasi wisata Dewi Nadulang menggunakan platform
                theasys.io.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/dewinadulang" className="flex items-center text-custom-dark hover:underline">
                  <span className="mr-2">{t("View details")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Project 9 - AuRRaL */}
            <motion.div
              className="custom-card-dark p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-4 relative">
                <Image
                  src="/assets/aurral/aurral.png"
                  alt="AuRRaL (Augmented Reality Rangkaian Listrik)"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white text-custom-dark px-3 py-1 text-xs rounded-full">
                  AR App
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">AuRRaL (AR Rangkaian Listrik)</h3>
              <p className="text-sm mb-4 text-white flex-grow">
                Implementasi Augmented Reality untuk membantu visualisasi nilai komponen dan simulasi rangkaian listrik
                dalam pembelajaran.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/aurral" className="flex items-center text-white hover:underline">
                  <span className="mr-2">{t("View details")}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-12 md:mb-20 text-custom-dark"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t("About Me")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="custom-card p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-custom-dark">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("My Background")}
              </h3>
              <p className="text-lg mb-6 text-custom-dark">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t(
                  "I started my career in education, where I developed a deep understanding of how people learn and interact. This background has been invaluable in my transition to product design, where I focus on creating intuitive and accessible user experiences.",
                )}
              </p>
              <p className="text-lg text-custom-dark">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t(
                  "My approach combines empathy with data-driven decision making, ensuring that the products I design not only look good but also solve real problems for users.",
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="custom-card p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-custom-dark">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("My Skills")}
              </h3>
              <ul className="space-y-4 text-lg text-custom-dark">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-custom-dark rounded-full mr-3"></span>
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("UX/UI Design")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-custom-dark rounded-full mr-3"></span>
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("User Research")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-custom-dark rounded-full mr-3"></span>
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("Prototyping")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-custom-dark rounded-full mr-3"></span>
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("Design Systems")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-custom-dark rounded-full mr-3"></span>
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("Collaborative Workshops")}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-custom-dark py-24 md:py-32 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-12 md:mb-20 text-white"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t("Resume")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="custom-card-dark p-8 custom-border-dark"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("Experience")}
              </h3>

              <div className="space-y-8 text-white">
                <div>
                  <h4 className="text-xl font-bold">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Senior Product Designer")}
                  </h4>
                  <p className="text-lg font-medium">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Design Company • 2021 - Present")}
                  </p>
                  <p className="mt-2">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t(
                      "Leading product design for multiple projects, conducting user research, and collaborating with cross-functional teams.",
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("UX Designer")}
                  </h4>
                  <p className="text-lg font-medium">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Tech Startup • 2018 - 2021")}
                  </p>
                  <p className="mt-2">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t(
                      "Designed user interfaces and experiences for web and mobile applications, created wireframes, prototypes, and conducted usability testing.",
                    )}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Education Specialist")}
                  </h4>
                  <p className="text-lg font-medium">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Education Institute • 2015 - 2018")}
                  </p>
                  <p className="mt-2">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t(
                      "Developed curriculum and teaching materials, facilitated workshops, and collaborated with educators to improve learning outcomes.",
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="custom-card-dark p-8 custom-border-dark"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                {/* Gunakan fungsi t() untuk terjemahan */}
                {t("Education")}
              </h3>

              <div className="space-y-8 text-white">
                <div>
                  <h4 className="text-xl font-bold">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Master of Design")}
                  </h4>
                  <p className="text-lg font-medium">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Design University • 2017 - 2018")}
                  </p>
                  <p className="mt-2">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Specialized in User Experience Design with a focus on educational technology.")}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Bachelor of Education")}
                  </h4>
                  <p className="text-lg font-medium">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("State University • 2011 - 2015")}
                  </p>
                  <p className="mt-2">
                    {/* Gunakan fungsi t() untuk terjemahan */}
                    {t("Graduated with honors, specialized in curriculum development and educational psychology.")}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <a href="#" className="inline-block custom-button-light px-8 py-3 text-lg font-medium text-custom-dark">
                  {/* Gunakan fungsi t() untuk terjemahan */}
                  {t("Download Full Resume")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-custom-dark"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t("Let's Connect")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-custom-dark"
          >
            {/* Gunakan fungsi t() untuk terjemahan */}
            {t("Have a project in mind or just want to chat?")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="custom-card inline-block px-8 py-6 rounded-lg"
          >
            <a
              href="mailto:aliyyulmanj@gmail.com"
              className="text-3xl md:text-4xl font-bold text-custom-dark hover:text-black hover:underline transition-colors"
            >
              aliyyulmanj@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-custom-dark text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg">
              © {new Date().getFullYear()} Aliyyulman Jihan {t("All rights reserved.")}
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Dribbble
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
