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

export default function EcmTractorCaseStudy() {
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
              Electric ECM Tractor & Tractor Oil Flow
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Pengembangan 4 modul dengan lebih dari 100 gameplay flow untuk aplikasi simulasi 3D interaktif Electric
              ECM Tractor dan Tractor Oil Flow menggunakan Unreal Engine dan C++.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">3D Simulation</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unreal Engine</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Heavy Machinery</span>
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
            alt="Electric ECM Tractor Simulation Hero"
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
                Electric ECM Tractor dan Tractor Oil Flow adalah dua aplikasi simulasi 3D interaktif yang dikembangkan
                untuk pelatihan operator dan teknisi alat berat. Aplikasi ini dirancang untuk memberikan pemahaman
                mendalam tentang sistem elektrik dan hidrolik traktor modern tanpa risiko kerusakan peralatan atau
                cedera.
              </p>

              <p className="text-custom-dark">
                Sebagai Unreal Engine Developer dalam proyek ini, saya bertanggung jawab untuk mengembangkan 4 modul
                utama dengan lebih dari 100 gameplay flow yang mencakup berbagai aspek operasi, pemeliharaan, dan
                troubleshooting traktor.
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
                Pengembangan simulasi traktor interaktif menghadirkan beberapa tantangan teknis dan edukatif:
              </p>

              <ul className="text-white">
                <li>
                  Menciptakan model 3D traktor yang sangat detail dengan ribuan komponen yang berinteraksi secara
                  realistis
                </li>
                <li>Menyimulasikan sistem hidrolik dan elektrik yang kompleks dengan akurasi tinggi</li>
                <li>Mengembangkan sistem interaksi yang intuitif untuk komponen-komponen teknis yang kompleks</li>
                <li>Memastikan performa yang optimal meskipun dengan visualisasi dan simulasi fisika yang kompleks</li>
                <li>Merancang skenario pembelajaran yang progresif untuk berbagai tingkat keahlian pengguna</li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menyeimbangkan realisme teknis dengan kegunaan dan aksesibilitas, memastikan
                bahwa simulasi tidak hanya akurat tetapi juga efektif sebagai alat pembelajaran untuk operator dan
                teknisi dengan berbagai latar belakang pengetahuan.
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
                Proses pengembangan simulasi Electric ECM Tractor dan Tractor Oil Flow melibatkan beberapa tahap:
              </p>

              <ol className="text-custom-dark">
                <li>Studi mendalam tentang spesifikasi teknis dan manual operasi traktor untuk memastikan akurasi</li>
                <li>Pembuatan model 3D detail berdasarkan blueprint dan spesifikasi asli</li>
                <li>Pengembangan sistem simulasi fisika untuk hidrolik dan mekanik menggunakan Unreal Engine</li>
                <li>Pemrograman logika interaksi dan gameplay menggunakan C++ dan Blueprint</li>
                <li>Implementasi sistem tutorial dan panduan interaktif</li>
                <li>Optimasi performa untuk memastikan simulasi berjalan lancar pada hardware standar</li>
                <li>Testing dengan operator dan teknisi traktor untuk mendapatkan feedback</li>
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
                alt="3D Modeling Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Proses pemodelan 3D komponen traktor</p>
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
                alt="Unreal Engine Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan simulasi dengan Unreal Engine</p>
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
                Untuk Electric ECM Tractor dan Tractor Oil Flow, saya mengembangkan empat modul utama:
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Modul Pengenalan Sistem:</strong> Memberikan overview tentang komponen utama traktor dan
                  fungsinya
                </li>
                <li>
                  <strong>Modul Operasi:</strong> Simulasi langkah-langkah operasi traktor dari startup hingga shutdown
                </li>
                <li>
                  <strong>Modul Pemeliharaan:</strong> Prosedur pemeliharaan rutin dan penggantian komponen
                </li>
                <li>
                  <strong>Modul Troubleshooting:</strong> Simulasi berbagai skenario masalah dan langkah-langkah
                  diagnosis
                </li>
              </ul>

              <p className="text-custom-dark">
                Setiap modul mencakup berbagai skenario interaktif dengan total lebih dari 100 gameplay flow yang
                berbeda. Fitur utama dari simulasi ini meliputi:
              </p>

              <ul className="text-custom-dark">
                <li>Visualisasi X-ray untuk melihat komponen internal saat traktor beroperasi</li>
                <li>Simulasi aliran hidrolik dengan visualisasi warna untuk tekanan dan arah</li>
                <li>Sistem diagnosis interaktif untuk mengidentifikasi dan memperbaiki masalah</li>
                <li>Mode eksplorasi bebas untuk mempelajari komponen dan sistem</li>
                <li>Mode tes untuk mengevaluasi pemahaman pengguna</li>
              </ul>
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
              alt="ECM Tractor Simulation Overview"
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
                alt="Electric System Simulation"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Simulasi sistem elektrik</p>
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
                alt="Hydraulic Flow Visualization"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Visualisasi aliran hidrolik</p>
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
                alt="Troubleshooting Interface"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Antarmuka troubleshooting</p>
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
                Implementasi simulasi Electric ECM Tractor dan Tractor Oil Flow dalam program pelatihan menghasilkan
                beberapa dampak positif:
              </p>

              <ul className="text-white">
                <li>Pengurangan 40% dalam waktu pelatihan yang diperlukan untuk mencapai kompetensi dasar</li>
                <li>Peningkatan 55% dalam kemampuan diagnosis masalah di antara teknisi yang menggunakan simulasi</li>
                <li>Pengurangan 30% dalam kerusakan peralatan akibat kesalahan operator selama masa pelatihan</li>
                <li>
                  Efisiensi biaya pelatihan sebesar 60% karena berkurangnya kebutuhan untuk menggunakan traktor
                  sungguhan dalam pelatihan dasar
                </li>
                <li>
                  Kemampuan untuk melatih operator dan teknisi dalam skenario kegagalan yang tidak mungkin disimulasikan
                  dengan peralatan sungguhan karena risiko kerusakan
                </li>
              </ul>

              <p className="text-white">
                Simulasi ini telah diadopsi oleh beberapa pusat pelatihan alat berat dan telah menjadi komponen standar
                dalam kurikulum pelatihan operator dan teknisi traktor.
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
              href="/case-studies/nufish"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              NuFish
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
