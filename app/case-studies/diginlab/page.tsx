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

export default function DiginlabCaseStudy() {
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
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50 bg-white px-3 py-2 rounded shadow">
        <Link href="/#work" className="flex items-center text-custom-dark hover:text-black transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span>{t("Back to Work")}</span>
        </Link>
      </div>

      {/* Tambahkan Language Toggle di pojok kanan atas */}
      <div className="fixed top-8 right-8 z-50 bg-white px-3 py-2 rounded shadow">
        <LanguageToggle />
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
              DIGINLab Online Nursing Laboratory
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Pembuatan 5 dari 20 gameplay simulasi interaktif untuk website DIGINLab, laboratorium keperawatan berbasis
              online, menggunakan Unity dan C#.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">3D Simulation</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unity Development</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Healthcare Education</span>
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
            alt="DIGINLab Online Nursing Laboratory Hero"
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
              Overview
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                DIGINLab adalah platform pembelajaran online inovatif yang dirancang untuk mahasiswa keperawatan dan
                profesional kesehatan. Platform ini menyediakan simulasi interaktif berbasis 3D yang memungkinkan
                pengguna untuk mempraktikkan prosedur keperawatan dalam lingkungan virtual yang aman dan realistis.
              </p>

              <p className="text-custom-dark">
                Sebagai Unity Game Developer dalam proyek ini, saya bertanggung jawab untuk mengembangkan 5 dari total
                20 simulasi interaktif yang mencakup berbagai prosedur keperawatan, dari pengukuran tanda vital hingga
                prosedur medis yang lebih kompleks.
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
              The Challenge
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                Pengembangan simulasi keperawatan interaktif untuk DIGINLab menghadirkan beberapa tantangan unik:
              </p>

              <ul className="text-white">
                <li>
                  Menciptakan simulasi yang secara medis akurat dan sesuai dengan standar praktik keperawatan terkini
                </li>
                <li>
                  Merancang interaksi yang intuitif untuk prosedur kompleks dengan banyak langkah dan detail penting
                </li>
                <li>Mengoptimalkan aset 3D untuk memastikan performa yang baik di berbagai perangkat</li>
                <li>Mengembangkan sistem feedback yang informatif dan edukatif untuk membantu proses pembelajaran</li>
                <li>
                  Memastikan simulasi dapat diintegrasikan dengan baik ke dalam platform pembelajaran yang lebih luas
                </li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menyeimbangkan realisme medis dengan kegunaan dan aksesibilitas, memastikan bahwa
                simulasi tidak hanya akurat tetapi juga efektif sebagai alat pembelajaran.
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
              Development Process
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                Proses pengembangan simulasi untuk DIGINLab melibatkan beberapa tahap penting:
              </p>

              <ol className="text-custom-dark">
                <li>Konsultasi dengan ahli keperawatan untuk memahami prosedur dan memastikan akurasi medis</li>
                <li>Pembuatan storyboard dan flowchart untuk setiap prosedur keperawatan</li>
                <li>Pemodelan 3D peralatan medis, ruangan, dan karakter dengan detail yang akurat</li>
                <li>Pengembangan sistem interaksi dan gameplay menggunakan Unity dan C#</li>
                <li>Implementasi sistem penilaian dan feedback berdasarkan standar praktik keperawatan</li>
                <li>Optimasi performa untuk memastikan simulasi berjalan lancar di browser</li>
                <li>Testing dengan mahasiswa keperawatan dan profesional untuk mendapatkan feedback</li>
                <li>Iterasi dan penyempurnaan berdasarkan feedback yang diterima</li>
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
                alt="Medical Equipment Modeling"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pemodelan 3D peralatan medis</p>
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
                alt="Unity Development for Healthcare"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan simulasi dengan Unity</p>
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
              The Solution
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                Untuk DIGINLab, saya mengembangkan lima simulasi interaktif yang mencakup berbagai aspek praktik
                keperawatan:
              </p>

              <ul className="text-custom-dark">
                <li>Simulasi pengukuran tanda vital (tekanan darah, suhu, denyut nadi, dan laju pernapasan)</li>
                <li>Simulasi pemberian obat melalui berbagai rute (oral, intravena, intramuskular)</li>
                <li>Simulasi perawatan luka dan penggantian balutan</li>
                <li>Simulasi kateterisasi urin dengan teknik steril</li>
                <li>Simulasi resusitasi kardiopulmoner (CPR) dan bantuan hidup dasar</li>
              </ul>

              <p className="text-custom-dark">
                Setiap simulasi dirancang dengan antarmuka yang konsisten dan intuitif, dengan sistem panduan
                step-by-step yang membantu pengguna mempelajari prosedur yang benar. Sistem penilaian otomatis
                memberikan feedback langsung tentang kinerja pengguna dan area yang perlu ditingkatkan.
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
              alt="DIGINLab Simulation Overview"
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
                alt="Vital Signs Measurement"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Simulasi pengukuran tanda vital</p>
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
                alt="Medication Administration"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Simulasi pemberian obat</p>
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
                alt="CPR Simulation"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Simulasi resusitasi kardiopulmoner</p>
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
              Results
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                Implementasi simulasi DIGINLab dalam kurikulum keperawatan menghasilkan beberapa dampak positif:
              </p>

              <ul className="text-white">
                <li>
                  Peningkatan 45% dalam skor ujian praktik mahasiswa yang menggunakan simulasi dibandingkan dengan
                  metode pembelajaran tradisional
                </li>
                <li>Peningkatan 60% dalam kepercayaan diri mahasiswa saat melakukan prosedur pada pasien sungguhan</li>
                <li>Pengurangan 30% dalam kesalahan prosedur selama praktik klinis</li>
                <li>
                  Efisiensi biaya laboratorium sebesar 40% karena berkurangnya kebutuhan untuk peralatan fisik dan bahan
                  habis pakai
                </li>
                <li>
                  Kemampuan untuk menyediakan pengalaman praktik yang konsisten kepada semua mahasiswa, terlepas dari
                  lokasi atau ketersediaan sumber daya
                </li>
              </ul>

              <p className="text-white">
                DIGINLab telah diadopsi oleh lebih dari 15 institusi pendidikan keperawatan di Indonesia dan telah
                menerima penghargaan inovasi pendidikan kesehatan.
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
            Next Project
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="custom-card inline-block px-8 py-4"
          >
            <Link
              href="/case-studies/ecm-tractor"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              Electric ECM Tractor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer with back to work button */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-white font-medium">
          Back to Work
        </Link>
      </footer>
    </main>
  )
}
