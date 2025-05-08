"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function DewinadulangCaseStudy() {
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
              Dewinadulang.com
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Virtual reality tour untuk memperkenalkan destinasi wisata Dewi Nadulang menggunakan platform theasys.io.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">VR Tour</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Tourism</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">360° Photography</span>
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
            alt="Dewinadulang.com VR Tour Hero"
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
                Dewi Nadulang adalah destinasi wisata alam yang terletak di Indonesia dengan pemandangan yang indah
                namun belum banyak dikenal oleh wisatawan. Untuk meningkatkan visibilitas dan daya tarik destinasi ini,
                diperlukan cara inovatif untuk memperkenalkan keindahannya kepada calon pengunjung.
              </p>

              <p className="text-custom-dark">
                Sebagai developer, saya bertanggung jawab untuk menciptakan virtual reality tour yang memungkinkan calon
                pengunjung menjelajahi Dewi Nadulang secara virtual sebelum mengunjunginya secara langsung. Proyek ini
                menggunakan teknologi 360° photography dan platform theasys.io untuk menciptakan pengalaman immersive
                yang menarik.
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
                Pengembangan virtual reality tour untuk Dewi Nadulang menghadirkan beberapa tantangan:
              </p>

              <ul className="text-white">
                <li>
                  Mengambil foto 360° berkualitas tinggi di berbagai lokasi dengan kondisi pencahayaan dan cuaca yang
                  bervariasi
                </li>
                <li>
                  Menciptakan alur navigasi yang intuitif antara berbagai titik panorama untuk memberikan pengalaman
                  penjelajahan yang mulus
                </li>
                <li>
                  Mengintegrasikan informasi kontekstual tentang berbagai lokasi dan atraksi tanpa mengganggu pengalaman
                  immersive
                </li>
                <li>
                  Memastikan performa yang optimal pada berbagai perangkat, termasuk desktop, mobile, dan headset VR
                </li>
                <li>
                  Mengoptimalkan ukuran file gambar panorama untuk memastikan waktu loading yang cepat tanpa
                  mengorbankan kualitas visual
                </li>
                <li>
                  Menciptakan antarmuka yang user-friendly untuk pengguna yang mungkin belum familiar dengan navigasi VR
                </li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menciptakan keseimbangan antara kualitas visual yang tinggi dan performa yang
                optimal, sambil memastikan bahwa pengalaman VR dapat diakses oleh berbagai jenis pengguna.
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
                Proses pengembangan virtual reality tour untuk Dewi Nadulang melibatkan beberapa tahap:
              </p>

              <ol className="text-custom-dark">
                <li>Survei lokasi dan perencanaan titik-titik panorama strategis yang akan diambil</li>
                <li>
                  Pengambilan foto 360° menggunakan kamera khusus dengan teknik HDR untuk menangani variasi pencahayaan
                </li>
                <li>
                  Stitching dan post-processing foto panorama untuk menghasilkan gambar 360° yang mulus dan berkualitas
                  tinggi
                </li>
                <li>Pengembangan peta navigasi dan perencanaan alur perjalanan virtual</li>
                <li>Implementasi tour menggunakan platform theasys.io dengan kustomisasi antarmuka dan navigasi</li>
                <li>Penambahan hotspot informatif dan elemen interaktif pada berbagai titik menarik</li>
                <li>Integrasi narasi audio dan informasi tekstual untuk memperkaya pengalaman</li>
                <li>Optimasi performa dan testing pada berbagai perangkat</li>
                <li>Pengembangan website landing page yang menghosting VR tour</li>
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
                alt="360 Photography Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Proses pengambilan foto 360° di lokasi</p>
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
                alt="VR Tour Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Pengembangan tour dengan theasys.io</p>
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
                Virtual reality tour Dewi Nadulang yang saya kembangkan memiliki beberapa fitur utama:
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>15 Titik Panorama Strategis:</strong> Mencakup semua atraksi utama dan pemandangan indah di
                  Dewi Nadulang
                </li>
                <li>
                  <strong>Navigasi Intuitif:</strong> Dengan peta interaktif dan indikator arah yang jelas untuk
                  memudahkan penjelajahan
                </li>
                <li>
                  <strong>Hotspot Informatif:</strong> Memberikan informasi kontekstual tentang flora, fauna, sejarah,
                  dan fakta menarik di berbagai lokasi
                </li>
                <li>
                  <strong>Narasi Audio:</strong> Panduan audio yang menjelaskan berbagai atraksi dan memberikan
                  pengalaman yang lebih immersive
                </li>
                <li>
                  <strong>Mode Siang dan Malam:</strong> Memungkinkan pengunjung melihat lokasi dalam kondisi
                  pencahayaan yang berbeda
                </li>
                <li>
                  <strong>Kompatibilitas Multi-platform:</strong> Berfungsi dengan baik pada desktop, mobile, dan
                  headset VR seperti Google Cardboard
                </li>
                <li>
                  <strong>Integrasi Media Sosial:</strong> Memungkinkan pengunjung berbagi pengalaman VR mereka di
                  platform media sosial
                </li>
              </ul>

              <p className="text-custom-dark">
                Tour ini dihosting pada website Dewinadulang.com yang juga menyediakan informasi tambahan tentang
                destinasi, cara mencapai lokasi, akomodasi terdekat, dan tips perjalanan.
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
              alt="Dewinadulang VR Tour Overview"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* VR Tour Screens - 3 column grid */}
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
                alt="Panorama View"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Tampilan panorama air terjun utama</p>
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
                alt="Interactive Map"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Peta interaktif untuk navigasi</p>
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
                alt="Information Hotspot"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Hotspot informatif tentang flora lokal</p>
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
                Setelah peluncuran virtual reality tour Dewi Nadulang, beberapa hasil positif telah dicapai:
              </p>

              <ul className="text-white">
                <li>Peningkatan 120% dalam jumlah pengunjung website dalam 6 bulan pertama</li>
                <li>Peningkatan 85% dalam jumlah pengunjung fisik ke destinasi Dewi Nadulang</li>
                <li>
                  Rata-rata waktu yang dihabiskan di VR tour mencapai 8 menit, menunjukkan tingkat engagement yang
                  tinggi
                </li>
                <li>Peningkatan 150% dalam mentions di media sosial tentang Dewi Nadulang</li>
                <li>
                  Feedback positif dari pengunjung yang menyatakan bahwa VR tour membantu mereka merencanakan kunjungan
                  dengan lebih baik
                </li>
                <li>Penghargaan "Inovasi Digital dalam Pariwisata" dari asosiasi pariwisata lokal</li>
              </ul>

              <p className="text-white">
                Virtual reality tour ini telah menjadi alat pemasaran yang efektif untuk Dewi Nadulang, membantu
                meningkatkan visibilitas destinasi dan menarik lebih banyak pengunjung. Selain itu, tour ini juga
                berfungsi sebagai alat edukasi yang membantu pengunjung memahami nilai ekologis dan budaya dari
                destinasi ini.
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
              href="/case-studies/aurral"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              AuRRaL
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
