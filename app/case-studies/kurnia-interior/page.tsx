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

export default function KurniaInteriorCaseStudy() {
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
              Kurnia Interior Studio Website
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Pembuatan website company profile untuk Kurnia Interior Studio, sebuah studio desain interior yang
              menampilkan portofolio proyek, layanan desain, serta profil perusahaan.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Web Development</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Company Profile</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Interior Design</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2023</span>
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
            alt="Kurnia Interior Studio Website Hero"
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
                Kurnia Interior Studio adalah perusahaan desain interior yang fokus pada proyek residensial dan
                komersial dengan pendekatan minimalis dan modern. Mereka membutuhkan website company profile yang dapat
                menampilkan portofolio proyek mereka dengan cara yang elegan dan profesional.
              </p>

              <p className="text-custom-dark">
                Sebagai frontend web developer, saya bertanggung jawab untuk mengimplementasikan desain website yang
                telah dibuat oleh tim desain, memastikan responsivitas pada berbagai perangkat, dan mengoptimalkan
                performa website.
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
              {/* Gunakan fungsi t() untuk terjemahan */}
              {t("The Challenge")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">{t("Proyek ini menghadirkan beberapa tantangan utama:")}</p>

              <ul className="text-white">
                <li>
                  {t(
                    "Menampilkan portofolio proyek dengan gambar berkualitas tinggi tanpa mengorbankan kecepatan loading",
                  )}
                </li>
                <li>{t("Menciptakan pengalaman browsing yang mulus dan intuitif untuk pengunjung")}</li>
                <li>{t("Memastikan konsistensi visual dengan brand identity Kurnia Interior Studio")}</li>
                <li>{t("Mengimplementasikan sistem CMS yang mudah digunakan untuk pembaruan konten")}</li>
                <li>{t("Mengoptimalkan website untuk SEO agar mudah ditemukan oleh calon klien")}</li>
              </ul>

              <p className="text-white">
                {t(
                  "Selain itu, klien membutuhkan fitur galeri yang dapat menampilkan gambar proyek dengan detail yang baik, serta formulir kontak yang terintegrasi dengan sistem email mereka.",
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
                {t("Proses pengembangan website Kurnia Interior Studio dilakukan dengan pendekatan yang terstruktur:")}
              </p>

              <ol className="text-custom-dark">
                <li>{t("Analisis kebutuhan dan ekspektasi klien melalui serangkaian meeting")}</li>
                <li>{t("Pembuatan wireframe dan prototype untuk validasi konsep")}</li>
                <li>{t("Pengembangan frontend dengan HTML5, CSS3, dan JavaScript")}</li>
                <li>{t("Implementasi CMS WordPress dengan custom theme")}</li>
                <li>{t("Optimasi gambar dan aset untuk performa yang lebih baik")}</li>
                <li>{t("Testing pada berbagai perangkat dan browser")}</li>
                <li>{t("Deployment dan konfigurasi server")}</li>
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
                alt="Wireframing Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Wireframing dan prototyping website")}</p>
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
                alt="Development Session"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Proses pengembangan frontend")}</p>
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
                {t("Website yang dikembangkan untuk Kurnia Interior Studio memiliki beberapa fitur utama:")}
              </p>

              <ul className="text-custom-dark">
                <li>{t("Homepage dengan hero section yang menampilkan proyek unggulan")}</li>
                <li>{t("Galeri portofolio dengan filter berdasarkan kategori proyek")}</li>
                <li>{t("Halaman detail proyek dengan galeri gambar dan deskripsi")}</li>
                <li>{t("Halaman layanan dengan penjelasan detail setiap layanan")}</li>
                <li>{t("Halaman tentang kami yang menampilkan profil tim dan sejarah perusahaan")}</li>
                <li>{t("Formulir kontak dengan validasi dan integrasi email")}</li>
                <li>{t("Blog untuk artikel terkait desain interior")}</li>
              </ul>

              <p className="text-custom-dark">
                {t(
                  "Untuk mengoptimalkan performa, saya mengimplementasikan lazy loading untuk gambar, minifikasi CSS dan JavaScript, serta caching yang efektif. Website juga dioptimalkan untuk SEO dengan struktur yang baik, meta tags yang relevan, dan sitemap.",
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
              alt="Kurnia Interior Studio Website Screens"
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
                src="/placeholder.svg?height=800&width=400"
                alt="Homepage Design"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Homepage dengan hero section")}</p>
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
                alt="Portfolio Gallery"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Galeri portofolio dengan filter")}</p>
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
                alt="Project Detail"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Halaman detail proyek")}</p>
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
                {t("Setelah peluncuran website Kurnia Interior Studio, klien mendapatkan beberapa hasil positif:")}
              </p>

              <ul className="text-white">
                <li>{t("Peningkatan 45% dalam jumlah pengunjung website dalam 3 bulan pertama")}</li>
                <li>{t("Peningkatan 60% dalam jumlah permintaan penawaran melalui formulir kontak")}</li>
                <li>
                  {t(
                    "Peningkatan visibilitas di mesin pencari dengan posisi halaman pertama untuk beberapa kata kunci target",
                  )}
                </li>
                <li>{t("Feedback positif dari klien mengenai kemudahan penggunaan CMS untuk pembaruan konten")}</li>
                <li>{t("Pengurangan waktu loading halaman sebesar 40% dibandingkan website sebelumnya")}</li>
              </ul>

              <p className="text-white">
                {t(
                  "Website ini juga menjadi alat pemasaran yang efektif bagi Kurnia Interior Studio, membantu mereka memperluas jangkauan pasar dan menarik klien potensial baru.",
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
              href="/case-studies/pertamina-hsse"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              PERTAMINA DIGITAL HSSE
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
