"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function NufishCaseStudy() {
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
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#work" className="flex items-center text-custom-dark hover:text-black transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Work</span>
        </Link>
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
              NuFish Android Application
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Pengembangan 60% fitur inti aplikasi NuFish untuk Android sebagai full-stack developer menggunakan
              Kotlin.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Mobile App</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Android</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Kotlin</span>
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
            alt="NuFish Android Application Hero"
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
                NuFish adalah aplikasi mobile yang dirancang untuk membantu nelayan dan pembudidaya ikan dalam
                mengelola usaha perikanan mereka. Aplikasi ini menyediakan berbagai fitur seperti pencatatan hasil
                tangkapan, pemantauan kondisi budidaya, informasi cuaca dan pasang surut, serta marketplace untuk
                menjual hasil perikanan langsung ke konsumen atau distributor.
              </p>

              <p className="text-custom-dark">
                Sebagai full-stack developer dalam proyek ini, saya bertanggung jawab untuk mengembangkan 60% dari
                fitur inti aplikasi menggunakan Kotlin untuk frontend dan Firebase untuk backend. Fokus utama saya
                adalah pada pengembangan fitur pencatatan data, integrasi dengan API cuaca dan pasang surut, serta
                implementasi sistem marketplace.
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
                Pengembangan aplikasi NuFish menghadirkan beberapa tantangan unik:
              </p>

              <ul className="text-white">
                <li>
                  Merancang aplikasi yang dapat berfungsi dengan baik dalam kondisi konektivitas internet yang
                  terbatas di daerah pesisir dan perairan
                </li>
                <li>
                  Mengembangkan antarmuka yang intuitif dan mudah digunakan oleh pengguna dengan berbagai tingkat
                  literasi digital
                </li>
                <li>
                  Mengintegrasikan data dari berbagai sumber seperti API cuaca, data pasang surut, dan sistem GPS
                </li>
                <li>
                  Memastikan keamanan dan privasi data pengguna, terutama untuk informasi bisnis yang sensitif
                </li>
                <li>
                  Mengoptimalkan performa aplikasi pada berbagai perangkat Android dengan spesifikasi yang beragam
                </li>
              </ul>

              <p className="text-white">
                Tantangan utama adalah menciptakan aplikasi yang tetap bermanfaat bahkan ketika pengguna berada di
                laut dengan konektivitas terbatas, sambil tetap menyediakan fitur-fitur canggih yang membutuhkan
                koneksi internet ketika tersedia.
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
                Proses pengembangan aplikasi NuFish melibatkan beberapa tahap:
              </p>

              <ol className="text-custom-dark">
                <li>
                  Riset pengguna dengan melakukan wawancara dan observasi langsung terhadap nelayan dan pembudidaya
                  ikan
                </li>
                <li>Pembuatan wireframe dan prototype untuk validasi konsep dengan pengguna potensial</li>
                <li>Pengembangan arsitektur aplikasi dengan fokus pada kemampuan offline-first</li>
                <li>Implementasi fitur-fitur inti menggunakan Kotlin dan Android Jetpack</li>
                <li>Integrasi dengan Firebase untuk autentikasi, database, dan cloud storage</li>
                <li>Pengembangan sistem sinkronisasi data yang efisien untuk kondisi konektivitas terbatas</li>
                <li>Testing di berbagai perangkat dan kondisi konektivitas</li>
                <li>Iterasi berdasarkan feedback dari pengguna beta</li>
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
                alt="User Research with Fishermen"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Riset pengguna dengan nelayan</p>
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
                alt="App Development Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Proses pengembangan aplikasi dengan Kotlin</p>
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
                Untuk NuFish, saya mengembangkan berbagai fitur yang dirancang untuk memenuhi kebutuhan spesifik
                nelayan dan pembudidaya ikan:
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Sistem Pencatatan Offline:</strong> Memungkinkan pengguna mencatat hasil tangkapan atau data
                  budidaya bahkan tanpa koneksi internet, dengan sinkronisasi otomatis saat koneksi tersedia
                </li>
                <li>
                  <strong>Integrasi Cuaca dan Pasang Surut:</strong> Menyediakan informasi cuaca dan pasang surut
                  yang dapat diunduh sebelumnya untuk diakses saat di laut
                </li>
                <li>
                  <strong>Marketplace Perikanan:</strong> Platform untuk menjual hasil perikanan langsung ke konsumen
                  atau distributor dengan sistem penawaran dan negosiasi harga
                </li>
                <li>
                  <strong>Analitik Bisnis:</strong> Dashboard yang menampilkan tren hasil tangkapan atau produksi,
                  analisis pendapatan, dan rekomendasi untuk meningkatkan produktivitas
                </li>
                <li>
                  <strong>Komunitas Nelayan:</strong> Forum untuk berbagi informasi tentang lokasi penangkapan ikan,
                  teknik budidaya, dan tips pemasaran
                </li>
              </ul>

              <p className="text-custom-dark">
                Aplikasi ini dirancang dengan pendekatan offline-first, menggunakan Room Database untuk penyimpanan
                lokal dan sistem sinkronisasi yang efisien dengan Firebase Firestore. Antarmuka pengguna
                dioptimalkan untuk kemudahan penggunaan dengan tombol-tombol besar, navigasi yang jelas, dan opsi
                untuk mode gelap yang lebih nyaman digunakan di laut.
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
              alt="NuFish App Overview"
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
                alt="Catch Recording Feature"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Fitur pencatatan hasil tangkapan</p>
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
                alt="Weather and Tide Information"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Informasi cuaca dan pasang surut</p>
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
                alt="Fishery Marketplace"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Marketplace perikanan</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py


