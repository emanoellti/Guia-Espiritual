import React, { useState, useEffect } from 'react';
import { BookOpen, Heart } from 'lucide-react';

const ScriptureCarousel = () => {
  const [currentVerse, setCurrentVerse] = useState(0);
  
  const verses = [
    {
      text: "Even when you feel nothing... He is still there.",
      reference: "Deuteronomy 31:6",
      fullVerse: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you."
    },
    {
      text: "Your tears are not wasted—they water the soil of breakthrough.",
      reference: "Psalm 56:8",
      fullVerse: "You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book."
    },
    {
      text: "In your waiting, He is working.",
      reference: "Isaiah 64:4",
      fullVerse: "Since ancient times no one has heard, no ear has perceived, no eye has seen any God besides you, who acts on behalf of those who wait for him."
    },
    {
      text: "His voice is gentle, but it changes everything.",
      reference: "1 Kings 19:12",
      fullVerse: "After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper."
    },
    {
      text: "You are seen, known, and deeply loved.",
      reference: "Jeremiah 31:3",
      fullVerse: "The LORD appeared to us in the past, saying: 'I have loved you with an everlasting love; I have drawn you with unfailing kindness.'"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [verses.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-blush via-rose-soft to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BookOpen className="w-12 h-12 text-rose-600 mx-auto mb-6 animate-pulse" />
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Scripture Highlights & Inspiration
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto">
            These verses have carried me through my darkest nights and brightest dawns. 
            Let them speak to your heart too.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl min-h-96 flex items-center">
            <div className="w-full text-center animate-fade-in" key={currentVerse}>
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-8 h-8 text-rose-600 animate-pulse" />
              </div>
              
              <blockquote className="font-playfair text-2xl md:text-4xl text-brown-soft italic mb-8 leading-relaxed">
                "{verses[currentVerse].text}"
              </blockquote>
              
              <div className="bg-rose-50 rounded-2xl p-6 mb-8">
                <p className="font-crimson text-lg text-gray-warm italic mb-4">
                  {verses[currentVerse].fullVerse}
                </p>
                <p className="font-crimson text-rose-600 font-semibold">
                  {verses[currentVerse].reference}
                </p>
              </div>
              
              <div className="flex justify-center space-x-3 mb-8">
                {verses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVerse(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentVerse ? 'bg-rose-500 scale-125' : 'bg-rose-200 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="font-crimson text-gray-warm mb-6">
                This is just a glimpse of the hope waiting for you in these pages.
              </p>
              
              <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-10 py-4 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover More Scripture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureCarousel;