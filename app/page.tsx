import Script from 'next/script';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#25231f]">
      <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-5 pb-10 pt-7">
        <header className="text-center">
          <h1 className="font-serif text-[34px] font-bold leading-[1.02] tracking-[-0.035em] text-[#201f1c]">Espere, sua compra ainda não foi finalizada.</h1>
          <p className="mx-auto mt-4 max-w-[330px] text-[16px] leading-6 text-[#676158]">Assista ao vídeo abaixo. São menos de 2 minutos e ele pode transformar o seu resultado.</p>
        </header>
        <section aria-label="Vídeo da oferta" className="mt-7">
          <div className="overflow-hidden rounded-[22px] bg-black shadow-[0_18px_45px_rgba(45,37,23,0.22)] ring-1 ring-black/10">
            <vturb-smartplayer id="vid-6a3dd5a5583018d5609e6916" style={{ display: 'block', margin: '0 auto', width: '100%' }}>
              <div className="vturb-player-placeholder" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0', zIndex: 0, backgroundColor: 'black' }} />
            </vturb-smartplayer>
          </div>
          <Script src="https://scripts.converteai.net/f7f63c56-fc11-4d6b-889e-71d2f24f657c/players/6a3dd5a5583018d5609e6916/v4/player.js" strategy="afterInteractive" />
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
          <div className="mt-6 text-center"><p className="text-sm text-[#777066]">De <span className="line-through">R$ 97,00</span> por apenas</p><p className="mt-1 text-[36px] font-black leading-none tracking-[-0.04em] text-[#201f1c]">R$ 47,00</p></div>
          <div className="mt-6 flex cursor-pointer flex-col items-center gap-6 font-sans">
            <div className="button-default button-accept w-full rounded-xl bg-[#34e23c] px-8 py-[17px] text-center text-[16px] font-bold leading-[22px] text-black shadow-[0_7px_0_#1b9121]" id="llupsell-CED18D1C8-">Quero comprar agora!</div>
            <div className="button-default button-deny w-full text-center text-[16px] font-bold leading-[22px] text-black underline" id="denyButtoncc16969">Recusar esta oferta</div>
          </div>
          <p className="mt-4 text-center text-[11px] leading-4 text-[#8a8379]">Compra segura · Acesso imediato · Garantia de 7 dias</p>
        </section>
        <Script src="https://cdn.lastlink.com/upsell.min.js" strategy="afterInteractive" />
        <Script id="lastlink-deny" strategy="afterInteractive">{`
          var upsellRedirect = "https://lastlink.com/app/member/dashboardV2";
          function setupDenyButtons() {
            document.querySelectorAll('[id^="denyButton"]').forEach(function(button) {
              button.onclick = function() {
                var currentUrl = new URL(window.location.href);
                var newUrl = new URL(upsellRedirect);
                currentUrl.searchParams.forEach(function(value, key) { newUrl.searchParams.append(key, value); });
                window.location.href = newUrl.toString();
              };
            });
          }
          setupDenyButtons();
        `}</Script>
      </div>
    </main>
  );
}
