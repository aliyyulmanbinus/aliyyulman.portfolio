"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MoveMoreCaseStudy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="bg-custom-cream min-h-screen text-custom-dark">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#work" className="flex items-center text-custom-dark hover:text-custom-green transition-colors">
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
              Move More
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl text-custom-dark" variants={fadeIn}>
              Improving user activation rate by integrating the fitness app with older adults' existing exercise
              routines.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
              <span className="bg-custom-green/20 text-custom-dark px-4 py-1 rounded-full text-sm">UX/UI Design</span>
              <span className="bg-custom-green/20 text-custom-dark px-4 py-1 rounded-full text-sm">Mobile App</span>
              <span className="bg-custom-green/20 text-custom-dark px-4 py-1 rounded-full text-sm">
                Health & Fitness
              </span>
              <span className="bg-custom-green/20 text-custom-dark px-4 py-1 rounded-full text-sm">2023</span>
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
            alt="Move More App Hero"
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
                Move More is a fitness application designed specifically for older adults who want to maintain an active
                lifestyle. The app faced challenges with user activation and retention, as many users would download the
                app but not integrate it into their existing exercise routines.
              </p>

              <p className="text-custom-dark">
                Our goal was to redesign the onboarding experience and core features to better integrate with users'
                existing habits, making the app a natural extension of their fitness journey rather than a separate
                activity.
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
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-cream" variants={fadeIn}>
              The Challenge
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-custom-cream" variants={fadeIn}>
              <p className="text-custom-cream">
                Older adults often have established exercise routines that they've developed over years. Introducing a
                new digital tool into these routines can be disruptive and lead to resistance. Our research showed that:
              </p>

              <ul className="text-custom-cream">
                <li>68% of users over 60 abandoned the app within the first week</li>
                <li>
                  Many users found the app's exercise recommendations didn't align with their physical capabilities
                </li>
                <li>Users wanted to track their existing activities rather than adopt new routines</li>
              </ul>

              <p className="text-custom-cream">
                We needed to create an experience that would complement users' existing routines while gradually
                introducing new exercises and features that could enhance their fitness journey.
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
              Design Process
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none mb-12 custom-card p-8" variants={fadeIn}>
              <p className="text-custom-dark">
                Our approach focused on understanding users' existing routines and finding natural integration points
                for the app. We conducted extensive user interviews, created journey maps, and tested multiple
                prototypes with our target audience.
              </p>
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
                alt="User Research Session"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">User interviews with adults aged 60-75</p>
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
                alt="Journey Mapping"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Journey mapping exercise with the design team</p>
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
                We redesigned the Move More app with a focus on personalization and integration with existing routines.
                The key features of our solution included:
              </p>

              <ul className="text-custom-dark">
                <li>A customizable onboarding process that asks users about their current exercise habits</li>
                <li>
                  Activity recognition that can detect and log common exercises like walking, swimming, and cycling
                </li>
                <li>Adaptive goal-setting that builds upon users' existing routines rather than replacing them</li>
                <li>Simplified UI with larger touch targets and clear typography for better accessibility</li>
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
              alt="Move More App Screens"
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
                alt="Onboarding Screen"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Personalized onboarding experience</p>
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
                alt="Activity Dashboard"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Activity dashboard with progress tracking</p>
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
                alt="Exercise Detail"
                width={400}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-custom-dark mt-2">Exercise details with adaptive recommendations</p>
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
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-custom-cream" variants={fadeIn}>
              Results
            </motion.h2>

            <motion.div className="prose prose-lg max-w-none custom-card-dark p-8 text-custom-cream" variants={fadeIn}>
              <p className="text-custom-cream">
                After launching the redesigned app, we saw significant improvements in user engagement and retention:
              </p>

              <ul className="text-custom-cream">
                <li>42% increase in user activation rate within the first week</li>
                <li>65% improvement in 30-day retention</li>
                <li>User satisfaction scores increased from 3.2/5 to 4.6/5</li>
                <li>Average session time increased by 35%</li>
              </ul>

              <p className="text-custom-cream">
                The personalized approach resonated with our target audience, and we received positive feedback about
                how the app complemented their existing routines rather than trying to replace them.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-custom-green">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-custom-cream"
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
              href="/case-studies/domakes"
              className="text-4xl md:text-5xl font-bold text-custom-dark hover:underline"
            >
              domakes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer with back to work button */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 bg-custom-cream text-center">
        <Link href="/#work" className="inline-block custom-button px-8 py-3 text-custom-cream font-medium">
          Back to Work
        </Link>
      </footer>
    </main>
  )
}
