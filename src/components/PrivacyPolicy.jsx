const PrivacyPolicy = () => {
    return (
        /* - bg-white / dark:bg-zinc-900: Switches background 
           - text-zinc-800 / dark:text-zinc-100: Switches main text color
        */
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-16 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
            <h1 className="text-4xl font-semibold text-center mb-8 mt-15 text-zinc-900 dark:text-white">
                Privacy Policy
            </h1>
            <p className="text-center text-zinc-500 dark:text-zinc-400">
                Last updated: 09/09/25
            </p>

            <div className="mt-8 space-y-8 max-w-4xl mx-auto">
                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        1. Information We Collect
                    </h2>
                    <p className="mb-4">
                        When you complete a form on our website or contact us directly, we may collect:
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Address (if relevant to the service)</li>
                        <li>Details of your enquiry or project</li>
                    </ul>
                    <p className="mt-4 italic text-sm text-zinc-600 dark:text-zinc-400">
                        We may also collect limited technical data automatically when you visit our website, such as your IP address and browser type.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        2. Lawful Basis for Processing
                    </h2>
                    <p className="mb-4">
                        We only process your personal data where we have a lawful basis to do so. This includes:
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li><strong>Contract:</strong> to provide a quote, arrange services, or fulfill an agreement with you</li>
                        <li><strong>Consent:</strong> when you give us permission to contact you for specific purposes</li>
                        <li><strong>Legitimate interests:</strong> to respond to inquiries and manage our business effectively</li>
                        <li><strong>Legal obligation:</strong> where we must comply with the law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        3. How We Use Your Information
                    </h2>
                    <p className="mb-4">
                        We use your personal data to:
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Respond to inquiries and provide quotes</li>
                        <li>Communicate with you about your project</li>
                        <li>Maintain business records and comply with legal requirements</li>
                    </ul>
                    <p className="mt-4 font-medium text-teal-600">
                        We do not sell or trade your personal details to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        4. Sharing Your Information
                    </h2>
                    <p className="mb-4">
                        We may share your personal data only with:
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Trusted service providers (IT and hosting)</li>
                        <li>Professional advisers (accountants or insurers)</li>
                        <li>Regulatory bodies or law enforcement, if required by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        5. Cookies & Website Tracking
                    </h2>
                    <p>
                        Our website may use cookies to improve user experience. You can set your browser to refuse cookies if you prefer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-3 text-zinc-900 dark:text-teal-600">
                        6. Your Rights
                    </h2>
                    <p className="mb-4">Under UK GDPR, you have the right to:</p>
                    <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li>Access your personal data</li>
                        <li>Request corrections</li>
                        <li>Request deletion</li>
                        <li>Withdraw consent</li>
                        <li>Data portability</li>
                    </ul>
                </section>

                <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <h2 className="text-2xl font-medium mb-4 text-zinc-900 dark:text-teal-600">
                        9. Contact Us
                    </h2>
                    <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                        <p className="font-bold text-lg mb-2">JS Automotive Services</p>
                        <p>Email: <a href="mailto:Js.automotive1@outlook.com" className="text-teal-600 dark:text-sky-400 hover:underline">Js.automotive1@outlook.com</a></p>
                        <p>Phone: <span className="text-zinc-600 dark:text-zinc-400">+44 1709 863222</span></p>
                        <p>Address: <span className="text-zinc-600 dark:text-zinc-400">New Edlington, Doncaster DN12 1DJ, UK</span></p>
                    </div>
                    <p className="mt-6 text-sm text-zinc-500">
                        If you are not satisfied, you can contact the{' '}
                        <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-sky-400 hover:underline">
                            Information Commissioner’s Office (ICO)
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;