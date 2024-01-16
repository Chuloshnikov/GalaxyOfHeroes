import Image from "next/image"
import productImg from "../../../../data/blacksad.png";
import StarRating from "../../../components/ui/StarRating";
import ProductSection from "../../../components/mein/ProductSection";
import   {getDictionary } from "../../../lib/dictionaries";
import getData from "../../../../data/data";
import ReviewsComponent from "../../../components/ui/ReviewsComponent";

export default async function ProductPage({params: { lang }}) {
  const { bestSellers } = await getDictionary(lang);

  return (
    <section
    className="max-w-contentContainer mx-auto min-h-max"
    >
      <div
      className="flex gap-2 md:gap-5 flex-col lg:flex-row"
      >
        {/*PRODUCT IMAGE*/}
        <div
        className="relative max-w-[400px] min-h-[500px] rounded-xl p-8"
        >
          <p
            className="z-30 absolute top-9 left-10 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
            >
              Top seller
          </p>
          <Image 
          className="rounded-xl"
          src={productImg} 
          width={400} 
          height={500} 
          alt="comics"
          />
          <div
          className="flex flex-wrap gap-2 mt-2 items-center justify-center"
          >
            {/*small images*/}
            <Image
            className="rounded-md"
            src={productImg} 
            width={60} 
            height={70} 
            alt="comics"
            />
            <Image
            className="rounded-md"
            src={productImg} 
            width={60} 
            height={70}
            alt="comics"
            />
            <Image
            className="rounded-md"
            src={productImg} 
            width={60} 
            height={70} 
            alt="comics"
            />
            <Image
            className="rounded-md"
            src={productImg} 
            width={60} 
            height={70}
            alt="comics"
            />
            <Image
            className="rounded-md"
            src={productImg} 
            width={60} 
            height={70}
            alt="comics"
            />
          </div>
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
              className="border-2 border-green-500 rounded-full px-1 sm:px-2 max-w-max"
              >
                <p
                className="text-green-500 text-sm font-medium "
                >in stock
                </p>
              </div>
              <StarRating/>
          </div>
          <div
          className="relative max-w-xl mt-4 flex flex-col gap-2"
          >
            {/*prise*/}
            <p
            className="absolute top-14 -right-4 sm:right-1 md:top-8 md:right-4 rounded-full bg-accentBg p-4 text-2xl font-bold text-mainBg"
            >
              12.99$
            </p>
            <p
            className="font-medium"
            >
            Authors & Artist: ( Juan Díaz Canales, {" "} Juanjo Guarnido )
            </p>
            <p
            className="font-medium"
            >
              Format: 56 pages, ebook
            </p>
            <p
            className="font-medium"
            >
              Language: English
            </p>
            <p
            className="font-medium"
            >
              Published: November 17, 2021 by Europe Comics
            </p>
            <p
            className="text-base font-medium"
            >
              Everyone's favorite cat detective is back, and yes, we mean John Blacksad. 
              This time, he's on a particularly thorny case, as he's responsible for protecting the president 
              of a mafia-infiltrated union. This new four-volume story of the bestselling series takes us from 
              soaring heights to terrifying depths as Blacksad navigates from the lofty world of New York 
              theater to the seedy nether regions of the city, where the criminal classes ply their questionable trades. 
              Towering above them all is the figure of Solomon, a construction magnate well on his way to rebuilding 
              the five boroughs, come hell or high water.
            </p>
            <div 
            className="flex flex-wrap gap-1 text-sm font-semibold mt-2"
            >
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Graphic Novels</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Bande Dessinée</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Comics</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Crime</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Comics Manga</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Fiction</span>
              <span className="bg-accentBg py-1 px-2 text-mainBg items-center text-nowrap rounded-xl">Thriller</span>
            </div>
          </div>
          <button
          className="bg-accentBg text-mainBg font-medium w-full px-4 py-2 rounded-xl mt-4"
          >
            Add to Cart
          </button>
          {/* ADITIONAL PRODUCTS*/}
          <div
          className="flex flex-col gap-1"
          >
            <h2
            className="text-xl font-bold"
            >
              Aditional Products
            </h2>
            {/*CARTS*/}
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={productImg} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>  
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={productImg} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div> 
              <div
              className="flex gap-1 border border-accentBg rounded-xl p-1"
              >
                <Image 
                src={productImg} 
                width={70} 
                height={80} 
                className="rounded-xl"
                alt="comics"
                />
                <div
                className="text-base font-medium"
                >
                  <h3>They All Fall Down, Part 2</h3>
                  <p>Juan Díaz Canales, {" "} Juanjo Guarnido</p>
                  <p>15.99$</p>
                  <button
                  className="py-1 px-2 bg-accentBg rounded-lg text-mainBg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>  
          </div>
        </div>
      </div>
      <div>
        <ReviewsComponent/>
        <ProductSection lang={lang} sectionText={bestSellers} data={getData()}/>
      </div>
    </section>
  )
}
