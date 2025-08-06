export default function HeroSection() {
  return (
    <section id="why" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-kraft/30 to-light-brown/50">
      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark-brown mb-6 leading-tight">
            Exceptional Coffee,
            <span className="block text-primary">Roasted to Perfection</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-accent mb-8 max-w-2xl mx-auto">
            Discover artisanal coffee beans sourced from the world&apos;s finest growing regions, 
            roasted with passion and precision to unlock extraordinary flavors.
          </p>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">Small Batch Roasting</h3>
              <p className="text-accent">Carefully roasted in small batches to ensure optimal flavor development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">Premium Origins</h3>
              <p className="text-accent">Sourced directly from renowned coffee growing regions worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">Passionate Craft</h3>
              <p className="text-accent">Every bean is treated with care and roasted with artisanal expertise</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#products" className="btn-primary text-lg px-8 py-4">
              Explore Our Beans
            </a>
            <a 
              href="#about" 
              className="text-dark-brown hover:text-primary font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
            >
              Learn Our Story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
}