```typescriptreact file=\"app/case-studies/kurnia-interior/page.tsx"
[v0-no-op-code-block-prefix]"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { useEffect } from "react"

export default function KurniaInteriorCaseStudy() {
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
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#work" className="flex items-center text-custom-dark hover:text-black transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Work</span>
        </Link>
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
              Overview
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
              The Challenge
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
              <p className="text-white">Proyek ini menghadirkan beberapa tantangan utama:</p>

              <ul className="text-white">
                <li>
                  Menampilkan portofolio proyek dengan gambar berkualitas tinggi tanpa mengorbankan kecepatan loading
                </li>
                <li>Menciptakan pengalaman browsing yang mulus dan intuitif untuk pengunjung</li>
                <li>Memastikan konsistensi visual dengan brand identity Kurnia Interior Studio</li>
                <li>Mengimplementasikan sistem CMS yang mudah digunakan untuk pembaruan konten</li>
                <li>Mengoptimalkan website untuk SEO agar mudah ditemukan oleh calon klien</li>
              </ul>

              <p className="text-white">
                Selain itu, klien membutuhkan fitur galeri yang dapat menampilkan gambar proyek dengan detail yang baik,
                serta formulir kontak yang terintegrasi dengan sistem email mereka.
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
                Proses pengembangan website Kurnia Interior Studio dilakukan dengan pendekatan yang terstruktur:
              </p>

              <ol className="text-custom-dark">
                <li>Analisis kebutuhan dan ekspektasi klien melalui serangkaian meeting</li>
                <li>Pembuatan wireframe dan prototype untuk validasi konsep</li>
                <li>Pengembangan frontend dengan HTML5, CSS3, dan JavaScript</li>
                <li>Implementasi CMS WordPress dengan custom theme</li>
                <li>Optimasi gambar dan aset untuk performa yang lebih baik</li>
                <li>Testing pada berbagai perangkat dan browser</li>
                <li>Deployment dan konfigurasi server</li>
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
              <p className="text-sm text-custom-dark mt-2">Wireframing dan prototyping website</p>
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
              <p className="text-sm text-custom-dark mt-2">Proses pengembangan frontend</p>
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
                Website yang dikembangkan untuk Kurnia Interior Studio memiliki beberapa fitur utama:
              </p>

              <ul className="text-custom-dark">
                <li>Homepage dengan hero section yang menampilkan proyek unggulan</li>
                <li>Galeri portofolio dengan filter berdasarkan kategori proyek</li>
                <li>Halaman detail proyek dengan galeri gambar dan deskripsi</li>
                <li>Halaman layanan dengan penjelasan detail setiap layanan</li>
                <li>Halaman tentang kami yang menampilkan profil tim dan sejarah perusahaan</li>
                <li>Formulir kontak dengan validasi dan integrasi email</li>
                <li>Blog untuk artikel terkait desain interior</li>
              </ul>

              <p className="text-custom-dark">
                Untuk mengoptimalkan performa, saya mengimplementasikan lazy loading untuk gambar, minifikasi CSS dan
                JavaScript, serta caching yang efektif. Website juga dioptimalkan untuk SEO dengan struktur yang baik,
                meta tags yang relevan, dan sitemap.
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
              <p className="text-sm text-custom-dark mt-2">Homepage dengan hero section</p>
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
              <p className="text-sm text-custom-dark mt-2">Galeri portofolio dengan filter</p>
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
              <p className="text-sm text-custom-dark mt-2">Halaman detail proyek</p>
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
                Setelah peluncuran website Kurnia Interior Studio, klien mendapatkan beberapa hasil positif:
              </p>

              <ul className="text-white">
                <li>Peningkatan 45% dalam jumlah pengunjung website dalam 3 bulan pertama</li>
                <li>Peningkatan 60% dalam jumlah permintaan penawaran melalui formulir kontak</li>
                <li>
                  Peningkatan visibilitas di mesin pencari dengan posisi halaman pertama untuk beberapa kata kunci
                  target
                </li>
                <li>Feedback positif dari klien mengenai kemudahan penggunaan CMS untuk pembaruan konten</li>
                <li>Pengurangan waktu loading halaman sebesar 40% dibandingkan website sebelumnya</li>
              </ul>

              <p className="text-white">
                Website ini juga menjadi alat pemasaran yang efektif bagi Kurnia Interior Studio, membantu mereka
                memperluas jangkauan pasar dan menarik klien potensial baru.
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
          Back to Work
        </Link>
      </footer>
    </main>
  )
}
