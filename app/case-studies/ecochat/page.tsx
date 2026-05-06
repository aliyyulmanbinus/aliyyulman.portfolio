"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function EcochatCaseStudy() {
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
      {/* Header */}
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

      {/* Hero Section */}
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
              {t("Ecochat Website")}
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Development of a responsive AI-powered chat website that helps users interact efficiently while promoting sustainability and smart communication.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("AI Chat")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("Web Development")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("Sustainability")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2024</span>
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
        >
          <Image
            src="/assets/ecochat/ecochatwebsite.png"
            alt="Ecochat Website Hero"
            width={1600}
            height={800}
            className="w-full h-auto object-cover custom-card"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
            {t("Overview")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none custom-card p-8" variants={fadeIn}>
            <p className="text-custom-dark">
              {t("Ecochat is an AI-based platform that enables users to have intelligent and meaningful conversations about sustainability, technology, and environment awareness. The website provides a seamless and responsive experience on all devices.")}
            </p>
            <p className="text-custom-dark">
              {t("As a frontend developer, I was responsible for integrating the chat AI interface, managing the user flow, and ensuring performance optimization for real-time interactions.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
            {t("The Challenge")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
            <p>{t("Developing Ecochat came with several unique challenges:")}</p>
            <ul>
              <li>{t("Building a smooth real-time AI chat interface")}</li>
              <li>{t("Ensuring low latency message delivery and response times")}</li>
              <li>{t("Designing a minimalist yet futuristic user experience")}</li>
              <li>{t("Optimizing backend communication with OpenAI API")}</li>
              <li>{t("Maintaining strong data privacy and accessibility standards")}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
            {t("Development Process")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
            <ol>
              <li>{t("Planning and feature mapping for AI chat integration")}</li>
              <li>{t("UI/UX design based on conversational flow")}</li>
              <li>{t("Frontend built using Next.js and Tailwind CSS")}</li>
              <li>{t("Connected to OpenAI API for intelligent responses")}</li>
              <li>{t("Performance optimization for real-time interaction")}</li>
              <li>{t("Testing and deployment on Vercel hosting")}</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
            {t("The Solution")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
            <ul>
              <li>{t("AI-powered chat system for user interaction")}</li>
              <li>{t("Responsive layout adaptable for mobile and desktop")}</li>
              <li>{t("Sleek UI with focus on accessibility and speed")}</li>
              <li>{t("Integration with ecochat.id domain and SEO optimization")}</li>
            </ul>
            <p>
              {t("The final website delivers an engaging and intelligent chat experience that reflects Ecochat’s commitment to sustainability and technology innovation.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-custom-dark py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" variants={fadeIn}>
            {t("Results")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-white" variants={fadeIn}>
            <ul>
              <li>{t("Improved engagement with average session duration up 65%")}</li>
              <li>{t("Increased returning users by 40% after launch")}</li>
              <li>{t("Enhanced brand visibility through organic SEO ranking")}</li>
              <li>{t("Seamless multilingual chat experience using AI")}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Project Link */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-24 bg-custom-dark text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          {t("Link Project")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="custom-card inline-block px-4 sm:px-6 py-4 break-words"
        >
          <Link
            href="https://ecochat.id"
            className="text-lg sm:text-xl md:text-2xl font-bold text-custom-dark hover:underline break-all"
          >
            www.ecochat.id
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/soulparking" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : Soul Parking")}
        </Link>
      </footer>
    </main>
  )
}
