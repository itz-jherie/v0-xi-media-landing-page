import Image from "next/image"
import { SubscriptionForm } from "@/components/subscription-form"
import { PdfIcon } from "@/components/pdf-icon"

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full relative bg-[#0F0F0F] flex flex-col font-sans antialiased">
      {/* Hero Content Section */}
      <div className="relative z-10 flex-1 flex flex-col w-full bg-[#0F0F0F]">
        <div className="flex-1 flex flex-col w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          {/* Navigation - More breathing room at top */}
          <header className="flex items-center shrink-0 pt-10 md:pt-16 pb-12 md:pb-0">
            <Image
              src="/images/logo.png"
              alt="XiMedia Logo"
              width={140}
              height={40}
              className="h-6 md:h-8 w-auto object-contain"
            />
          </header>

          {/* Main Content + Book Section - Significant vertical padding */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-12 lg:py-24">
            {/* Left Side: Large Book Cover */}
            <div className="relative flex-1 flex justify-center lg:justify-start w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
              <div className="relative w-full aspect-[3/4] drop-shadow-[0_45px_45px_rgba(0,0,0,0.7)] group">
                <Image
                  src="/images/book-20cover-201.png"
                  alt="The New Rules of Social Growth"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Content Area */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Headlines */}
              <div className="flex flex-col gap-6 mb-8">
                <h1 className="hero-heading">
                  Grow on social without<br className="hidden lg:block" /> working harder
                </h1>
                <p className="hero-description mx-auto lg:mx-0">
                  A practical guide to building visibility momentum and authority across platforms without chasing trends or posting every day
                </p>
              </div>

              {/* Support Info */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <p className="hero-disclaimer mb-8">
                  Results vary based on content quality <br /> consistency and audience
                </p>

                <div className="flex flex-col items-center lg:items-start w-full">
                  {/* Form Section - Order 1 on mobile, Order 2 on Desktop */}
                  <div className="mb-6 w-full max-w-[380px] order-1 lg:order-2">
                    <SubscriptionForm />
                  </div>

                  {/* PDF Info - Order 2 on mobile, Order 1 on Desktop */}
                  <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 order-2 lg:order-1">
                    <PdfIcon className="w-[18px] h-[24px] shrink-0" />
                    <span className="hero-guide-text">
                      Free 3 page strategic guide
                    </span>
                  </div>

                  {/* Unsubscribe Tagline - Order 3 on both */}
                  <p className="hero-disclaimer order-3">
                    We respect your privacy. No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credit - Deep black background only for footer */}
      <footer className="shrink-0 pt-20 pb-12 md:pb-20 bg-[#0A0A0A] w-full z-10 transition-colors duration-300">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <p className="text-center text-[13px] font-normal tracking-wide text-white/30">
            Built by XiMedia a social media agency focused on sustainable growth
          </p>
        </div>
      </footer>

    </main>
  )
}
