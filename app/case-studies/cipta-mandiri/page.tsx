"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function CiptaMandiriCaseStudy() {
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

  const techStack = [
    { category: t("Backend"), items: ["PHP 8.3", "Laravel 11", "MySQL 8"] },
    { category: t("Frontend"), items: ["Filament 3", "Livewire 3", "Alpine.js", "TailwindCSS 3"] },
    { category: t("Dokumen"), items: ["dompdf", "LibreOffice Headless", "Python 3 + PyMuPDF"] },
    { category: t("Infrastruktur"), items: ["Ubuntu 24.04 LTS", "Nginx + PHP-FPM", "Cloud VPS Jakarta", "HTTPS / SSL"] },
  ]

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
            <motion.p className="text-sm text-gray-500 mb-3 uppercase tracking-widest" variants={fadeIn}>
              Apr 2026 – Jun 2026
            </motion.p>

            <motion.h1 className="text-4xl md:text-6xl font-bold text-custom-dark mb-6 leading-tight" variants={fadeIn}>
              EXPERT & TENDER ADMINISTRATION SYSTEM
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Sistem administrasi terpusat berbasis web untuk PT Cipta Mandiri Perencana mengelola ratusan tenaga ahli, tender, dan penugasan, sekaligus mengotomasi pembuatan dokumen CV dan surat resmi.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 mb-12" variants={fadeIn}>
              {["Laravel 11", "Filament 3", "Livewire 3", "MySQL 8", "dompdf", "LibreOffice", "PyMuPDF", "Cloud VPS"].map((tag) => (
                <span key={tag} className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{tag}</span>
              ))}
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
            src="/assets/cipta-ss.png"
            alt="Expert & Tender Administration System Hero"
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
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t("PT Cipta Mandiri Perencana adalah perusahaan konsultan perencanaan yang mengelola ratusan tenaga ahli dan tender proyek secara bersamaan. Sebelumnya, seluruh proses pencatatan dilakukan secara manual menggunakan spreadsheet dan dokumen terpisah rentan terhadap kesalahan, duplikasi data, dan keterlambatan penyiapan dokumen.")}
              </p>
              <p className="text-custom-dark">
                {t("Sistem ini dibangun sebagai sumber kebenaran tunggal (single source of truth) yang mengintegrasikan manajemen tenaga ahli, tender, penugasan, dan otomasi dokumen dalam satu platform web yang dapat diakses oleh seluruh tim kapan saja dan di mana saja.")}
              </p>
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
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("The Challenge")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                {t("Pengelolaan administrasi tender secara manual menimbulkan berbagai hambatan operasional yang berdampak langsung pada efisiensi dan akurasi tim.")}
              </p>
              <ul className="text-white">
                <li>{t("Data tenaga ahli tersebar di banyak file spreadsheet yang sulit diperbarui secara konsisten dan rawan duplikasi.")}</li>
                <li>{t("Pembuatan CV dan surat resmi dilakukan manual satu per satu, membutuhkan waktu berjam-jam untuk setiap pengajuan tender.")}</li>
                <li>{t("Tidak ada sistem terpusat untuk melacak status tender (menang/kalah), jadwal, dan penugasan tenaga ahli.")}</li>
                <li>{t("Perhitungan total durasi pengalaman untuk keperluan sertifikasi dan dokumen penawaran dilakukan secara manual dan rentan salah hitung.")}</li>
                <li>{t("Dokumen final berupa gabungan banyak PDF harus disusun ulang secara manual setiap kali ada tender baru.")}</li>
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
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Fitur Utama")}
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
              {[
                {
                  icon: "👤",
                  title: t("Manajemen Tenaga Ahli"),
                  desc: t("Data terpusat seluruh tenaga ahli beserta riwayat pengalaman proyek, sertifikasi, dan dokumen pendukung."),
                },
                {
                  icon: "📋",
                  title: t("Manajemen Tender"),
                  desc: t("Pencatatan tender lengkap dengan status menang/kalah, jadwal pelaksanaan, durasi, dan penugasan ahli."),
                },
                {
                  icon: "📄",
                  title: t("Cetak Dokumen Otomatis"),
                  desc: t("Generate CV, Surat Pernyataan, dan Surat Keterangan dalam hitungan detik bukan jam menggunakan dompdf dan LibreOffice headless."),
                },
                {
                  icon: "🔗",
                  title: t("Gabung PDF Otomatis"),
                  desc: t("PyMuPDF menggabungkan banyak dokumen PDF menjadi satu file siap kirim untuk setiap paket tender."),
                },
                {
                  icon: "✍️",
                  title: t("Tanda Tangan Digital & Kop Surat"),
                  desc: t("Upload template kop surat dan tanda tangan digital yang diaplikasikan otomatis ke setiap dokumen yang dicetak."),
                },
                {
                  icon: "📊",
                  title: t("Dashboard Statistik"),
                  desc: t("Visualisasi jumlah tenaga ahli, total tender, win-rate, dan grafik tren per tahun dalam satu halaman ringkasan."),
                },
                {
                  icon: "🏢",
                  title: t("Pengalaman Perusahaan (CMP)"),
                  desc: t("Data master pengalaman perusahaan yang dapat dipilih saat pencetakan CV dengan perhitungan total durasi otomatis."),
                },
                {
                  icon: "📱",
                  title: t("Responsif & Berbahasa Indonesia"),
                  desc: t("Antarmuka Filament 3 yang mobile-friendly dan sepenuhnya dalam Bahasa Indonesia untuk kemudahan seluruh tim."),
                },
              ].map((feature) => (
                <div key={feature.title} className="custom-card p-6">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-lg text-custom-dark mb-2">{feature.title}</h3>
                  <p className="text-custom-dark text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Spesifikasi Teknologi")}
            </motion.h2>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={fadeIn}>
              {techStack.map((group) => (
                <div key={group.category} className="custom-card p-6">
                  <h3 className="font-bold text-base text-custom-dark mb-3 uppercase tracking-wide opacity-60">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="bg-black/10 text-custom-dark px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video / Demo */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Demo Aplikasi")}
            </motion.h2>

            <motion.div className="custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark mb-6">
                {t("Tonton rekaman demo aplikasi Expert & Tender Administration System berikut.")}
              </p>

              {/* Placeholder - ganti FILE_ID dengan ID Google Drive video demo */}
              <div className="relative w-full aspect-video border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 text-sm text-center px-8">
                  {t("Video demo belum tersedia. Ganti FILE_ID pada src iframe dengan ID Google Drive video Anda.")}
                  
                    
                    <iframe
                      src="https://drive.google.com/file/d/1R8WOHkYCbwZo2G6ZA-u8-swkOUlmm5Nz/preview"
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      allowFullScreen
                      title="Demo Expert Tender System"
                      className="absolute inset-0 w-full h-full border-none"
                    />
                 
                </p>
              </div>
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
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("Results")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">
                {t("Sistem berhasil menggantikan seluruh proses manual dengan alur kerja digital yang terstruktur, menghasilkan efisiensi signifikan bagi tim administrasi PT Cipta Mandiri Perencana.")}
              </p>
              <ul className="text-white">
                <li>{t("Waktu pembuatan dokumen CV dan surat resmi berkurang dari berjam-jam menjadi hitungan detik berkat otomasi dompdf dan LibreOffice headless.")}</li>
                <li>{t("Ratusan data tenaga ahli dan tender tersentralisasi dalam satu database yang konsisten dan mudah dicari.")}</li>
                <li>{t("Aplikasi berjalan 24/7 di Cloud VPS Jakarta dengan HTTPS, dapat diakses kapan saja oleh seluruh anggota tim.")}</li>
                <li>{t("Perhitungan durasi pengalaman untuk dokumen penawaran dilakukan otomatis, menghilangkan risiko salah hitung manual.")}</li>
                <li>{t("Dashboard statistik memberikan visibilitas instan terhadap win-rate tender dan kapasitas tenaga ahli yang tersedia.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Next Project */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/kreasi-kode-biner" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : PT KREASI KODE BINER")}
        </Link>
      </footer>
    </main>
  )
}