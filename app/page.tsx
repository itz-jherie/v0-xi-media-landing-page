import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      {/* Background Gradient Shadow from reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />

      <div className="z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 flex flex-col gap-12 md:gap-20 lg:gap-32">
        {/* Navigation */}
        <nav className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="XiMedia Logo"
            width={140}
            height={40}
            className="h-7 md:h-9 lg:h-10 w-auto object-contain"
          />
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Book Cover (Mockup style) */}
          <div className="relative flex justify-center w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:justify-start order-2 lg:order-1 mx-auto lg:mx-0">
            <div className="relative w-full aspect-[3/4.5] lg:w-[500px]">
              <Image
                src="/images/book-20cover-201.png"
                alt="The New Rules of Social Growth Book Cover"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 order-1 lg:order-2 w-full text-center lg:text-left">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white text-balance">
                Boost every platform <br className="hidden lg:block" /> that matters
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
                From social media to website traffic and music streaming XiBooster supports growth across the platforms
                your audience already uses.
              </p>
            </div>

            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 w-full">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-brand-secondary border border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-all placeholder:text-white/20 text-base md:text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-brand-primary hover:opacity-90 text-brand-bg font-bold px-8 md:px-10 py-4 md:py-5 rounded-full transition-all transform active:scale-95 whitespace-nowrap text-base md:text-lg shadow-[0_0_20px_rgba(0,224,182,0.15)] cursor-pointer"
              >
                Download
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
