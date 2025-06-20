import React from 'react';
import { Heart, Users, Home } from 'lucide-react';

const WhoIsThisFor = () => {
  const targetAudience = [
    {
      icon: Heart,
      title: "Women who feel tired, anxious, or spiritually distant",
      description: "You've carried everyone else's burdens, but who carries yours? It's okay to be weary. This book meets you in that sacred space of exhaustion."
    },
    {
      icon: Users,
      title: "Mothers, wives, or daughters seeking direction",
      description: "In the chaos of caring for others, you've lost sight of your own spiritual needs. You matter too, and God has specific words just for you."
    },
    {
      icon: Home,
      title: "Anyone longing to hear God's voice again",
      description: "You remember a time when prayer felt like conversation, not monologue. That intimacy can return—and this book will show you how."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-soft via-cream to-blush relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gold rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-rose-soft rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            This Book is for{' '}
            <span className="italic text-rose-600">You</span>
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto leading-relaxed">
            If you've found yourself here, it's because your heart recognizes a deeper hunger. 
            You're not broken—you're awakening.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {targetAudience.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl text-brown-soft mb-4 text-center leading-tight">
                  {item.title}
                </h3>
                <p className="font-crimson text-gray-warm text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="font-playfair text-2xl text-brown-soft italic mb-4">
              "Whether you're 22 or 62, single or married, 
              your heart knows the sound of His voice."
            </p>
            <p className="font-crimson text-gray-warm">
              This book meets you exactly where you are, without judgment, 
              with only love and the promise that He is still speaking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;