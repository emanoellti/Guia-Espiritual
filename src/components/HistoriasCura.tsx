import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const HistoriasCura = () => {
  const [historiaAtual, setHistoriaAtual] = useState(0);
  
  const historias = [
    {
      nome: "Ana",
      titulo: "Da Esterilidade ao Milagre",
      citacao: "Suas lágrimas se tornaram sua oração, e sua oração se tornou seu milagre.",
      descricao: "Descubra como a dor mais profunda de Ana se tornou o berço do seu maior louvor.",
      versiculo: "1 Samuel 1:27"
    },
    {
      nome: "Maria",
      titulo: "Do Medo à Fé",
      citacao: "Ela disse sim antes de entender, e o entendimento veio no sim.",
      descricao: "Aprenda como a entrega de Maria ao impossível abriu a porta do céu.",
      versiculo: "Lucas 1:38"
    },
    {
      nome: "Débora",
      titulo: "Da Dúvida à Autoridade Divina",
      citacao: "Ela liderou não porque se sentia qualificada, mas porque Deus a qualificou.",
      descricao: "Veja como Deus usa corações dispostos mais que currículos perfeitos.",
      versiculo: "Juízes 4:4"
    },
    {
      nome: "Ester",
      titulo: "Do Silêncio ao Significado",
      citacao: "Para um tempo como este—seu momento é agora.",
      descricao: "Entenda como sua posição atual é sua plataforma para o propósito.",
      versiculo: "Ester 4:14"
    }
  ];

  const proximaHistoria = () => {
    setHistoriaAtual((prev) => (prev + 1) % historias.length);
  };

  const historiaAnterior = () => {
    setHistoriaAtual((prev) => (prev - 1 + historias.length) % historias.length);
  };

  return (
    <section className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Histórias de Cura Dentro do Livro
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto">
            Caminhe ao lado de mulheres bíblicas que encontraram a voz de Deus em suas lutas mais profundas. 
            As histórias delas vão despertar algo lindo na sua própria.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-cream rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-2">
                {historias.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === historiaAtual ? 'bg-rose-500' : 'bg-rose-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center animate-fade-in" key={historiaAtual}>
              <div className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-rose-600" />
              </div>
              
              <h3 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-2">
                {historias[historiaAtual].nome}
              </h3>
              <h4 className="font-crimson text-xl text-rose-600 mb-6">
                {historias[historiaAtual].titulo}
              </h4>
              
              <blockquote className="font-playfair text-2xl md:text-3xl text-gray-warm italic mb-6 leading-relaxed">
                "{historias[historiaAtual].citacao}"
              </blockquote>
              
              <p className="font-crimson text-lg text-gray-warm mb-6 leading-relaxed">
                {historias[historiaAtual].descricao}
              </p>
              
              <p className="font-crimson text-sm text-rose-600 mb-8">
                {historias[historiaAtual].versiculo}
              </p>
              
              <a
  href="https://pay.kiwify.com.br/jZO0fDx"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 shadow-lg text-center"
>
  Leia um trecho
</a>

<a
  href="https://pay.kiwify.com.br/jZO0fDx"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-gold text-brown-soft hover:bg-gold px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 text-center"
>
  Ver a Transformação
</a>
          </div>
          </div>
          
          <button
            onClick={historiaAnterior}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 hover:bg-rose-50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={proximaHistoria}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 hover:bg-rose-50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoriasCura;