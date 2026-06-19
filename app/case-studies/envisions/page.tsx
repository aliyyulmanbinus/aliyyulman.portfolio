"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function EnvisionsCaseStudy() {
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
      {/* Responsive Header */}
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
              Envisions.id
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t(
                "Membangun website profil perusahaan berbasis web untuk Envisions, sebuah platform IT Solution yang membantu bisnis mengotomatisasi proses, mengoptimalkan produktivitas, dan meningkatkan pengalaman pelanggan."
              )}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">WordPress</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Elementor Pro</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Company Profile</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">IT Solution</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Cipedes Tech Teams</span>
            </motion.div>
            <motion.div variants={fadeIn}>
              <a
                href="https://envisions.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 custom-button px-6 py-3 text-white font-medium rounded"
              >
                <ExternalLink size={18} />
                {t("Kunjungi Envisions.id")}
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
            src="/assets/envisions/home.png"
            alt="Digital Twin Komatsu PC-200 Hero"
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
                {t(
                  "Envisions adalah sebuah platform IT Solution berbasis web yang dirancang untuk membantu bisnis mengatasi berbagai tantangan operasional. Website ini membantu dan mempermudah cara bisnis mengotomatisasi semua proses bisnis, mengoptimalkan produktivitas, mengurangi biaya operasional, dan meningkatkan pengalaman pelanggan."
                )}
              </p>

              <p className="text-custom-dark">
                {t(
                  "Proyek ini dikerjakan oleh Cipedes Tech Teams yang berlokasi di Jl. Cipedes Atas No. 22, Kel. Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat. Sebagai web developer, saya bertanggung jawab untuk mengembangkan website profil perusahaan Envisions menggunakan WordPress dengan total anggaran proyek sebesar Rp 3.000.000,-."
                )}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack & Plugins */}
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
              {t("Tech Stack & Plugins")}
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
              {/* WordPress */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">WordPress</h3>
                <p className="text-sm text-custom-dark">
                  {t("Open source software untuk pembuatan website statis. Platform utama yang digunakan untuk membangun seluruh website profil perusahaan Envisions.")}
                </p>
              </div>

              {/* Yoast SEO */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">Yoast SEO (Free)</h3>
                <p className="text-sm text-custom-dark">
                  {t("Memudahkan mesin pencari untuk menemukan halaman/website dan menempatkan di halaman pertama di mesin pencari dengan keyword yang ditentukan oleh user.")}
                </p>
              </div>

              {/* Google Analytics */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">Google Site Kit (Free)</h3>
                <p className="text-sm text-custom-dark">
                  {t("Mengambil statistik user yang membuka web Envisions melalui integrasi Google Analytics langsung di dashboard WordPress.")}
                </p>
              </div>

              {/* Form Vibes */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">Form Vibes (Free)</h3>
                <p className="text-sm text-custom-dark">
                  {t("Plugin form kontak untuk menerima pesan dan permintaan informasi dari pengunjung website.")}
                </p>
              </div>

              {/* Elementor */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">Elementor + Essential Addons</h3>
                <p className="text-sm text-custom-dark">
                  {t("Digunakan untuk mengubah tampilan web dengan mudah. Dikombinasikan dengan Essential Addons for Elementor (Free & Pro) untuk memperluas kemampuan desain.")}
                </p>
              </div>

              {/* WhatsApp */}
              <div className="custom-card p-6">
                <h3 className="text-lg font-bold text-custom-dark mb-2">OneClick Chat to Order (Free)</h3>
                <p className="text-sm text-custom-dark">
                  {t("Integrasi tombol WhatsApp untuk memudahkan pengunjung menghubungi tim Envisions secara langsung melalui WhatsApp.")}
                </p>
              </div>
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
              {t("The Challenge")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">{t("Tantangan utama dalam pengembangan website ini meliputi:")}</p>

              <ul className="text-white">
                <li>
                  {t(
                    "Menjelaskan konsep IT Solution dan otomatisasi proses bisnis dengan cara yang mudah dipahami oleh berbagai segmen pengguna, khususnya pelaku bisnis yang ingin mengenal layanan Envisions."
                  )}
                </li>
                <li>
                  {t(
                    "Membangun sistem CMS yang memungkinkan tim Envisions memperbarui konten secara mandiri tanpa memerlukan keahlian teknis."
                  )}
                </li>
                <li>
                  {t(
                    "Mengoptimalkan performa website dengan tetap mempertahankan elemen visual yang menarik dan profesional."
                  )}
                </li>
                <li>
                  {t(
                    "Menerapkan strategi SEO on-page yang efektif menggunakan Yoast SEO untuk meningkatkan visibilitas di mesin pencari."
                  )}
                </li>
                <li>
                  {t("Memastikan website responsif di semua perangkat, dari desktop hingga mobile.")}
                </li>
                <li>
                  {t(
                    "Mengintegrasikan berbagai plugin (Google Analytics, Form, WhatsApp) secara mulus tanpa mengorbankan kecepatan halaman."
                  )}
                </li>
              </ul>

              <p className="text-white">
                {t(
                  "Tantangan utama: menyeimbangkan estetika visual yang menarik dengan fungsionalitas dan kejelasan pesan bisnis, sekaligus memenuhi anggaran proyek yang telah ditetapkan."
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("Development Process")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">{t("Tahapan pengembangan website meliputi:")}</p>

              <ol className="text-custom-dark">
                <li>{t("Discovery dan analisis kebutuhan melalui diskusi dengan tim Envisions.")}</li>
                <li>{t("Pembuatan wireframe dan mockup untuk validasi visual.")}</li>
                <li>
                  {t(
                    "Instalasi WordPress dan pemilihan tema yang sesuai sebagai fondasi website."
                  )}
                </li>
                <li>
                  {t(
                    "Pengembangan struktur website dan implementasi desain menggunakan Elementor beserta Essential Addons for Elementor (Free dan Pro)."
                  )}
                </li>
                <li>
                  {t(
                    "Integrasi plugin: Yoast SEO untuk optimasi mesin pencari, Google Site Kit untuk analitik, Form Vibes untuk formulir kontak, dan OneClick Chat to Order untuk tombol WhatsApp."
                  )}
                </li>
                <li>
                  {t(
                    "Optimasi SEO on-page dan teknikal menggunakan Yoast SEO."
                  )}
                </li>
                <li>{t("Pengujian di berbagai perangkat dan browser.")}</li>
                <li>
                  {t(
                    "Pelatihan tim Envisions untuk pengelolaan konten website secara mandiri."
                  )}
                </li>
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
                src="/assets/envisions/envisions.png"
                alt="Wireframing Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Proses wireframing dan desain mockup.")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/envisions/envisions.png"
                alt="WordPress Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">
                {t("Pengembangan website menggunakan WordPress dan Elementor.")}
              </p>
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
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
              {t("The Solution")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">{t("Fitur utama website yang dibangun:")}</p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Profil Perusahaan Lengkap:</strong>{" "}
                  {t(
                    "Menampilkan informasi komprehensif tentang Envisions sebagai platform IT Solution yang membantu bisnis mengotomatisasi proses dan meningkatkan produktivitas."
                  )}
                </li>
                <li>
                  <strong>Halaman Layanan:</strong>{" "}
                  {t(
                    "Menampilkan layanan-layanan Envisions secara terstruktur dengan penjelasan yang mudah dipahami oleh pengguna umum maupun pelaku bisnis."
                  )}
                </li>
                <li>
                  <strong>Formulir Kontak (Form Vibes):</strong>{" "}
                  {t(
                    "Formulir kontak terintegrasi untuk mempermudah pengunjung menghubungi tim Envisions."
                  )}
                </li>
                <li>
                  <strong>Tombol WhatsApp (OneClick Chat to Order):</strong>{" "}
                  {t(
                    "Integrasi WhatsApp langsung di website untuk komunikasi cepat antara pengunjung dan tim Envisions."
                  )}
                </li>
                <li>
                  <strong>SEO Optimization (Yoast SEO):</strong>{" "}
                  {t(
                    "Optimasi mesin pencari untuk membantu website ditemukan di halaman pertama hasil pencarian dengan keyword yang relevan."
                  )}
                </li>
                <li>
                  <strong>Analitik Website (Google Site Kit):</strong>{" "}
                  {t(
                    "Integrasi Google Analytics untuk memantau statistik pengunjung dan perilaku pengguna secara real-time."
                  )}
                </li>
                <li>
                  <strong>Desain Responsif (Elementor + Essential Addons):</strong>{" "}
                  {t(
                    "Tampilan yang dioptimalkan untuk semua ukuran layar menggunakan Elementor Page Builder dan Essential Addons."
                  )}
                </li>
              </ul>

              <p className="text-custom-dark">
                {t(
                  "Optimasi performa diterapkan melalui lazy loading, minifikasi CSS/JS, dan sistem caching. Seluruh plugin yang digunakan merupakan plugin free kecuali Essential Addons for Elementor versi Pro, sehingga total biaya proyek tetap efisien di angka Rp 3.000.000,- untuk jasa pengerjaan."
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
              src="/assets/envisions/home.png"
              alt="Envisions.id Website Overview"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Website Screens - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/envisions/home.png?height=800&width=400"
                alt="Homepage Design"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Homepage profil perusahaan Envisions")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/envisions/service.png?height=800&width=400"
                alt="Services Page"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Halaman layanan IT Solution")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/envisions/form.png?height=800&width=400"
                alt="Contact Form"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Halaman kontak dengan formulir terintegrasi")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Budget & Scope */}
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
              {t("Estimasi Biaya")}
            </motion.h2>

            <motion.div className="custom-card p-8 overflow-x-auto" variants={fadeIn}>
              <table className="w-full text-sm text-custom-dark border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-8 font-semibold">No.</th>
                    <th className="text-left py-3 pr-8 font-semibold">{t("Kebutuhan")}</th>
                    <th className="text-right py-3 font-semibold">{t("Biaya")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/10">
                    <td className="py-3 pr-8">1.</td>
                    <td className="py-3 pr-8">Plugin</td>
                    <td className="py-3 text-right">Rp. 0,-</td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3 pr-8">2.</td>
                    <td className="py-3 pr-8">Jasa (WordPress)</td>
                    <td className="py-3 text-right">Rp. 3.000.000,-</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-3" colSpan={2}>TOTAL</td>
                    <td className="py-3 text-right">Rp. 3.000.000,-</td>
                  </tr>
                </tbody>
              </table>
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
              <p className="text-white">{t("Hasil yang dicapai setelah peluncuran website meliputi:")}</p>

              <ul className="text-white">
                <li>
                  {t(
                    "Website profil perusahaan Envisions berhasil dibangun sesuai spesifikasi menggunakan WordPress dengan seluruh plugin yang direncanakan."
                  )}
                </li>
                <li>
                  {t(
                    "Optimasi SEO on-page berjalan melalui Yoast SEO untuk meningkatkan visibilitas pencarian online Envisions."
                  )}
                </li>
                <li>
                  {t(
                    "Statistik pengunjung dapat dipantau secara real-time oleh tim Envisions melalui dashboard Google Site Kit."
                  )}
                </li>
                <li>
                  {t(
                    "Tim Envisions dapat memperbarui konten website secara mandiri berkat sistem CMS WordPress yang ramah pengguna."
                  )}
                </li>
                <li>
                  {t(
                    "Integrasi WhatsApp dan formulir kontak mempermudah calon klien menghubungi Envisions secara langsung."
                  )}
                </li>
                <li>
                  {t(
                    "Proyek selesai sesuai anggaran yang ditetapkan sebesar Rp 3.000.000,- untuk jasa pengerjaan, dengan seluruh plugin menggunakan versi gratis (kecuali Essential Addons Pro)."
                  )}
                </li>
              </ul>

              <p className="text-white">
                {t(
                  "Website menjadi sarana pemasaran digital yang efektif bagi Envisions untuk menjangkau bisnis-bisnis yang membutuhkan solusi otomatisasi dan peningkatan produktivitas."
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
              href="/case-studies/dewinadulang"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              Dewinadulang.com
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}