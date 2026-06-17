"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function DigitalTwinCaseStudy() {
  const { t } = useLanguage()
  const [showGame, setShowGame] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const gameContainerRef = useRef<HTMLDivElement>(null)

  const handleToggleFullscreen = () => {
    if (!gameContainerRef.current) return

    if (document.fullscreenElement) {
      // Keluar dari fullscreen
      document.exitFullscreen().catch(console.error)
      setIsFullscreen(false)
    } else {
      // Masuk fullscreen
      gameContainerRef.current.requestFullscreen().catch(console.error)
      setIsFullscreen(true)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <main className="bg-white min-h-screen text-custom-dark">
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8">
        <div className="bg-white px-3 py-2 rounded shadow">
          <Link href="/#work" className="flex items-center text-custom-dark hover:text-black transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span className="text-sm sm:text-base">{t("Back to Work")}</span>
          </Link>
        </div>

        <div className="bg-white px-3 py-2 rounded shadow">
          <LanguageToggle />
        </div>
      </div>

      <header className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold text-custom-dark mb-6" variants={fadeIn}>
              DIGITAL TWIN KOMATSU PC-200
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Mendigitalisasi unit Komatsu PC-200 menjadi virtual 3D interaktif untuk monitoring real-time berbasis IoT, analisis mendalam, dan pengelolaan kondisi suku cadang melalui CMS mobile.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Digital Twin</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unity 6</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">IoT</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Firebase</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unity 3D</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="w-full mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src="/assets/digital-twin/1.png"
            alt="Digital Twin Komatsu PC-200 Hero"
            width={1600}
            height={800}
            className="w-full h-auto object-cover custom-card"
          />
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t("Aplikasi Digital Twin ini dirancang untuk mendigitalisasi unit alat berat Komatsu PC-200 ke dalam bentuk virtual 3D yang interaktif. Proyek ini mengintegrasikan data fisik secara real-time menggunakan sensor IoT yang dihubungkan melalui infrastruktur Cloud, terdiri dari Desktop (visualisasi 3D & analisis) serta Mobile/Android (CMS portabel untuk manajemen alat di lapangan).")}
              </p>
              <p className="text-custom-dark">
                {t("Digital Twin adalah langkah dan teknologi untuk mendigitalisasi lingkungan fisik (misalnya pabrik atau alat berat) ke dalam bentuk virtual secara real-time. Dengan maraknya digital twin, kami meriset referensi aplikasi digital twin di Indonesia dan menemukan MOLCA (PT Molca Teknologi Nusantara) sebagai acuan desain skenario dan fitur demonstrasi.")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Latar Belakang")}
            </motion.h2>

            <motion.div className="mb-8" variants={fadeIn}>
              <p className="text-lg text-custom-dark mb-8">
              {t("Digital Twin adalah sebuah langkah dan teknologi untuk mendigitalisasi lingkungan fisik, seperti pabrik atau alat berat, ke dalam bentuk virtual secara real-time. Dengan maraknya digital twin saat ini maka kami meriset dengan mencari referensi aplikasi digital twin yang ada di Internet lalu menemukan aplikasi digital twin yang bagus yang ada di Indonesia yaitu MOLCA (PT Molca Teknologi Nusantara). Dalam demonstrasinya, Molca menampilkan sebuah simulasi lini produksi dari pabrik sirup obat yang mencakup 5 komponen utama: motor belt, pipe preparation, bottle preparation, packaging, hingga final production.")}
              </p>
            </motion.div>

            {/* <motion.div className="custom-card p-8 rounded-xl" variants={fadeIn}>
              <div style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingTop: "56.2500%",
                paddingBottom: "0",
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                marginTop: "0",
                marginBottom: "0",
                overflow: "hidden",
                borderRadius: "8px",
                willChange: "transform",
              }}>
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    border: "none",
                    padding: "0",
                    margin: "0",
                  }}
                  src="https://www.canva.com/design/DAHGIwLs0qM/Go9JF3VKY5EL5BrMg1LnAQ/view?embed"
                  allowFullScreen
                  title="Latar Belakang Pembuatan Game Bicimici"
                />
              </div>
            </motion.div> */}
            <motion.div className="custom-card p-8 rounded-xl" variants={fadeIn}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/lso9_CqeknA"
                  title="Video DIGITAL TWIN"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("The Challenge")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">{t("Fitur utama yang ditargetkan dalam implementasi Digital Twin ini mencakup Monitoring (pemantauan kondisi mesin berbasis data sensor), Controlling (pengendalian/aksi jarak jauh melalui software), serta fitur inspeksi 3D skala 1:1 untuk kebutuhan operasional dan pemeliharaan.")}</p>
              <ul className="text-white">
                <li>{t("Monitoring: sistem mengumpulkan data dari mesin fisik untuk ditampilkan secara real-time (misalnya perubahan suhu motor belt, pelacakan jumlah produk yang berhasil dikemas).")}</li>
                <li>{t("Controlling: pengguna dapat mengatur atau mengubah kinerja mesin fisik dari jarak jauh, seperti menyalakan/ mematikan hardware kipas atau mengubah kecepatan conveyor belt.")}</li>
                <li>{t("Emergency Stop jarak jauh: tombol henti darurat untuk menghentikan mesin dan menyalakan alarm peringatan bagi operator lapangan.")}</li>
                <li>{t("Mode 3D Scan skala 1:1: pengguna masuk ke mode tampilan 3D dan berkeliling untuk inspeksi detail dari segala arah.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Development Process")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">{t("Development followed an iterative process to ensure the game matched educational goals while remaining fun and easy to play.")}</p>
              <ol className="text-custom-dark">
                <li>{t("Concept design and educational topic mapping for elementary students")}</li>
                <li>{t("Level planning with 10 structured stages aligned to child-friendly standards")}</li>
                <li>{t("Unity 6 implementation using C# for gameplay, UI, and interaction logic")}</li>
                <li>{t("Story-driven scenarios that introduce key cybersecurity topics")}</li>
                <li>{t("Testing with target users and refining controls for simplicity and clarity")}</li>
                <li>{t("Final polish and performance optimization for classroom-friendly use")}</li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Key Features")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <ul className="text-custom-dark">
                <li>{t("4 story topics covering Online Predators, Cyberbullying, Digital Footprint, and Pornography Awareness")}</li>
                <li>{t("10 interactive game levels designed to reinforce learning with clear progression")}</li>
                <li>{t("Scenario-based tasks that teach decision-making and safe internet habits")}</li>
                <li>{t("Friendly visuals and simple controls suitable for young elementary students")}</li>
                <li>{t("A supportive educational flow that encourages learning through play")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Try the Game")}
            </motion.h2>

            {/* <motion.div className="custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark mb-4">
                {t("Experience the Bicimici Game directly in your browser. Click the button to start the game in fullscreen mode.")}
              </p>
              {!showGame ? (
                <div className="relative w-full aspect-video border rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/bicimici/bicimicigameplay.gif"
                    alt="Bicimici Game Preview"
                    fill
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => {
                      setShowGame(true)
                      setTimeout(() => {
                        if (gameContainerRef.current) {
                          gameContainerRef.current.requestFullscreen().catch(console.error)
                          setIsFullscreen(true)
                        }
                      }, 100)
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors group"
                  >
                    <span className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg group-hover:bg-gray-800 transition-colors">
                      {t("Mari Bermain")}
                    </span>
                  </button>
                </div>
              ) : (
                <div ref={gameContainerRef} className="relative w-full aspect-video border rounded-lg overflow-hidden bg-gray-900">
                  <iframe
                    src="/unity/_bicimicigame/index.html"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Bicimici Game WebGL"
                  ></iframe>
                  <button
                    onClick={handleToggleFullscreen}
                    className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors z-10"
                    title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  >
                    {isFullscreen ? "✕" : "⛶"}
                  </button>
                </div>
              )}
            </motion.div> */}

            <motion.div className="custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark mb-4">
                {t("Watch the DIGITAL TWIN gameplay video below.")}
              </p>

              <div className="relative w-full aspect-video border rounded-lg overflow-hidden bg-gray-900">
                <iframe
                  src="https://drive.google.com/file/d/1usFt6ABTOpTKGN7wK83t1DwV4__0zWP0/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allowFullScreen
                  title="DIGITAL TWIN Gameplay Video"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("Results")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">{t("Eksekusi proyek ini menghasilkan sistem digital twin yang memungkinkan remote monitoring, kontrol jarak jauh, dan pembaruan kondisi komponen secara instan melalui integrasi IoT dan Cloud.")}</p>
              <ul className="text-white">
                <li>{t("Monitoring real-time dari sensor IoT untuk mempercepat identifikasi anomali pada komponen mesin")}</li>
                <li>{t("Controlling jarak jauh untuk mengaktifkan/menonaktifkan hardware dan mengubah parameter operasional")}</li>
                <li>{t("Mode inspeksi 3D skala 1:1 untuk validasi kondisi dan pemeliharaan yang lebih akurat")}</li>
                <li>{t("Synchronization Cloud yang memperbarui status komponen (mis. Outer Filter PN-0023) secara instan setelah verifikasi teknisi lapangan")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/ecochat" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : ECOCHAT.ID")}
        </Link> 
      </footer>
    </main>
  )
}
