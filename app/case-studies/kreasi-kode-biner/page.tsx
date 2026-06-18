"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function KreasiKodeBinerCaseStudy() {
  const { t } = useLanguage()

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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold text-custom-dark mb-6" variants={fadeIn}>
              PT KREASI KODE BINER
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Membangun website company profile modern untuk PT Kreasi Kode Biner sebuah perusahaan teknologi yang bergerak di bidang pengembangan software, IoT, dan solusi digital inovatif.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Company Profile</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Framer Motion</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Web Design</span>
            </motion.div>

            {/* Website Link */}
            <motion.div variants={fadeIn}>
              <a
                href="https://www.kreasikodebiner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 custom-button px-6 py-3 text-white font-medium rounded"
              >
                <ExternalLink size={18} />
                {t("Kunjungi Website")}
              </a>
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
            src="/assets/kkb-ss.png"
            alt="PT Kreasi Kode Biner Website Hero"
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t("PT Kreasi Kode Biner adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital, mulai dari software development, IoT, hingga aplikasi mobile dan web. Website company profile ini dirancang untuk merepresentasikan identitas dan kapabilitas perusahaan secara profesional kepada calon klien dan mitra bisnis.")}
              </p>
              <p className="text-custom-dark">
                {t("Proyek ini mencakup perancangan UI/UX yang bersih dan modern, animasi yang halus untuk meningkatkan pengalaman pengguna, serta struktur konten yang terorganisir untuk menampilkan portofolio, layanan, dan profil tim perusahaan.")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latar Belakang */}
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Latar Belakang")}
            </motion.h2>

            <motion.div className="mb-8" variants={fadeIn}>
              <p className="text-lg text-custom-dark mb-8">
                {t("Di era digital yang semakin kompetitif, kehadiran online yang kuat menjadi kebutuhan utama bagi perusahaan teknologi. PT Kreasi Kode Biner membutuhkan website company profile yang tidak hanya informatif, tetapi juga mencerminkan kemampuan teknis dan keahlian tim mereka secara visual dan fungsional. Website ini dirancang sebagai wajah digital perusahaan yang pertama kali dilihat oleh klien potensial.")}
              </p>
            </motion.div>

            {/* Video Record */}
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
                  src="https://drive.google.com/file/d/16L-BbDqiBx_TZyJzA72nmmlvedcVGNll/preview"
                  title="Video Record PT Kreasi Kode Biner Website"
                  loading="lazy"
                  allow="autoplay"
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

      {/* The Challenge */}
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("The Challenge")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                {t("Tantangan utama dalam membangun website ini adalah menyampaikan identitas perusahaan teknologi yang kompleks secara sederhana, menarik, dan mudah dipahami oleh berbagai segmen audiens dari klien korporat hingga mitra startup.")}
              </p>
              <ul className="text-white">
                <li>{t("Menampilkan beragam layanan teknis (software, IoT, mobile, web) dalam satu halaman yang terstruktur dan tidak membingungkan.")}</li>
                <li>{t("Membangun kepercayaan calon klien melalui tampilan profesional dan portofolio proyek yang terorganisir.")}</li>
                <li>{t("Mengoptimalkan performa dan responsivitas website agar tampil sempurna di semua perangkat.")}</li>
                <li>{t("Menyeimbangkan estetika visual yang modern dengan kecepatan loading yang optimal.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Key Features")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <ul className="text-custom-dark">
                <li>{t("Landing page dinamis dengan animasi scroll yang halus menggunakan Framer Motion untuk kesan profesional.")}</li>
                <li>{t("Halaman layanan yang terstruktur menampilkan bidang keahlian seperti software development, IoT, dan solusi digital.")}</li>
                <li>{t("Portofolio proyek interaktif yang menampilkan case study unggulan perusahaan.")}</li>
                <li>{t("Profil tim yang memperkenalkan SDM dan keahlian masing-masing anggota.")}</li>
                <li>{t("Formulir kontak terintegrasi untuk memudahkan calon klien menghubungi perusahaan.")}</li>
                <li>{t("Desain fully responsive yang optimal di desktop, tablet, maupun mobile.")}</li>
              </ul>
            </motion.div>
          </motion.div>
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("Results")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                {t("Website company profile PT Kreasi Kode Biner berhasil dibangun dan diluncurkan sebagai representasi digital resmi perusahaan, memberikan dampak nyata terhadap kehadiran online dan kredibilitas bisnis.")}
              </p>
              <ul className="text-white">
                <li>{t("Identitas perusahaan tersampaikan secara profesional melalui desain modern dan konsisten.")}</li>
                <li>{t("Peningkatan kredibilitas di hadapan calon klien berkat tampilan portofolio yang terstruktur.")}</li>
                <li>{t("Website dapat diakses di semua perangkat dengan performa dan tampilan yang optimal.")}</li>
                <li>{t("Kemudahan bagi calon mitra untuk memahami layanan dan menghubungi tim perusahaan.")}</li>
              </ul>
            </motion.div>

            {/* CTA visit website */}
            <motion.div className="mt-10 text-center" variants={fadeIn}>
              <a
                href="https://www.kreasikodebiner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-custom-dark px-8 py-3 font-medium rounded hover:bg-gray-100 transition-colors"
              >
                <ExternalLink size={18} />
                {t("Kunjungi kreasikodebiner.com")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Next Project */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/digital-twin" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : DIGITAL TWIN KOMATSU")}
        </Link>
      </footer>
    </main>
  )
}