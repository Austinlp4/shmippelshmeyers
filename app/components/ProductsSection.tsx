export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Ethiopian Highlands",
      roast: "Light Roast",
      notes: "Floral, Citrus, Bright Acidity",
      description: "A bright and vibrant coffee with complex floral notes and citrus undertones from high-altitude Ethiopian farms.",
      price: "$18.99",
      weight: "12oz"
    },
    {
      id: 2,
      name: "Colombian Supreme",
      roast: "Medium Roast",
      notes: "Chocolate, Caramel, Balanced",
      description: "Rich and smooth with chocolate and caramel notes, perfectly balanced for any time of day.",
      price: "$16.99",
      weight: "12oz"
    },
    {
      id: 3,
      name: "Guatemala Antigua",
      roast: "Medium-Dark Roast",
      notes: "Smoky, Spicy, Full Body",
      description: "A full-bodied coffee with smoky undertones and spicy complexity from volcanic soil.",
      price: "$19.99",
      weight: "12oz"
    },
    {
      id: 4,
      name: "Brazilian Santos",
      roast: "Dark Roast",
      notes: "Nutty, Low Acid, Rich",
      description: "A smooth, low-acid coffee with nutty flavors and rich body, perfect for espresso.",
      price: "$15.99",
      weight: "12oz"
    },
    {
      id: 5,
      name: "House Blend",
      roast: "Medium Roast",
      notes: "Balanced, Smooth, Versatile",
      description: "Our signature blend combining beans from multiple origins for the perfect daily coffee.",
      price: "$17.99",
      weight: "12oz"
    },
    {
      id: 6,
      name: "Decaf Delight",
      roast: "Medium Roast",
      notes: "Sweet, Clean, Caffeine-Free",
      description: "All the flavor without the caffeine, using the Swiss Water Process for natural decaffeination.",
      price: "$18.99",
      weight: "12oz"
    }
  ];

  const getRoastColor = (roast: string) => {
    if (roast.includes('Light')) return 'bg-kraft text-dark-brown';
    if (roast.includes('Dark')) return 'bg-dark-brown text-white';
    return 'bg-secondary text-white';
  };

  return (
    <section id="products" className="section-padding bg-light-brown/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4">
            Our Coffee Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee beans, 
            each with its own unique character and flavor profile.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-kraft to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-dark-brown">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 3H5.5C4.67 3 4 3.67 4 4.5v15c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM18 19H6V5h12v14zm-6-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                  <p className="text-sm font-medium">Coffee Beans</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl font-bold text-dark-brown">{product.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoastColor(product.roast)}`}>
                    {product.roast}
                  </span>
                </div>

                <p className="text-accent text-sm leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-brown font-medium">Tasting Notes:</span>
                    <span className="text-accent">{product.notes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-brown font-medium">Weight:</span>
                    <span className="text-accent">{product.weight}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-kraft/30">
                  <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                  <a 
                    href="#contact" 
                    className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-accent mb-6">
            Can&apos;t decide? We&apos;d love to help you find your perfect coffee match.
          </p>
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Get Personalized Recommendations
          </a>
        </div>
      </div>
    </section>
  );
}