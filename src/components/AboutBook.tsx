import React, { useState } from 'react';
import { BookOpen, Quote, Heart } from 'lucide-react';
import EmailForm from './EmailForm';

const AboutBook = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="py-20 bg-ivory relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-rose-soft rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
          <blockquote className="font-playfair text-2xl md:text-3xl text-brown-soft italic leading-relaxed mb-8">
            "Written in prayer and silence, this book was created to heal broken hearts 
            and restore connection with God."
          </blockquote>
          <p className="font-crimson text-lg text-gray-warm leading-relaxed">
            Born from my own season of spiritual dryness, when God's voice felt distant 
            and my prayers seemed to echo in emptiness. This isn't theology from a classroom—
            it's hope from the wilderness, shared heart to heart.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 animate-fade-up">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-rose-100 to-blush rounded-lg shadow-xl mx-auto overflow-hidden">
                {/* Book cover mockup */}
                <div className="absolute inset-4 bg-white rounded-lg flex flex-col justify-center items-center p-6">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-rose-600" />
                  </div>
                  <h4 className="font-playfair text-xl text-brown-soft mb-3 text-center">
                    The Power of Hearing God's Voice
                  </h4>
                  <div className="w-full h-px bg-rose-200 mb-3"></div>
                  <p className="font-crimson text-xs text-gray-warm text-center">
                    A Journey to Healing and Clarity
                    <br /><br />
                    12 Chapters of Hope
                    <br />
                    Biblical Stories of Women
                    <br />
                    Personal Reflection Questions
                    <br />
                    Prayer Guides
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-6">
              What You'll Discover Inside
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Stories that Mirror Your Heart
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Walk alongside Hannah in her barrenness, Mary in her surrender, 
                    and Esther in her courage. Their stories become your story.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Practical Steps to Intimacy
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Not just inspiration, but invitation. Each chapter includes 
                    gentle exercises to help you cultivate listening prayer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Quote className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Scripture that Speaks
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Verses that have carried me through—and will carry you too. 
                    The Bible becomes alive when heard through a woman's heart.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => setShowEmailForm(true)}
                className="bg-gold hover:bg-gold-dark text-brown-soft px-8 py-4 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read a Sample
              </button>
            </div>
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

export default AboutBook;