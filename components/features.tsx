export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Secure Your Workflows with Ease</h2>
            <p className="text-xl text-gray-400">At Bugclaim, we ensure your digital assets are safe and secure. Our VAPT services offer comprehensive security assessments to identify vulnerabilities and fortify your defenses.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item - Web Pentesting */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for Web Pentesting
              </svg>
              <h4 className="h4 mb-2">Web Pentesting</h4>
              <p className="text-lg text-gray-400 text-center">We perform rigorous tests on your web applications to identify vulnerabilities and potential security risks before they can be exploited by attackers.</p>
            </div>

            {/* 2nd item - Mobile Application VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for Mobile Application VAPT
              </svg>
              <h4 className="h4 mb-2">Mobile Application VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We analyze both Android and iOS mobile applications for potential security threats, helping you protect user data and ensure app integrity.</p>
            </div>

            {/* 3rd item - Network VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for Network VAPT
              </svg>
              <h4 className="h4 mb-2">Network VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We identify and fix vulnerabilities in your network infrastructure, ensuring your systems can fend off potential breaches and attacks.</p>
            </div>

            {/* 4th item - Thick Client VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for Thick Client VAPT
              </svg>
              <h4 className="h4 mb-2">Thick Client VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We assess standalone applications for security flaws, ensuring your internal and external communications remain secure.</p>
            </div>

            {/* 5th item - API Security */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for API Security
              </svg>
              <h4 className="h4 mb-2">API Security</h4>
              <p className="text-lg text-gray-400 text-center">We check your APIs against common vulnerabilities and exposures, safeguarding your data transactions from any possible security risks.</p>
            </div>

            {/* 6th item - Cybersecurity Consulting */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                // SVG icon for Cybersecurity Consulting
              </svg>
              <h4 className="h4 mb-2">Cybersecurity Consulting</h4>
              <p className="text-lg text-gray-400 text-center">Our experts provide strategic advice to help you build a strong security framework and cultivate a culture of cybersecurity awareness within your organization.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
