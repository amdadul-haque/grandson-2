import React from 'react'

const Section2 = () => {
  return (
    <div className='lg:min-h-[700px] w-full section-2 py-8 md:py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex flex-col gap-5 sm:gap-8 justify-center items-center'>
        <div className="text-box !bg-black">
          <h2 className='section-header'>Nasz Proces Produkcji Wideo</h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 md:justify-between'>
          <div className='text-box !bg-black'>
            <h3 className='section-title'> Konsultacja i Planowanie </h3>
            <p className='text-center'>Na początku każdego projektu z zakresu produkcji wideo przeprowadzamy
              szczegółową konsultację, aby lepiej poznać cele, grupę docelową i wymagania, jakie
              stawia przed nami klient. Na podstawie zebranych informacji tworzymy
              spersonalizowany plan działania, uwzględniając ustalone wskaźniki sukcesu i
              zapewniając efektywne osiągnięcie zamierzonych rezultatów przy pomocy wideo
              marketingu. Nasz zespół dba o każdy detal, aby projekt był dostosowany do
              indywidualnych potrzeb i spełniał oczekiwania klienta.</p>
          </div>
          <div className='text-box !bg-black'>
            <h3 className='section-title'>Produkcja i Montaż Wideo</h3>
            <p className='text-center'>Po nakreśleniu briefu i zaakceptowaniu planu przystępujemy do produkcji video.
              Nasz zespół kreatywny opracowuje scenariusz i czuwa nad każdym etapem
              realizacji, dbając o wysoką jakość produckcji, zgodną z wizją klienta. Na planie
              zdjęciowym korzystamy z uznanej na rynku serii kamer Sony FX oraz obiektywów
              dobranych zgodnie z koncepcją wizualną naszych operatorów.
              <br />
              Gdy zakończymy nagrywanie, rozpoczyna się etap montażu wideo. Na etapie
              postprodukcji, wraz z reżyserem i klientem, dokładnie selekcjonujemy każdy kadr,
              aby zapewnić spójną i atrakcyjną narrację. Ten etap realizowany jest na naszych
              stacjach montażowych w towarzystwie reżysera i klienta. Bardzo ważnych ogniwem
              w całym procesie jest colorgrading, który wydobywa z obrazu nasycone barwy,
              światłocień i detale, które nadają dziełu charakteru i estetyki. Starannie dobrana
              muzyka z naszej bazy podkreśla emocje i spaja całą historię.
            </p>
          </div>
          <div className='text-box !bg-black'>
            <h3 className='section-title'>Optymalizacja, Dystrybucja i Promocja </h3>
            <p className='text-center'>
              Dokładna analiza treści video służy nam w dostosowaniu jej do standardów SEO w
              mediach społecznościowych, zapewniając satysfakcjonujące indeksowanie i wysoką
              pozycję na stronach wyników wyszukiwania pod kątem odpowiednich słów
              kluczowych. W ramach dystrybucji, dostosowujemy wyprodukowany materiał do
              różnych platform i kanałów dystrybucji, takich jak YouTube, Facebook, Instagram czy
              Tik Tok.
              <br />
              Kolejnym kluczowym etapem jest kompleksowa promocja, wykorzystująca
              narzędzia reklamowe, influencerów oraz strategie content marketingowe,
              umożliwiające dotarcie do jak najszerszej grupy docelowej. Dzięki temu, zapewniamy
              naszym klientom widoczność i skuteczność, co przekłada się na osiąganie
              zamierzonych celów marketingowych, budowanie silnej obecności online i konwersję
              na wysokim poziomie.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section2