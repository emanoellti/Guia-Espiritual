import React, { useState, useEffect } from 'react';
import { BookOpen, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimoniesQuotes = () => {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  
  const verses = [
    {
      text: "Even when you feel nothing… He is still there.",
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
    }
  ];

  const biblicalStories = [
    {
      name: "Hannah",
      title: "From Barrenness to Breakthrough",
      quote: "Her tears became her prayer, and her prayer became her miracle.",
      description: "Hannah's story teaches us that God hears our deepest longings, even when spoken through tears.",
      verse: "1 Samuel 1:27"
    },
    {
      name: "Mary",
      title: "From Fear to Faith",
      quote: "She said yes before she understood, and understanding came in the yes.",
      description: "Mary shows us how surrender to God's plan opens doors we never imagined possible.",
      verse: "Luke 1:38"
    },
    {
      name: "Esther",
      title: "From Silence to Significance",
      quote: "For such a time as this—your moment is now.",
      description: "Esther's courage reminds us that our current position is our platform for purpose.",
      verse: "Esther 4:14"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [verses.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % biblicalStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + biblicalStories.length) % biblicalStories.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blush via-rose-soft to-cream">
      <div className="container mx-auto px-6">
        {/* Scripture Highlights */}
        <div className="text-center mb-20">
          <BookOpen className="w-12 h-12 text-rose-600 mx-auto mb-6 animate-pulse" />
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Scripture Highlights & Inspiration
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto mb-12">
            These verses have carried me through my darkest nights and brightest dawns. 
            Let them speak to your heart too.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl min-h-80 flex items-center">
              <div className="w-full text-center animate-fade-in" key={currentVerse}>
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
                
                <div className="flex justify-center space-x-3">
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
              </div>
            </div>
          </div>
        </div>

        {/* Biblical Stories */}
        <div className="text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Real Stories from Biblical Women
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto mb-12">
            Walk alongside women who found God's voice in their deepest struggles. 
            Their stories will awaken something beautiful in your own.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ivory to-cream rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center animate-fade-in" key={currentStory}>
                <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-rose-600" />
                </div>
                
                <h3 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-2">
                  {biblicalStories[currentStory].name}
                </h3>
                <h4 className="font-crimson text-xl text-rose-600 mb-6">
                  {biblicalStories[currentStory].title}
                </h4>
                
                <blockquote className="font-playfair text-2xl md:text-3xl text-gray-warm italic mb-6 leading-relaxed">
                  "{biblicalStories[currentStory].quote}"
                </blockquote>
                
                <p className="font-crimson text-lg text-gray-warm mb-6 leading-relaxed">
                  {biblicalStories[currentStory].description}
                </p>
                
                <p className="font-crimson text-sm text-rose-600 mb-8">
                  {biblicalStories[currentStory].verse}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-crimson transition-all duration-300 transform hover:scale-105">
                    Read {biblicalStories[currentStory].name}'s Story
                  </button>
                  <button className="border-2 border-gold text-brown-soft hover:bg-gold px-8 py-3 rounded-full font-crimson transition-all duration-300">
                    See the Transformation
                  </button>
                </div>
              </div>
            </div>
            
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 hover:bg-rose-50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 hover:bg-rose-50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniesQuotes;