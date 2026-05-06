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
              {t("Implemented Augmented Reality features to support component value visualization and electrical circuit simulation in educational settings.")}
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
                {t("AuRRaL (Augmented Reality Rangkaian Listrik) is a mobile application that uses Augmented Reality technology to help students and university learners study electrical circuits. It enables users to visualize electronic component values and simulate circuit behavior in the real world.")}
              </p>

              <p className="text-custom-dark">
                {t("As a developer, I was responsible for developing the AuRRaL app from concept to implementation. This app was designed to address the difficulties students often face in understanding abstract circuit concepts by providing interactive visualizations that simplify the learning process.")}
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
                {t("Technical and pedagogical challenges faced during the development of AuRRaL included:")}
              </p>

              <ul className="text-white">
                <li>
                  {t("Creating an accurate marker recognition system for various electronic components under different lighting conditions")}
                </li>
                <li>
                  {t("Developing real-time, accurate simulation algorithms for circuit behavior")}
                </li>
                <li>{t("Designing AR visualizations that are informative but not overly complex for users")}</li>
                <li>
                  {t("Ensuring optimal app performance on diverse mobile devices with varying specifications")}
                </li>
                <li>{t("Integrating educational content aligned with electrical engineering curricula")}</li>
                <li>
                  {t("Creating an intuitive user interface for students with varying levels of tech familiarity")}
                </li>
              </ul>

              <p className="text-white">
                {t("The main challenge was to create an AR app that is not only visually engaging but also educationally valuable and technically accurate in simulating circuit behavior.")}
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
              <p className="text-custom-dark">{t("The development process involved several stages:")}</p>

              <ol className="text-custom-dark">
                <li>{t("Research and consultation with electrical engineering educators")}</li>
                <li>{t("Design of the marker system and electronic component database")}</li>
                <li>{t("Development of mobile-compatible circuit simulation algorithms")}</li>
                <li>{t("Implementation of AR technology using Unity and Vuforia")}</li>
                <li>{t("Design of a user interface tailored to learning needs")}</li>
                <li>{t("Development of educational content and interactive tutorials")}</li>
                <li>{t("Testing with students and educators for feedback")}</li>
                <li>{t("Iteration and refinement based on feedback")}</li>
                <li>{t("Performance optimization and multi-device testing")}</li>
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
              <p className="text-sm text-custom-dark mt-2">{t("Marker system development for electronic components")}</p>
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
              <p className="text-sm text-custom-dark mt-2">{t("Circuit simulation algorithm development")}</p>
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
              <p className="text-custom-dark">{t("The AuRRaL app includes several key features:")}</p>

              <ul className="text-custom-dark">
                <li>
                  <strong>{t("Component Recognition")}</strong> {t("Ability to recognize various electronic components like resistors, capacitors, inductors, and transistors via special markers")}
                </li>
                <li>
                  <strong>{t("Component Value Visualization")}</strong> {t("Display of component values (resistance, capacitance) in easily readable AR formats")}
                </li>
                <li>
                  <strong>{t("Circuit Simulation")}</strong> {t("Ability to simulate simple electrical circuit behavior by connecting components")}
                </li>
                <li>
                  <strong>{t("Current and Voltage Visualization")}</strong> {t("Display of current flow and voltage distribution using intuitive AR animations")}
                </li>
                <li>
                  <strong>{t("Learning Mode")}</strong> {t("Interactive tutorials guiding users through basic circuit concepts")}
                </li>
                <li>
                  <strong>{t("Practice Mode")}</strong> {t("Challenges and exercises to test user understanding")}
                </li>
                <li>
                  <strong>{t("Component Database")}</strong> {t("Reference information about various electronic components and their usage")}
                </li>
              </ul>

              <p className="text-custom-dark">
                {t("The app was built using Unity and Vuforia for AR technology, with a custom-developed simulation algorithm optimized for mobile devices.")}
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
