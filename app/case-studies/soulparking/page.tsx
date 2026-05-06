"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function SoulParkingCaseStudy() {
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
      {/* Header Responsive */}
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
              {t("Soul Parking Problem Report Dashboard")}
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Developed a monitoring and analytics dashboard for Soul Parking to track and manage problem reports from multiple parking sites in real-time.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("Data Analytics")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("Web Dashboard")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">{t("IoT System")}</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">2025</span>
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
            src="/assets/soulparking/full-parkingsoul.png"
            alt="Soul Parking Dashboard"
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
            viewport={{ once: true }}
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
                {t("Soul Parking Problem Report Dashboard is a web-based system designed to monitor, analyze, and visualize parking issues in real-time across multiple sites.")}
              </p>
              <p className="text-custom-dark">
                {t("The dashboard helps administrators quickly identify trends, generate reports, and take immediate action on operational problems detected at parking stations.")}
              </p>
            </motion.div>
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
            <ul className="text-white">
              <li>{t("Visualizing large-scale data from multiple parking sites efficiently")}</li>
              <li>{t("Implementing real-time synchronization between client and server")}</li>
              <li>{t("Designing a clean and intuitive dashboard interface")}</li>
              <li>{t("Creating access levels for Admin, Client, and Super Admin users")}</li>
              <li>{t("Generating automated reports and problem summaries")}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-dark" variants={fadeIn}>
            {t("Development Process")}
          </motion.h2>

          <motion.div className="prose prose-lg max-w-none custom-card p-8 mb-12" variants={fadeIn}>
            <ol className="text-custom-dark list-decimal pl-6">
              <li>{t("Analyzed business workflow and data structure from client systems")}</li>
              <li>{t("Designed responsive dashboard UI with reusable components")}</li>
              <li>{t("Developed using Next.js and React for real-time performance")}</li>
              <li>{t("Integrated API endpoints for live issue data visualization")}</li>
              <li>{t("Tested performance and user access management for stability")}</li>
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

          <motion.div className="prose prose-lg max-w-none custom-card p-8 mb-12" variants={fadeIn}>
            <ul className="text-custom-dark">
              <li>{t("Real-time problem tracking across multiple parking sites")}</li>
              <li>{t("Interactive charts and filters for detailed insights")}</li>
              <li>{t("Automated problem reports with export functionality")}</li>
              <li>{t("User management with role-based access control")}</li>
              <li>{t("Dashboard built with modular and responsive components")}</li>
            </ul>
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
            <ul className="text-white">
              <li>{t("Reduced report processing time by 40%")}</li>
              <li>{t("Enabled real-time issue visibility for all operational teams")}</li>
              <li>{t("Improved data accuracy and performance monitoring")}</li>
              <li>{t("Simplified communication between admins and site operators")}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Link Project */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-24 bg-custom-dark text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          {t("Link Project")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="custom-card inline-block px-6 py-4"
        >
          <Link
            href="https://soul-parking-problem-report-dashboard.vercel.app/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-custom-dark hover:underline break-all"
          >
            https://soul-parking-problem-report-dashboard.vercel.app/
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/case-studies/kurnia-interior" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("NEXT PROJECT : Kurnia Interior")}
        </Link>
      </footer>
    </main>
  )
}
