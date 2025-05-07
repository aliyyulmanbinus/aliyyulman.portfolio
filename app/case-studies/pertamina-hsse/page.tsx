"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
// Tambahkan import untuk useLanguage
import { useLanguage } from "@/lib/language-context"
// Tambahkan import untuk LanguageToggle
import LanguageToggle from "@/components/language-toggle"

export default function PertaminaHsseCaseStudy() {
  // Tambahkan hook useLanguage untuk mendapatkan fungsi terjemahan
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
              PERTAMINA DIGITAL HSSE DEMO ROOM
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Pengembangan lebih dari 10 fitur gameplay simulasi 3D untuk website Pertamina Digital HSSE Demo Room
              menggunakan Unity dan C#.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">3D Simulation</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unity Development</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Safety Training</span>
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
            src="/assets/pertamina/pertamina_page.svg?height=800&width=1600"
            alt="Pertamina Digital HSSE Demo Room Hero"
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
              {/* Gunakan fungsi t() untuk terjemahan */}
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t(
                  "Pertamina Digital HSSE Demo Room adalah platform pelatihan keselamatan digital yang dikembangkan untuk PT Pertamina, perusahaan energi nasional Indonesia. Platform ini bertujuan untuk meningkatkan kesadaran dan keterampilan karyawan dalam aspek Health, Safety, Security, dan Environment (HSSE) melalui simulasi interaktif berbasis 3D.",
                )}
              </p>

              <p className="text-custom-dark">
                {t(
                  "Sebagai Unity Game Developer dalam proyek ini, saya bertanggung jawab untuk mengembangkan lebih dari 10 fitur gameplay simulasi 3D yang memungkinkan pengguna untuk berlatih prosedur keselamatan dalam lingkungan virtual yang aman namun realistis.",
                )}
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
                {t(
                  "Pengembangan simulasi 3D untuk pelatihan keselamatan di Pertamina menghadirkan beberapa tantangan:",
                )}
              </p>

              <ul className="text-white">
                <li>
                  {t("Menciptakan simulasi yang akurat dan realistis berdasarkan prosedur keselamatan Pertamina")}
                </li>
                <li>{t("Mengoptimalkan performa simulasi 3D agar dapat berjalan dengan lancar di browser web")}</li>
                <li>{t("Mengintegrasikan simulasi dengan sistem manajemen pembelajaran (LMS) yang ada")}</li>
                <li>{t("Memastikan simulasi dapat diakses oleh pengguna dengan berbagai spesifikasi perangkat")}</li>
                <li>{t("Mengembangkan sistem penilaian yang dapat mengukur pemahaman dan keterampilan pengguna")}</li>
              </ul>

              <p className="text-white">
                {t(
                  "Selain itu, kami perlu memastikan bahwa simulasi tidak hanya edukatif tetapi juga menarik, sehingga pengguna termotivasi untuk menyelesaikan pelatihan dan menyerap informasi penting tentang keselamatan.",
                )}
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
                {t("Proses pengembangan simulasi 3D untuk Pertamina Digital HSSE Demo Room meliputi beberapa tahap:")}
              </p>

              <ol className="text-custom-dark">
                <li>{t("Studi mendalam tentang prosedur keselamatan Pertamina dan identifikasi skenario kritis")}</li>
                <li>{t("Pembuatan konsep dan storyboard untuk setiap simulasi")}</li>
                <li>{t("Pemodelan 3D lingkungan dan aset yang diperlukan")}</li>
                <li>{t("Pengembangan gameplay dan mekanik interaksi menggunakan Unity dan C#")}</li>
                <li>{t("Implementasi sistem penilaian dan feedback")}</li>
                <li>{t("Optimasi performa untuk web browser")}</li>
                <li>{t("Integrasi dengan backend sistem dan LMS")}</li>
                <li>{t("Testing dan iterasi berdasarkan feedback dari ahli keselamatan Pertamina")}</li>
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
                alt="3D Modeling Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Proses pemodelan 3D lingkungan industri")}</p>
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
                alt="Unity Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Pengembangan gameplay dengan Unity")}</p>
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
                {t(
                  "Untuk Pertamina Digital HSSE Demo Room, saya mengembangkan berbagai simulasi interaktif yang mencakup:",
                )}
              </p>

              <ul className="text-custom-dark">
                <li>{t("Simulasi evakuasi kebakaran dengan berbagai skenario dan tingkat kesulitan")}</li>
                <li>{t("Simulasi penanganan tumpahan bahan kimia dengan prosedur yang sesuai standar industri")}</li>
                <li>{t("Simulasi inspeksi keselamatan peralatan dan lingkungan kerja")}</li>
                <li>{t("Simulasi penggunaan alat pelindung diri (APD) yang benar")}</li>
                <li>{t("Simulasi penanganan situasi darurat di fasilitas produksi dan kilang")}</li>
                <li>{t("Simulasi identifikasi bahaya dan penilaian risiko")}</li>
              </ul>

              <p className="text-custom-dark">
                {t(
                  "Setiap simulasi dirancang dengan antarmuka yang intuitif dan sistem panduan yang membantu pengguna memahami langkah-langkah yang benar. Sistem penilaian otomatis memberikan feedback langsung dan mengidentifikasi area yang perlu ditingkatkan.",
                )}
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
              alt="Pertamina HSSE Simulation Screens"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Simulation Screens - 3 column grid */}
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
                alt="Fire Evacuation Simulation"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Simulasi evakuasi kebakaran")}</p>
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
                alt="Chemical Spill Response"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Simulasi penanganan tumpahan bahan kimia")}</p>
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
                alt="PPE Usage Training"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Pelatihan penggunaan APD")}</p>
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
                {t("Implementasi Pertamina Digital HSSE Demo Room menghasilkan beberapa dampak positif:")}
              </p>

              <ul className="text-white">
                <li>
                  {t("Peningkatan 35% dalam tingkat kelulusan pelatihan keselamatan dibandingkan metode konvensional")}
                </li>
                <li>
                  {t(
                    "Pengurangan 28% dalam insiden keselamatan di fasilitas yang telah mengadopsi program pelatihan ini",
                  )}
                </li>
                <li>{t("Peningkatan 40% dalam retensi pengetahuan prosedur keselamatan")}</li>
                <li>{t("Efisiensi biaya pelatihan sebesar 50% dibandingkan dengan pelatihan tatap muka")}</li>
                <li>{t("Kemampuan untuk melatih lebih banyak karyawan secara bersamaan tanpa batasan geografis")}</li>
              </ul>

              <p className="text-white">
                {t(
                  "Platform ini juga menerima penghargaan inovasi internal Pertamina dan menjadi model untuk pengembangan program pelatihan digital di divisi lain.",
                )}
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
              href="/case-studies/diginlab"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              DIGINLab
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer with back to work button */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {/* Gunakan fungsi t() untuk terjemahan */}
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}
