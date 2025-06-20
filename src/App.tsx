import React from 'react';
import Hero from './components/Hero';
import SobreLivro from './components/SobreLivro';
import ParaQuemE from './components/ParaQuemE';
import HistoriaMaria from './components/HistoriaMaria';
import JesusTestemunho from './components/JesusTestemunho';
import HistoriasCura from './components/HistoriasCura';
import VersiculosInspiracao from './components/VersiculosInspiracao';
import ChamadaFinal from './components/ChamadaFinal';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Hero />
      <SobreLivro />
      <ParaQuemE />
      <HistoriaMaria />
      <JesusTestemunho />
      <HistoriasCura />
      <VersiculosInspiracao />
      <ChamadaFinal />
    </div>
  );
}

export default App;