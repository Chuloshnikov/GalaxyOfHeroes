import Image from "next/image"
import productImg from "../../../../data/blacksad.png";
import StarRating from "../components/ui/StarRating";
import ProductSection from "../components/mein/ProductSection";
import   {getDictionary } from "../lib/dictionaries";
import getData from "../../../../data/data";

export default async function ProductPage({params: { lang }}) {
  const { bestSellers } = await getDictionary(lang);

  return (
    <section
    className="max-w-contentContainer mx-auto min-h-max"
    >
      <div
      className="flex gap-5"
      >
        {/*PRODUCT IMAGE*/}
        <div
        className="max-w-[400px] max-h-[500px] rounded-xl p-8"
        >
          <Image 
          className="rounded-xl"
          src={productImg} 
          width={400} 
          height={500} 
          alt="comics"
          />
        </div>
        {/*PRODUCT DESCRIPTION*/}
        <div
        className="p-8 flex flex-col gap-2 text-accentBg"
        >
          <h1
          className="text-4xl font-semibold"
          >
            They All Fall Down, Part 2
          </h1>
          <div
          className="flex gap-5"
          >
              <div
              className="border-2 border-green-500 rounded-full px-2 max-w-max"
              >
                <p
                className="text-green-500 text-sm font-medium "
                >in stock
                </p>
              </div>
              <StarRating/>
          </div>
          <div
          className="max-w-xl mt-8 flex flex-col gap-2"
          >
            <p
            className="font-medium"
            >
             ( Juan Díaz Canales, {" "} Juanjo Guarnido )
            </p>
            <p
            className="text-xl"
            >
              Everyone's favorite cat detective is back, and yes, we mean John Blacksad. 
              This time, he's on a particularly thorny case, as he's responsible for protecting the president 
              of a mafia-infiltrated union. This new four-volume story of the bestselling series takes us from 
              soaring heights to terrifying depths as Blacksad navigates from the lofty world of New York 
              theater to the seedy nether regions of the city, where the criminal classes ply their questionable trades. 
              Towering above them all is the figure of Solomon, a construction magnate well on his way to rebuilding 
              the five boroughs, come hell or high water.
            </p>
          </div>
          <button
          className="bg-accentBg text-mainBg font-medium w-full px-4 py-2 rounded-xl mt-4"
          >
            Add to Cart
          </button>
          {/* ADITIONAL PRODUCTS*/}
          <div>
            
          </div>
        </div>
      </div>
      <div>
        <ProductSection lang={lang} sectionText={bestSellers} data={getData()}/>
      </div>
    </section>
  )
}
