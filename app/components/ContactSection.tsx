export default function ContactSection() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "hello@shmippleshmeyers.com",
      description: "For orders, questions, or custom blends",
      action: "mailto:hello@shmippleshmeyers.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "(555) 123-BEAN",
      description: "Monday - Friday, 9am - 5pm EST",
      action: "tel:+15551232326"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Our Roastery",
      details: "123 Coffee Street, Bean Town, ST 12345",
      description: "Tours available by appointment",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.246 7.052 7.756 8.349 7.756s2.448.49 3.324 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.324c-.876.876-2.027 1.366-3.324 1.366zm7.6 0c-1.297 0-2.448-.49-3.324-1.297-.876-.876-1.366-2.027-1.366-3.324s.49-2.448 1.366-3.324c.876-.876 2.027-1.366 3.324-1.366s2.448.49 3.324 1.366c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.324c-.876.876-2.027 1.366-3.324 1.366z"/>
        </svg>
      ),
      url: "https://instagram.com/shmippleshmeyers"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://facebook.com/shmippleshmeyers"
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: "https://twitter.com/shmippleshmeyers"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-brown text-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-light-brown max-w-2xl mx-auto">
            Ready to experience exceptional coffee? We'd love to help you find your perfect blend 
            or answer any questions about our roasting process.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{method.title}</h3>
              <a 
                href={method.action}
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium text-lg block mb-2"
              >
                {method.details}
              </a>
              <p className="text-light-brown text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Business Hours & Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Business Hours</h3>
            <div className="space-y-3 text-light-brown">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Ordering Information</h3>
            <div className="space-y-3 text-light-brown">
              <p>• Free shipping on orders over $50</p>
              <p>• Fresh roasted beans shipped within 24 hours</p>
              <p>• Custom blends available upon request</p>
              <p>• Corporate and wholesale pricing available</p>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="text-center border-t border-light-brown/20 pt-12">
          <h3 className="font-serif text-2xl font-bold mb-6">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-secondary rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label={social.name}
              >
                <div className="text-white">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
          
          <div className="bg-light-brown/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="font-serif text-xl font-bold mb-4">Ready to Order?</h4>
            <p className="text-light-brown mb-6">
              Contact us today to place your order or discuss custom roasting options. 
              We're here to help you discover your perfect coffee experience.
            </p>
            <a 
              href="mailto:hello@shmippleshmeyers.com"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Start Your Coffee Journey
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-light-brown/20">
          <p className="text-light-brown">
            © 2024 Shmipple Shmeyers Beans. Crafted with ❤️ and ☕ for coffee lovers everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}