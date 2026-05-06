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
              {t("Electric ECM Tractor & Tractor Oil Flow")}
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Developed 4 modules with over 100 gameplay flows for the Electric ECM Tractor and Tractor Oil Flow 3D interactive simulation applications using Unreal Engine and C++.")}
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
            src="/assets/ck/ck_page.svg?height=800&width=1600"
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
              {t("Overview")}
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                {t("Electric ECM Tractor and Tractor Oil Flow are two interactive 3D simulation apps developed for training heavy equipment operators and technicians.")}
                {t("These apps are designed to provide in-depth understanding of modern tractor electrical and hydraulic systems without risking equipment damage or injury.")}
              </p>

              <p className="text-custom-dark">
                {t("As an Unreal Engine Developer on this project, I was responsible for developing 4 main modules with over 100 gameplay flows covering operations, maintenance, and troubleshooting.")}
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
                {t("Developing an interactive tractor simulation presented several technical and educational challenges:")}
              </p>

              <ul className="text-white">
                <li>
                  {t("Creating highly detailed 3D tractor models with thousands of realistically interacting components.")}
                </li>
                <li>{t("Simulating complex hydraulic and electrical systems with high accuracy.")}</li>
                <li>{t("Developing intuitive interaction systems for complex technical components.")}</li>
                <li>{t("Ensuring optimal performance despite complex physics and visualizations.")}</li>
                <li>{t("Designing progressive learning scenarios for users of various skill levels.")}</li>
              </ul>

              <p className="text-white">
                {t("The main challenge was balancing technical realism with usability and accessibility to ensure the simulation was both accurate and effective as a learning tool.")}
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
                {t("The development process involved several stages:")}
              </p>

              <ol className="text-custom-dark">
                <li>{t("In-depth study of technical specifications and operation manuals to ensure accuracy.")}</li>
                <li>{t("Creating detailed 3D models based on original blueprints and specs.")}</li>
                <li>{t("Building physics-based simulation systems for hydraulics and mechanics using Unreal Engine.")}</li>
                <li>{t("Programming interaction and gameplay logic using C++ and Blueprint.")}</li>
                <li>{t("Implementing tutorial systems and interactive guides.")}</li>
                <li>{t("Performance optimization to ensure smooth simulation on standard hardware.")}</li>
                <li>{t("Testing with real operators and technicians to gather feedback.")}</li>
                <li>{t("Iterating and refining based on feedback received.")}</li>
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
              <p className="text-sm text-custom-dark mt-2">{t("Proses pemodelan 3D komponen traktor")}</p>
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
              <p className="text-sm text-custom-dark mt-2">{t("Pengembangan simulasi dengan Unreal Engine")}</p>
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
                {t("The four main modules developed were:")}
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>{t("Modul Pengenalan Sistem:")}</strong> {t("Memberikan overview tentang komponen utama traktor dan fungsinya")}
                </li>
                <li>
                  <strong>{t("Modul Operasi:")}</strong> {t("Simulasi langkah-langkah operasi traktor dari startup hingga shutdown")}
                </li>
                <li>
                  <strong>{t("Modul Pemeliharaan:")}</strong> {t("Prosedur pemeliharaan rutin dan penggantian komponen")}
                </li>
                <li>
                  <strong>{t("Modul Troubleshooting:")}</strong> {t("Simulasi berbagai skenario masalah dan langkah-langkah diagnosis")}
                </li>
              </ul>

              <p className="text-custom-dark">
                {t("Each module includes multiple interactive scenarios with a total of over 100 unique gameplay flows.")} 
                {t("Key features include:")}
              </p>

              <ul className="text-custom-dark">
                <li>{t("X-ray visualization to view internal components during operation.")}</li>
                <li>{t("Hydraulic flow simulation with color-coded pressure and direction.")}</li>
                <li>{t("Interactive diagnostic systems to identify and resolve issues.")}</li>
                <li>{t("Free exploration mode to study components and systems.")}</li>
                <li>{t("Test mode to evaluate user understanding.")}</li>
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
              <p className="text-sm text-custom-dark mt-2">{t("Simulasi sistem elektrik")}</p>
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
              <p className="text-sm text-custom-dark mt-2">{t("Visualisasi aliran hidrolik")}</p>
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
              <p className="text-sm text-custom-dark mt-2">{t("Antarmuka troubleshooting")}</p>
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
                {t("The implementation of these simulations in training programs led to positive outcomes:")}
              </p>

              <ul className="text-white">
                <li>{t("40% reduction in training time needed to achieve basic competency.")}</li>
                <li>{t("55% improvement in diagnostic abilities among technicians using the simulations.")}</li>
                <li>{t("30% reduction in equipment damage due to operator error during training.")}</li>
                <li>
                  {t("60% training cost efficiency due to reduced need for real equipment in basic training.")}
                </li>
                <li>
                  {t("Ability to train operators and technicians in failure scenarios that are too risky to simulate with real machines.")}
                </li>
              </ul>

              <p className="text-white">
                {t("These simulations have been adopted by multiple heavy equipment training centers and are now standard components in operator and technician training curricula.")}
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
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}
