import React, { useState, useEffect } from 'react';
import { BookOpen, Heart } from 'lucide-react';

const VersiculosInspiracao = () => {
  const [versiculoAtual, setVersiculoAtual] = useState(0);
  
  const versiculos = [
    {
      texto: "Mesmo quando você não sente nada... Ele está.",
      referencia: "Deuteronômio 31:6",
      versiculoCompleto: "Sede fortes e corajosos! Não temais, nem vos aterrorizeis diante deles, porque o Senhor, vosso Deus, é quem vai convosco; não vos deixará, nem vos desamparará."
    },
    {
      texto: "Suas lágrimas não são desperdiçadas—elas regam o solo do milagre.",
      referencia: "Salmos 56:8",
      versiculoCompleto: "Tu contas os meus passos quando sofro perseguições; recolhe as minhas lágrimas no teu odre; não estão elas no teu livro?"
    },
    {
      texto: "Na sua espera, Ele está trabalhando.",
      referencia: "Isaías 64:4",
      versiculoCompleto: "Porque desde a antiguidade não se ouviu, nem com ouvidos se percebeu, nem com os olhos se viu um Deus além de ti, que trabalha para aquele que nele espera."
    },
    {
      texto: "A voz Dele é gentil, mas muda tudo.",
      referencia: "1 Reis 19:12",
      versiculoCompleto: "E, depois do terremoto, um fogo, mas o Senhor não estava no fogo; e, depois do fogo, uma voz mansa e delicada."
    },
    {
      texto: "Você é vista, conhecida e profundamente amada.",
      referencia: "Jeremias 31:3",
      versiculoCompleto: "De longe se me deixou ver o Senhor, dizendo: Porquanto com amor eterno te amei, por isso, com benignidade te atraí."
    }
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVersiculoAtual((prev) => (prev + 1) % versiculos.length);
    }, 4000);
    
    return () => clearInterval(intervalo);
  }, [versiculos.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-blush via-rose-soft to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BookOpen className="w-12 h-12 text-rose-600 mx-auto mb-6 animate-pulse" />
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Versículos e Frases Inspiradoras
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto">
            Estes versículos me carregaram através das minhas noites mais escuras e amanheceres mais brilhantes. 
            Deixe-os falar ao seu coração também.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl min-h-96 flex items-center">
            <div className="w-full text-center animate-fade-in" key={versiculoAtual}>
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-8 h-8 text-rose-600 animate-pulse" />
              </div>
              
              <blockquote className="font-playfair text-2xl md:text-4xl text-brown-soft italic mb-8 leading-relaxed">
                "{versiculos[versiculoAtual].texto}"
              </blockquote>
              
              <div className="bg-rose-50 rounded-2xl p-6 mb-8">
                <p className="font-crimson text-lg text-gray-warm italic mb-4">
                  {versiculos[versiculoAtual].versiculoCompleto}
                </p>
                <p className="font-crimson text-rose-600 font-semibold">
                  {versiculos[versiculoAtual].referencia}
                </p>
              </div>
              
              <div className="flex justify-center space-x-3 mb-8">
                {versiculos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setVersiculoAtual(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === versiculoAtual ? 'bg-rose-500 scale-125' : 'bg-rose-200 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="font-crimson text-gray-warm mb-6">
                Este é apenas um vislumbre da esperança esperando por você nestas páginas.
              </p>
              
              <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-10 py-4 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Descobrir Mais Escrituras
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersiculosInspiracao;