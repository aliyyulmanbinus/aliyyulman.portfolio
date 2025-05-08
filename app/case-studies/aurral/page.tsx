"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function AurralCaseStudy() {
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
              AuRRaL (AR Rangkaian Listrik)
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Implementasi Augmented Reality untuk membantu visualisasi nilai komponen dan simulasi rangkaian listrik
              dalam pembelajaran.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">AR App</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Education</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">
                Electrical Engineering
              </span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2021</span>
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
            alt="AuRRaL AR Application Hero"
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
                AuRRaL (Augmented Reality Rangkaian Listrik) adalah aplikasi mobile yang menggunakan teknologi Augmented
                Reality untuk membantu siswa dan mahasiswa dalam mempelajari rangkaian listrik. Aplikasi ini
                memungkinkan pengguna untuk memvisualisasikan nilai komponen elektronik dan mensimulasikan perilaku
                rangkaian listrik dalam dunia nyata.
              </p>

              <p className="text-custom-dark">
                Sebagai developer, saya bertanggung jawab untuk mengembangkan aplikasi AuRRaL dari konsep hingga
                implementasi. Aplikasi ini dirancang untuk mengatasi kesulitan yang sering dihadapi siswa dalam memahami
                konsep abstrak dalam rangkaian listrik dengan memberikan visualisasi interaktif yang memudahkan proses
                pembelajaran.
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
                Pengembangan aplikasi AuRRaL menghadirkan beberapa tantangan teknis dan pedagogis:
              </p>

              <ul className="text-white">
                <li>
                  Menciptakan sistem pengenalan marker yang akurat untuk berbagai komponen elektronik dalam kondisi
                  pencahayaan yang berbeda
                </li>
                <li>
                  Mengembangkan algoritma untuk mensimulasikan perilaku rangkaian listrik secara real-time dan akurat
                </li>
                <li>Merancang visualisasi AR yang informatif namun tidak terlalu kompleks untuk pemahaman pengguna</li>
                <li>
                  Memastikan performa aplikasi yang optimal pada berbagai perangkat mobile dengan spesifikasi yang
                  beragam
                </li>
                <li>Mengintegrasikan konten edukasi yang sesuai dengan kurikulum pendidikan teknik elektro</li>
                <li>
                  Menciptakan antarmuka pengguna yang intuitif untuk siswa dengan berbagai tingkat pemahaman teknologi
                </li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menciptakan aplikasi AR yang tidak hanya menarik secara visual tetapi juga
                memiliki nilai edukasi yang tinggi dan akurat secara teknis dalam mensimulasikan perilaku rangkaian
                listrik.
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
              <p className="text-custom-dark">Proses pengembangan aplikasi AuRRaL melibatkan beberapa tahap:</p>

              <ol className="text-custom-dark">
                <li>Riset dan konsultasi dengan pengajar teknik elektro untuk memahami kebutuhan pembelajaran</li>
                <li>Perancangan sistem marker dan database komponen elektronik</li>
                <li>Pengembangan algoritma simulasi rangkaian listrik yang dapat berjalan pada perangkat mobile</li>
                <li>Implementasi teknologi AR menggunakan Unity dan Vuforia</li>
                <li>Perancangan antarmuka pengguna yang intuitif dan sesuai dengan kebutuhan pembelajaran</li>
                <li>Pengembangan konten edukasi dan tutorial interaktif</li>
                <li>Testing dengan siswa dan pengajar untuk mendapatkan feedback</li>
                <li>Iterasi dan penyempurnaan berdasarkan feedback yang diterima</li>
                <li>Optimasi performa dan pengujian pada berbagai perangkat</li>
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
                alt="AR Marker Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan sistem marker untuk komponen elektronik</p>
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
                alt="Circuit Simulation Algorithm"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan algoritma simulasi rangkaian listrik</p>
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
              <p className="text-custom-dark">Aplikasi AuRRaL yang saya kembangkan memiliki beberapa fitur utama:</p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Pengenalan Komponen:</strong> Kemampuan untuk mengenali berbagai komponen elektronik seperti
                  resistor, kapasitor, induktor, dan transistor melalui marker khusus
                </li>
                <li>
                  <strong>Visualisasi Nilai Komponen:</strong> Menampilkan nilai komponen elektronik (seperti
                  resistansi, kapasitansi) dalam bentuk AR yang mudah dibaca
                </li>
                <li>
                  <strong>Simulasi Rangkaian:</strong> Kemampuan untuk mensimulasikan perilaku rangkaian listrik
                  sederhana dengan menghubungkan beberapa komponen
                </li>
                <li>
                  <strong>Visualisasi Arus dan Tegangan:</strong> Menampilkan aliran arus dan distribusi tegangan dalam
                  rangkaian dengan animasi AR yang intuitif
                </li>
                <li>
                  <strong>Mode Pembelajaran:</strong> Tutorial interaktif yang memandu pengguna melalui konsep dasar
                  rangkaian listrik
                </li>
                <li>
                  <strong>Mode Latihan:</strong> Tantangan dan soal latihan untuk menguji pemahaman pengguna
                </li>
                <li>
                  <strong>Database Komponen:</strong> Informasi referensi tentang berbagai komponen elektronik dan
                  penggunaannya
                </li>
              </ul>

              <p className="text-custom-dark">
                Aplikasi ini dikembangkan menggunakan Unity dan Vuforia untuk teknologi AR, dengan algoritma simulasi
                rangkaian yang dikembangkan khusus untuk berjalan secara efisien pada perangkat mobile.
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
              alt="AuRRaL Application Overview"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* App Screens - 3 column grid */}
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
                alt="Component Recognition"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengenalan komponen elektronik dengan AR</p>
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
                alt="Circuit Simulation"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Simulasi rangkaian listrik dengan visualisasi arus</p>
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
                alt="Learning Mode"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Mode pembelajaran dengan tutorial interaktif</p>
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
                Implementasi aplikasi AuRRaL dalam pembelajaran teknik elektro menghasilkan beberapa dampak positif:
              </p>

              <ul className="text-white">
                <li>
                  Peningkatan 40% dalam pemahaman konsep rangkaian listrik pada siswa yang menggunakan aplikasi
                  dibandingkan dengan metode pembelajaran tradisional
                </li>
                <li>Peningkatan 35% dalam skor ujian praktikum rangkaian listrik</li>
                <li>Pengurangan 50% dalam waktu yang dibutuhkan untuk memahami konsep dasar rangkaian listrik</li>
                <li>Peningkatan 60% dalam minat dan engagement siswa terhadap mata pelajaran teknik elektro</li>
                <li>Feedback positif dari pengajar mengenai efektivitas aplikasi sebagai alat bantu pembelajaran</li>
                <li>Adopsi aplikasi oleh 12 institusi pendidikan teknik dalam 6 bulan pertama setelah peluncuran</li>
              </ul>

              <p className="text-white">
                Aplikasi AuRRaL telah menjadi alat pembelajaran yang efektif, membantu siswa memvisualisasikan konsep
                abstrak dalam rangkaian listrik dan meningkatkan pemahaman mereka tentang prinsip-prinsip dasar teknik
                elektro. Aplikasi ini juga telah menerima penghargaan inovasi dalam pendidikan teknik dari asosiasi
                pendidikan nasional.
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
              href="/case-studies/kurnia-interior"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              Kurnia Interior
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
