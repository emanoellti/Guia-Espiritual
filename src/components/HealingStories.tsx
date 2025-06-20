import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const HealingStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      name: "Hannah",
      title: "From Barrenness to Breakthrough",
      quote: "Her tears became her prayer, and her prayer became her miracle.",
      description: "Discover how Hannah's deepest pain became the birthplace of her greatest praise.",
      verse: "1 Samuel 1:27"
    },
    {
      name: "Mary",
      title: "From Fear to Faith",
      quote: "She said yes before she understood, and understanding came in the yes.",
      description: "Learn how Mary's surrender to the impossible opened heaven's door.",
      verse: "Luke 1:38"
    },
    {
      name: "Deborah",
      title: "From Doubt to Divine Authority",
      quote: "She led not because she felt qualified, but because God qualified her.",
      description: "See how God uses willing hearts over perfect résumés.",
      verse: "Judges 4:4"
    },
    {
      name: "Esther",
      title: "From Silence to Significance",
      quote: "For such a time as this—your moment is now.",
      description: "Understand how your current position is your platform for purpose.",
      verse: "Esther 4:14"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Healing Stories Inside the Book
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto">
            Walk alongside biblical women who found God's voice in their deepest struggles. 
            Their stories will awaken something beautiful in your own.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-cream rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-2">
                {stories.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStory ? 'bg-rose-500' : 'bg-rose-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center animate-fade-in" key={currentStory}>
              <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-rose-600" />
              </div>
              
              <h3 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-2">
                {stories[currentStory].name}
              </h3>
              <h4 className="font-crimson text-xl text-rose-600 mb-6">
                {stories[currentStory].title}
              </h4>
              
              <blockquote className="font-playfair text-2xl md:text-3xl text-gray-warm italic mb-6 leading-relaxed">
                "{stories[currentStory].quote}"
              </blockquote>
              
              <p className="font-crimson text-lg text-gray-warm mb-6 leading-relaxed">
                {stories[currentStory].description}
              </p>
              
              <p className="font-crimson text-sm text-rose-600 mb-8">
                {stories[currentStory].verse}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-crimson transition-all duration-300 transform hover:scale-105">
                  Read {stories[currentStory].name}'s Story
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
    </section>
  );
};

export default HealingStories;