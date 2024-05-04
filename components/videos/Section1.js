import React from 'react'

const Section1 = () => {
  return (
    <div className='lg:h-[700px] w-full section-1 py-16'
    >
      <div className='container-wrapper text-gray-100 h-full flex items-center'>
        <div className='flex flex-col lg:flex-row gap-10 md:justify-between'>
          <div className='px-4 py-6 bg-black bg-opacity-50 '>
            <h3 className='text-center text-2xl md:text-4xl mb-5 md:mb-8'>Twoje historie w naszych obrazach</h3>
            <p className='text-center'>Video marketing to niezwykle skuteczne narzędzie, które pozwala na dynamiczne i
              angażujące dotarcie do Twojej grupy docelowej. Nasza profesjonalna produkcja video
              pomoże Ci w skutecznym przekazywaniu Twoich historii. Wykorzystując video, możemy
              przyciągnąć uwagę, zwiększyć świadomość Twojej marki oraz budować trwałe relacje z
              klientami. Dzięki profesjonalnemu podejściu do produkcji video i efektywnej strategii
              marketingowej, pomożemy Ci osiągnąć sukces na rynku.
            </p>
          </div>
          <div className='px-4 py-6 bg-black bg-opacity-50 '>
            <h2 className='text-center text-2xl md:text-4xl mb-5 md:mb-8'>Nasze Formaty Video</h2>
            <p className='text-center'>Oferujemy różnorodne formaty video, które wzbogacą Twoją strategię marketingową,
              włączając w to animowane explainery, filmy wizerunkowe, podcasty oraz reklamy oparte na
              sztucznej inteligencji. Portfolio naszej agencji uzupełniają także regularne produkcje
              telewizyjne oraz pełnometrażowe dokumenty. Zapewniamy kompleksową obsługę od etapu
              developmentu, aż po postprodukcję, dbając o sprawny przebieg działań i wysoką jakość
              efektu końcowego, aby spełnić oczekiwania nawet najbardziej wymagających klientów.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1