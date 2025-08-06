export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
            </div>

            <p className="text-lg text-accent leading-relaxed">
              Founded with a passion for exceptional coffee, Shmipple Shmeyers Beans began as a 
              quest to bring the world&apos;s finest coffee experiences directly to your cup. What 
              started in a small roastery has grown into a dedication to sourcing, roasting, 
              and sharing extraordinary coffee beans.
            </p>

            <p className="text-lg text-accent leading-relaxed">
              Every bean tells a story of its origin, from the altitude it was grown at to the 
              hands that carefully harvested it. We honor these stories through our meticulous 
              roasting process, bringing out the unique characteristics that make each coffee special.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-serif font-bold text-dark-brown mb-2">Our Mission</h4>
                <p className="text-accent">
                  To deliver exceptional coffee experiences that connect people to the artistry 
                  and passion behind every bean.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-serif font-bold text-dark-brown mb-2">Our Promise</h4>
                <p className="text-accent">
                  Every batch is roasted with precision and care, ensuring consistency and 
                  quality in every cup you brew.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-kraft to-light-brown rounded-2xl flex items-center justify-center" style={{
                backgroundImage: `url(/founder.png)`,
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
              
            </div>
            
            {/* Decorative coffee beans */}
            <div className="absolute -top-4 -right-4 w-8 h-12 bg-secondary rounded-full transform rotate-12 flex items-center justify-center">
              <div className="w-0.5 h-8 bg-white/30 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-9 bg-primary rounded-full transform -rotate-45 flex items-center justify-center">
              <div className="w-0.5 h-6 bg-white/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 -left-6 w-4 h-6 bg-accent rounded-full transform rotate-30 flex items-center justify-center">
              <div className="w-0.5 h-4 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-primary">5+</div>
            <div className="text-dark-brown font-medium">Years of Roasting</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-primary">12</div>
            <div className="text-dark-brown font-medium">Origin Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-primary">50+</div>
            <div className="text-dark-brown font-medium">Unique Blends</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-primary">1000+</div>
            <div className="text-dark-brown font-medium">Happy Customers</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}