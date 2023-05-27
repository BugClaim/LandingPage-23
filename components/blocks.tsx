export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Understanding your workflows can be a challenge.</h2>
            <p className="text-xl text-gray-400">We offer comprehensive security services to make your digital systems secure and efficient.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item - Web Application VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for Web Application VAPT
              <h4 className="h4 mb-2">Web Application VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We conduct Vulnerability Assessment and Penetration Testing (VAPT) on web applications to identify and resolve security threats.</p>
            </div>

            {/* 2nd item - Mobile Application VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for Mobile Application VAPT
              <h4 className="h4 mb-2">Mobile Application VAPT</h4>
              <p className="text-lg text-gray-400 text-center">Our team performs VAPT for mobile applications, finding vulnerabilities before they can be exploited.</p>
            </div>

            {/* 3rd item - Network VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for Network VAPT
              <h4 className="h4 mb-2">Network VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We detect weaknesses in network security to prevent unauthorized access, data loss, and other threats.</p>
            </div>

            {/* 4th item - Thick Client VAPT */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for Thick Client VAPT
              <h4 className="h4 mb-2">Thick Client VAPT</h4>
              <p className="text-lg text-gray-400 text-center">We assess standalone applications for security flaws, ensuring your internal and external communications remain secure.</p>
            </div>

            {/* 5th item - API Security */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for API Security
              <h4 className="h4 mb-2">API Security</h4>
              <p className="text-lg text-gray-400 text-center">We ensure the security of your APIs to protect your data and provide a secure experience for your users.</p>
            </div>

            {/* 6th item - Code Review */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              // Place your SVG icon here for Code Review
              <h4 className="h4 mb-2">Code Review</h4>
              <p className="text-lg text-gray-400 text-center">Our security experts conduct a thorough code review to detect and resolve potential vulnerabilities at their root.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
