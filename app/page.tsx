export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#25231f]">
      <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-5 pb-10 pt-5">
        <div className="mb-7 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#756f65]">
          <span className="h-px w-6 bg-[#d6cec0]" /> Oferta única <span className="h-px w-6 bg-[#d6cec0]" />
        </div>
        <header className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0d5] text-2xl shadow-[inset_0_0_0_1px_#f0d6a7]" aria-hidden="true">✋</div>
          <h1 className="font-serif text-[34px] font-bold leading-[1.02] tracking-[-0.035em] text-[#201f1c]">Espere, sua compra ainda não foi finalizada.</h1>
          <p className="mx-auto mt-4 max-w-[330px] text-[16px] leading-6 text-[#676158]">Assista ao vídeo abaixo. São menos de 2 minutos e ele pode transformar o seu resultado.</p>
        </header>
        <section aria-label="Vídeo da oferta" className="mt-7">
          <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#171714] shadow-[0_18px_45px_rgba(45,37,23,0.22)] ring-1 ring-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#3c3931_0%,#181714_60%)]" />
            <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur">Assista agora · 1:47</div>
            <button type="button" aria-label="Reproduzir vídeo" className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffb43f] text-[#2c2417] shadow-[0_10px_30px_rgba(255,180,63,0.35)] transition active:scale-95"><span className="ml-1 text-[30px] leading-none" aria-hidden="true">▶</span></button>
            <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#ffb43f]" />
          </div>
          <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-medium text-[#777066]"><span aria-hidden="true">🔊</span> Verifique se o seu som está ligado</p>
        </section>
        <section className="mt-8 rounded-[24px] border border-[#e8dfd0] bg-white p-5 shadow-[0_14px_38px_rgba(54,43,25,0.08)]">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#a56a12]">Somente nesta página</p>
          <h2 className="mt-2 text-center font-serif text-[25px] font-bold leading-tight tracking-[-0.02em]">Complete sua experiência hoje</h2>
          <ul className="mt-5 space-y-3 text-[14px] leading-5 text-[#4f4a43]">
            {['Acesso imediato ao conteúdo complementar','Método simples para acelerar seus resultados','Pagamento único e acesso garantido'].map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f5e8] text-[12px] font-bold text-[#33733c]">✓</span>{item}</li>
            ))}
          </ul>
          <div className="mt-6 text-center"><p className="text-sm text-[#777066]">De <span className="line-through">R$ 97,00</span> por apenas</p><p className="mt-1 text-[36px] font-black leading-none tracking-[-0.04em] text-[#201f1c]">R$ 27,00</p></div>
          <button className="mt-6 w-full rounded-2xl bg-[#247a42] px-5 py-4 text-[16px] font-extrabold text-white shadow-[0_9px_0_#15532b] transition active:translate-y-1 active:shadow-[0_5px_0_#15532b]">SIM, QUERO ADICIONAR À MINHA COMPRA</button>
          <p className="mt-4 text-center text-[11px] leading-4 text-[#8a8379]">Compra segura · Acesso imediato · Garantia de 7 dias</p>
        </section>
        <button className="mx-auto mt-7 text-xs text-[#8a8379] underline decoration-[#bbb3a7] underline-offset-4">Não, obrigado. Quero continuar sem esta oferta.</button>
      </div>
    </main>
  );
}
