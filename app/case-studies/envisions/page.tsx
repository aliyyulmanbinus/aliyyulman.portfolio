"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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
              Envisions.id
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              {t("Built a company profile website for Envisions, a platform for automation and data analytics in building and business management.")}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">WordPress</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Company Profile</span>
              <span className="bg-black/10 text-custom-dark px-4 py-1 rounded-full text-sm">Building Management</span>
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
            alt="Envisions.id Website Hero"
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
                {t("Envisions is a technology company that provides automation and data analytics platforms for building and business management. They needed a professional and informative company profile website to showcase their services, case studies, and build credibility in the industry.")}
              </p>

              <p className="text-custom-dark">
                {t("As a web developer, I was responsible for developing the Envisions.id company profile website using WordPress. The website was designed to highlight the advanced technologies offered by Envisions while maintaining easy navigation and accessible information for visitors.")}
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
              <p className="text-white">{t("Website development challenges included:")}</p>

              <ul className="text-white">
                <li>
                  {t("Explaining complex technology concepts (IoT, automation, data analytics) in a way that is easy to understand for a diverse target audience.")}
                </li>
                <li>
                  {t("Creating a design that reflects innovation and professionalism.")}
                </li>
                <li>{t("Developing a CMS system that allows the Envisions team to update content independently.")}</li>
                <li>
                  {t("Optimizing website performance despite the use of many visual elements.")}
                </li>
                <li>{t("Implementing effective SEO strategies to improve online visibility.")}</li>
                <li>{t("Ensuring website responsiveness across all devices from desktop to mobile.")}</li>
              </ul>

              <p className="text-white">
                {t("Main challenge: balancing attractive visual aesthetics with functionality and clarity of message.")}
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
              <p className="text-custom-dark">{t("Website development stages included:")}</p>

              <ol className="text-custom-dark">
                <li>{t("Discovery and requirements analysis through interviews with the Envisions team.")}</li>
                <li>{t("Creating wireframes and mockups for visual validation.")}</li>
                <li>{t("Choosing and customizing a suitable WordPress theme.")}</li>
                <li>{t("Website structure development and design implementation using Elementor Pro.")}</li>
                <li>{t("Creating custom post types for services, case studies, and testimonials.")}</li>
                <li>{t("Integrating contact form and CRM system.")}</li>
                <li>{t("On-page and technical SEO optimization.")}</li>
                <li>{t("Testing across multiple devices and browsers.")}</li>
                <li>{t("Team training for independent website content management.")}</li>
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
              <p className="text-sm text-custom-dark mt-2">{t("Wireframing and mockup design process.")}</p>
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
                alt="WordPress Development"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">{t("Website development using WordPress and Elementor.")}</p>
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
                {t("Main website features included:")}
              </p>

              <ul className="text-custom-dark">
                <li>
                  <strong>Homepage Interaktif:</strong> Dengan animasi scroll dan elemen interaktif yang menampilkan
                  value proposition perusahaan secara jelas
                </li>
                <li>
                  <strong>Halaman Layanan Terstruktur:</strong> Menampilkan layanan automation dan analytics dengan
                  penjelasan yang mudah dipahami dan ilustrasi visual
                </li>
                <li>
                  <strong>Showcase Studi Kasus:</strong> Menampilkan implementasi teknologi Envisions pada berbagai
                  industri dengan hasil yang terukur
                </li>
                <li>
                  <strong>Blog dan Resource Center:</strong> Untuk berbagi pengetahuan dan membangun otoritas di
                  industri
                </li>
                <li>
                  <strong>Sistem Testimonial:</strong> Menampilkan feedback dari klien untuk membangun kredibilitas
                </li>
                <li>
                  <strong>Formulir Kontak Terintegrasi:</strong> Dengan validasi dan integrasi ke sistem CRM perusahaan
                </li>
                <li>
                  <strong>Dashboard Demo:</strong> Visualisasi interaktif yang menunjukkan kemampuan platform analytics
                  Envisions
                </li>
              </ul>

              <p className="text-custom-dark">
                {t("Performance optimizations included lazy loading, minified CSS/JS, and caching.")}
                {t("SEO enhancements included good structure, relevant meta tags, and sitemap.")}
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
                src="/placeholder.svg?height=800&width=400"
                alt="Homepage Design"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Homepage dengan animasi scroll</p>
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
                alt="Services Page"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Halaman layanan dengan ilustrasi visual</p>
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
                alt="Case Study Detail"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Halaman detail studi kasus</p>
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
                {t("Results after website launch included:")}
              </p>

              <ul className="text-white">
                <li>{t("55% increase in website visitors within the first 3 months.")}</li>
                <li>{t("70% increase in leads from the contact form.")}</li>
                <li>{t("40% increase in average visitor time spent on the website.")}</li>
                <li>{t("Improved search engine rankings for keywords related to automation and analytics.")}</li>
                <li>{t("Positive client feedback on navigation and professional appearance.")}</li>
                <li>
                  {t("50% reduction in content update time thanks to a user-friendly CMS.")}
                </li>
              </ul>

              <p className="text-white">
                {t("The website became a powerful marketing tool for Envisions, increasing brand awareness and generating high-quality leads.")}
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

      {/* Footer with back to work button */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-white text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-white font-medium">
          {t("Back to Work")}
        </Link>
      </footer>
    </main>
  )
}
