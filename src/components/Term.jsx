// src/pages/TermsConditions.js
import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-300 mx-auto px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 mt-16 text-zinc-900 dark:text-white">
          Website Terms of Use
        </h1>
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          Last updated: 09/09/25
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              1. Use of Our Website
            </h2>
            <p>
              The content on this website is for general information only.
              You must not use this site for unlawful purposes or in any way that may damage our reputation or impair its availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              2. Accuracy of Information
            </h2>
            <p>
              We make reasonable efforts to keep information on this website up to date, but we do not guarantee accuracy, completeness, or reliability.
              Any reliance on website content is at your own risk. For project details, quotes, or professional advice, please contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website (including text, images, graphics, and logos) is owned by or licensed to JS Automotive Services.
              You may view, download, and print content for personal use only.
              You must not copy, reproduce, or distribute our website content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              4. Links to Other Websites
            </h2>
            <p>
              This site may include links to external websites for convenience.
              We are not responsible for the content or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              5. Liability
            </h2>
            <p>
              We are not liable for any loss or damage arising from use of this website, except where required by law.
              Nothing in these terms excludes or limits liability for death or personal injury caused by negligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              6. Privacy & Data Protection
            </h2>
            <p>
              Our use of your personal data is explained in our Privacy Policy, which forms part of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Please check this page periodically for the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-3 text-teal-600 dark:text-teal-500">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-medium mb-4 text-teal-600 dark:text-teal-500">
              9. Contact Us
            </h2>
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <p className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">JS Automotive Services</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Js.automotive1@outlook.com"
                  className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                  Js.automotive1@outlook.com
                </a>
              </p>
              <p className="mt-1">
                Phone: <span className="text-zinc-600 dark:text-zinc-400">+44 1709 863222</span>
              </p>
              <p className="mt-1">
                Address:{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                  New Edlington, Doncaster DN12 1DJ, United Kingdom
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;