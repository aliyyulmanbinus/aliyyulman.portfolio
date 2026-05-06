"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function KurniaInteriorCaseStudy() {
  // Add hook useLanguage fur function translate
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
              NuFish Android Application
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Contributed to 60% of the core features of the NuFish Android application as a full-stack developer using Kotlin.")}
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
            src="/assets/minakita/DSCF0741.JPG"
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
              {/* Gunakan fungsi t() untuk terjemahan */}
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t("NuFish is a mobile application designed to assist fishermen and fish farmers in managing their fisheries businesses. It provides features such as catch recording, aquaculture condition monitoring, weather and tidal information, and a marketplace to sell fishery products directly to consumers or distributors.")}
              </p>

              <p className="text-custom-dark">
                {t("As a full-stack developer on this project, I was responsible for developing 60% of the core features of the application using Kotlin for the frontend and Firebase for the backend. My main focus was on developing the data recording feature, integrating with weather and tidal APIs, and implementing the marketplace system.")}
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
                {t("The development of the NuFish application presented several unique challenges:")}
              </p>

              <ul className="text-white">
                <li>
                  {t("Designing an application that functions well in areas with limited internet connectivity, such as coastal and marine regions.")}
                </li>
                <li>
                  {t("Developing an intuitive and easy-to-use interface for users with varying levels of digital literacy.")}
                </li>
                <li>
                  {t("Integrating data from various sources such as weather APIs, tidal data, and GPS systems.")}
                </li>
                <li>
                  {t("Ensuring the security and privacy of user data, especially for sensitive business information.")}
                </li>
                <li>
                  {t("Optimizing application performance across a wide range of Android devices with different specifications.")}
                </li>
              </ul>

              <p className="text-white">
                {t("The main challenge was to build an application that remains useful even when users are at sea with limited connectivity, while still providing advanced features when an internet connection is available.")}
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
                {t("The NuFish application development process involved several stages:")}
              </p>

              <ol className="text-custom-dark">
                <li>
                  {t("User research through interviews and direct observations with fishermen and fish farmers.")}
                </li>
                <li>{t("Creating wireframes and prototypes to validate concepts with potential users.")}</li>
                <li>{t("Developing application architecture with an offline-first focus.")}</li>
                <li>{t("Implementing core features using Kotlin and Android Jetpack.")}</li>
                <li>{t("Integrating with Firebase for authentication, database, and cloud storage.")}</li>
                <li>{t("Developing an efficient data synchronization system for limited connectivity conditions.")}</li>
                <li>{t("Testing across various devices and network conditions.")}</li>
                <li>{t("Iterating based on feedback from beta users.")}</li>
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
                src="/assets/minakita/nelayan.svg?height=600&width=800"
                alt="Wireframing Process"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("User research with fishermen.")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/minakita/proses.svg?height=600&width=800"
                alt="Development Session"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Application development process using Kotlin.")}</p>
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
                {t("For NuFish, I developed various features tailored to the specific needs of fishermen and fish farmers:")}
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>{t("Offline Logging System:")}</strong> {t("Enables users to log catch or aquaculture data even without an internet connection, with automatic synchronization once connected.")}
                </li>
                <li>
                  <strong>{t("Weather and Tidal Integration:")}</strong> {t("Provides downloadable weather and tidal information for offline access at sea.")}
                </li>
                <li>
                  <strong>{t("Fisheries Marketplace:")}</strong> {t("A platform to sell fishery products directly to consumers or distributors with a bidding and price negotiation system.")}
                </li>
                <li>
                  <strong>{t("Business Analytics:")}</strong> {t("A dashboard displaying catch or production trends, income analysis, and recommendations to increase productivity.")}
                </li>
                <li>
                  <strong>{t("Fishermen Community:")}</strong> {t("A forum for sharing information about fishing locations, aquaculture techniques, and marketing tips.")}
                </li>
              </ul>

              <p className="text-custom-dark">
                {t("This application is designed with an offline-first approach, using Room Database for local storage and an efficient synchronization system with Firebase Firestore. The user interface is optimized for ease of use with large buttons, clear navigation, and an optional dark mode for comfortable use at sea.")}
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
              src="/assets/minakita/minakita.svg?height=900&width=1600"
              alt="Kurnia Interior Studio Website Screens"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Website Screens - 3 column grid */}
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
                src="/assets/minakita/android.svg?height=800&width=400"
                alt="Catch Recording Feature"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Android Mobile</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/minakita/website.svg?height=800&width=400"
                alt="Weather and Tide Information"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Website</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="custom-card p-4"
            >
              <Image
                src="/assets/minakita/minakita.png"
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
      {/* <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py-16">
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
      </section> */}

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
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}
