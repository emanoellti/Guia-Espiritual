import React, { useState } from 'react';
import { Download, Mail, Heart } from 'lucide-react';
import EmailForm from './EmailForm';

const FinalCTA = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-cream to-gold/20 relative overflow-hidden">
      {/* Decorative background elements - doves and light rays effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gold/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-blush/50 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Light rays effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-gold/30 to-transparent rotate-12"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-rose-soft/20 to-transparent -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8 animate-pulse" />
            <h2 className="font-playfair text-4xl md:text-6xl text-brown-soft mb-8 leading-tight">
              Are you ready to hear{' '}
              <span className="italic text-rose-600">Him</span>{' '}
              again?
            </h2>
            <p className="font-crimson text-xl md:text-2xl text-gray-warm leading-relaxed mb-8">
              This moment—right now—is your invitation back to intimacy. 
              Don't let another day pass in silence when conversation awaits.
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="font-playfair text-2xl md:text-3xl text-brown-soft mb-4">
                  What You Get Today:
                </h3>
                <ul className="space-y-3 font-crimson text-gray-warm">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    12 chapters of healing biblical stories
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Personal reflection questions for each chapter
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Practical prayer guides and exercises
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Bonus: Scripture meditation collection
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-rose-100 to-blush rounded-2xl p-6 mb-6">
                <p className="font-crimson text-xl line-through mb-2 text-gray-500">R$ 33,98</p>                                    <p className="font-crimson text-gray-warm line-through mb-2">$16,99</p>
                  <p className="font-crimson text-rose-600 font-semibold">Limited Time Offer</p>
                </div>
                
                <p className="font-crimson text-sm text-gray-warm italic mb-6">
                  30-day money-back guarantee. 
                  Your heart's healing is worth the investment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-12 py-5 rounded-full font-crimson text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
              <Download className="w-6 h-6" />
              Download Now
            </button>
            
            <button 
              onClick={() => setShowEmailForm(true)}
              className="border-2 border-gold text-brown-soft hover:bg-gold px-12 py-5 rounded-full font-crimson text-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Get Free Sample First
            </button>
          </div>
          
          <div className="bg-rose-50/50 rounded-2xl p-8">
            <p className="font-playfair text-2xl text-brown-soft italic mb-4">
              "The voice that called your name before you were born 
              is still calling it today."
            </p>
            <p className="font-crimson text-gray-warm">
              Don't wait for the perfect moment. He's been waiting for this one.
            </p>
          </div>
        </div>
      </div>
      
      {/* Email Form Modal */}
      {showEmailForm && (
        <EmailForm onClose={() => setShowEmailForm(false)} />
      )}
    </section>
  );
};

export default FinalCTA;