"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function BicimiciLmsCaseStudy() {
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
              Bicimici LMS Platform
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Built a web-based Learning Management System with Laravel backend and React frontend, complete with authentication, role-based access control, JWT security, and Unity WebGL integration for a more engaging learning experience.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">LMS</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Laravel</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">React</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Unity WebGL</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">EdTech</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2024</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="w-full mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src="/assets/bicimici/bicimici-pages.png"
            alt="LMS Bicimici Hero"
            width={1600}
            height={900}
            className="w-full h-auto object-cover custom-card"
          />
        </motion.div>
      </section>

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
                {t("LMS Bicimici is designed as a digital learning platform for students and teachers, combining course content, quizzes, and an educational game experience in one system.")}
              </p>
              <p className="text-custom-dark">
                {t("Its architecture combines a Laravel backend with PostgreSQL, a React frontend, and secure JWT APIs so users can access content by role.")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              <p className="text-white">{t("The main challenge in this project included:")}</p>
              <ul className="text-white">
                <li>{t("Building reliable and secure RESTful APIs using Laravel and PostgreSQL.")}</li>
                <li>{t("Implementing JWT authentication and role-based access control for admin, teachers, and students.")}</li>
                <li>{t("Keeping the frontend data flow efficient with Context API to manage user sessions and navigation.")}</li>
                <li>{t("Integrating Unity WebGL content into the LMS without disrupting the user experience.")}</li>
                <li>{t("Meeting functional requirements and a 6-month timeline aligned with user needs.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              <p className="text-custom-dark">{t("The solution included:")}</p>
              <ul className="text-custom-dark">
                <li>{t("Laravel backend with PostgreSQL, RESTful APIs, and JWT authentication for data security.")}</li>
                <li>{t("React frontend using Context API for efficient user state and session management.")}</li>
                <li>{t("Role-based access control to separate admin, teacher, and student functionality.")}</li>
                <li>{t("Unity WebGL integration into the LMS with API communication between frontend and backend.")}</li>
                <li>{t("Using Git for version control, Postman for API testing, Docker for dev environments, and Agile practices for team collaboration.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              <ul className="text-white">
                <li>{t("80% of system development completed within 6 months aligned with user requirements and functional specifications.")}</li>
                <li>{t("The platform provides clear role access, content management, and a secure learning experience.")}</li>
                <li>{t("Unity WebGL integration improved user engagement and made learning more interactive.")}</li>
                <li>{t("Docker setup and Postman API testing ensured more stable deployment.")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              {t("Platform Demo")}
            </motion.h2>

            <motion.div className="custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark mb-4">
                {t("Watch a demonstration of the Bicimici LMS platform in action. This video showcases the platform features and user interface.")}
              </p>
              <div className="relative w-full aspect-video border rounded-lg overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                >
                  <source src="/assets/bicimici/bicimici-lms.mp4" type="video/mp4" />
                  {t("Your browser does not support the video tag.")}
                </video>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/bicimici-game" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : GAME BICIMICI")}
        </Link>
      </footer>
    </main>
  )
}
