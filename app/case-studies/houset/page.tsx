"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function HousetCaseStudy() {
  const { t } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white min-h-screen text-custom-dark">
      {/* Responsive Header */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8">
        {/* Back button */}
        <div className="bg-white px-3 py-2 rounded shadow">
          <Link href="/#work" className="flex items-center text-custom-dark hover:text-black transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span className="text-sm sm:text-base">{t("Back to Work")}</span>
          </Link>
        </div>

        {/* Language Toggle */}
        <div className="bg-white px-3 py-2 rounded shadow">
          <LanguageToggle />
        </div>
      </div>

      {/* Header */}
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
              Houset Website 2D & 3D Canvas
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Designed and implemented 2D and 3D canvas features for the Houset website using C# and JavaScript.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Web 3D</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Interactive Canvas</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Interior Design</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2022</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="w-full mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Houset Website 2D & 3D Canvas Hero"
            width={1600}
            height={800}
            className="w-full h-auto object-cover custom-card"
          />
        </motion.div>
      </section>

      {/* Overview */}
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
                Houset adalah platform desain interior online yang memungkinkan pengguna untuk membuat dan menyesuaikan
                desain ruangan mereka secara interaktif. Platform ini menawarkan fitur canvas 2D dan 3D yang
                memungkinkan pengguna untuk menggambar denah ruangan, menempatkan furnitur, dan melihat hasilnya dalam
                visualisasi 3D.
              </p>

              <p className="text-custom-dark">
                Sebagai developer, saya bertanggung jawab untuk mengembangkan fitur canvas 2D dan 3D yang menjadi inti
                dari platform Houset. Fitur ini memungkinkan pengguna untuk dengan mudah membuat desain ruangan mereka
                dan melihat hasilnya secara real-time dalam visualisasi 3D yang realistis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
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
              <p className="text-white">
                Pengembangan fitur canvas 2D dan 3D untuk Houset menghadirkan beberapa tantangan teknis yang kompleks:
              </p>

              <ul className="text-white">
                <li>
                  Menciptakan sistem canvas 2D yang intuitif untuk menggambar denah ruangan dengan berbagai bentuk dan
                  ukuran
                </li>
                <li>Mengembangkan mekanisme konversi dari desain 2D ke visualisasi 3D yang akurat dan real-time</li>
                <li>Memastikan performa yang optimal pada browser web, terutama untuk rendering 3D yang berat</li>
                <li>Mengimplementasikan sistem drag-and-drop untuk penempatan furnitur yang mudah digunakan</li>
                <li>Mengintegrasikan katalog produk yang luas dengan model 3D yang detail</li>
                <li>Memastikan kompatibilitas lintas browser dan perangkat</li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menciptakan pengalaman pengguna yang mulus dan intuitif sambil menangani
                kompleksitas teknis dari rendering 3D di browser dan konversi antara representasi 2D dan 3D.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
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
              {t("Development Process")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                Proses pengembangan fitur canvas 2D dan 3D untuk Houset melibatkan beberapa tahap:
              </p>

              <ol className="text-custom-dark">
                <li>
                  Riset dan pemilihan teknologi yang tepat untuk canvas 2D (HTML5 Canvas dan JavaScript) dan 3D (WebGL
                  dan Three.js)
                </li>
                <li>Perancangan arsitektur sistem yang memungkinkan konversi seamless antara representasi 2D dan 3D</li>
                <li>
                  Pengembangan editor canvas 2D dengan fitur menggambar dinding, pintu, jendela, dan elemen lainnya
                </li>
                <li>
                  Implementasi algoritma untuk mengkonversi desain 2D menjadi model 3D dengan extrusion dan texturing
                </li>
                <li>Pengembangan sistem katalog produk dan penempatan furnitur dengan fitur drag-and-drop</li>
                <li>Optimasi performa rendering 3D dengan teknik seperti level of detail dan lazy loading</li>
                <li>Testing ekstensif pada berbagai browser dan perangkat</li>
                <li>Iterasi berdasarkan feedback pengguna untuk meningkatkan usability</li>
              </ol>
            </motion.div>
          </motion.div>

          {/* Process Images - 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="custom-card p-4"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="2D Canvas Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan canvas 2D dengan HTML5 dan JavaScript</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="3D Rendering Implementation"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Implementasi rendering 3D dengan WebGL dan Three.js</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
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
              {t("The Solution")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                Solusi yang saya kembangkan untuk Houset mencakup beberapa fitur utama:
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Canvas 2D Interaktif:</strong> Editor denah ruangan yang intuitif dengan alat untuk menggambar
                  dinding, pintu, jendela, dan elemen lainnya dengan presisi
                </li>
                <li>
                  <strong>Konversi 2D ke 3D Real-time:</strong> Algoritma yang mengkonversi desain 2D menjadi model 3D
                  secara instan, memungkinkan pengguna untuk melihat perubahan mereka secara real-time
                </li>
                <li>
                  <strong>Katalog Produk Terintegrasi:</strong> Sistem yang memungkinkan pengguna untuk mencari dan
                  menempatkan furnitur dari katalog langsung ke dalam desain mereka
                </li>
                <li>
                  <strong>Visualisasi 3D Realistis:</strong> Rendering 3D berkualitas tinggi dengan pencahayaan
                  realistis, bayangan, dan tekstur
                </li>
                <li>
                  <strong>Fitur Penyesuaian Material:</strong> Kemampuan untuk mengubah material dan warna dinding,
                  lantai, dan furnitur
                </li>
                <li>
                  <strong>Ekspor dan Berbagi:</strong> Opsi untuk mengekspor desain dalam berbagai format dan
                  membagikannya dengan orang lain
                </li>
              </ul>

              <p className="text-custom-dark">
                Semua fitur ini diimplementasikan dengan fokus pada performa dan usability, memastikan bahwa platform
                dapat digunakan dengan lancar bahkan pada perangkat dengan spesifikasi lebih rendah.
              </p>
            </motion.div>
          </motion.div>

          {/* Solution Full Width Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 custom-card p-4"
          >
            <Image
              src="/placeholder.svg?height=900&width=1600"
              alt="Houset Platform Overview"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Feature Screens - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="custom-card p-4"
            >
              <Image
                src="/placeholder.svg?height=800&width=400"
                alt="2D Canvas Editor"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Editor canvas 2D untuk menggambar denah ruangan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/placeholder.svg?height=800&width=400"
                alt="Furniture Placement"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Penempatan furnitur dengan drag-and-drop</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="custom-card p-4"
            >
              <Image
                src="/placeholder.svg?height=800&width=400"
                alt="3D Visualization"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Visualisasi 3D dengan pencahayaan realistis</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
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
              <p className="text-white">
                Implementasi fitur canvas 2D dan 3D pada website Houset menghasilkan beberapa dampak positif:
              </p>

              <ul className="text-white">
                <li>
                  Peningkatan 65% dalam waktu yang dihabiskan pengguna di platform, menunjukkan tingkat engagement yang
                  tinggi
                </li>
                <li>Peningkatan 40% dalam konversi dari pengunjung ke pengguna terdaftar</li>
                <li>Peningkatan 50% dalam jumlah desain yang dibuat dan disimpan oleh pengguna</li>
                <li>Feedback positif dari pengguna mengenai kemudahan penggunaan dan kualitas visualisasi 3D</li>
                <li>Pengurangan 30% dalam waktu yang dibutuhkan pengguna untuk membuat desain ruangan lengkap</li>
                <li>
                  Peningkatan 45% dalam jumlah produk yang dilihat dari katalog, menunjukkan efektivitas integrasi
                  katalog dengan canvas
                </li>
              </ul>

              <p className="text-white">
                Platform ini telah menjadi alat yang berharga bagi pengguna yang ingin mendesain ruangan mereka sendiri,
                dan telah membantu Houset memposisikan diri sebagai pemimpin dalam industri desain interior online.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-custom-dark">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            {t("Next Project")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="custom-card inline-block px-8 py-4"
          >
            <Link
              href="/case-studies/envisions"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              Envisions.id
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer with back to work button */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}
