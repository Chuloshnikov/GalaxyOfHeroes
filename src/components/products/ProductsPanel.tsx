"use client"
import {useState, useEffect} from 'react'
import SelectedProducts from './SelectedProducts';
import { FaBookOpen } from "react-icons/fa6";
import LoaderSpinner from '../ui/LoaderSpinner';

const ProductsPanel = ({ lang, text, navigation }) => {
  const [categories, setCategories] = useState<any>("");
  const [selectedCategory, setSelectedCategory] = useState<any>("");
  const [products, setProducts] = useState<any>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    setLoading(true);
    fetch('/api/categories').then(response => {
      response.json().then(categories => {
        setCategories(categories);
        setLoading(false);
      })
    });
    }, []);

  useEffect(() => {
    setLoading(true);
    if (selectedCategory) {
      fetch('/api/items').then(response => {
        response.json().then(products => {
          const filteredProducts = products.filter(product => product.category === selectedCategory && product.language === lang);
          setProducts(filteredProducts);
          setLoading(false);
        })
      });
      
    } else {
      fetch('/api/items').then(response => {
        response.json().then(products => {
          const langFilter = products.filter(product => product.language === lang);
          setProducts(langFilter);
          setLoading(false);
        })
      });
    }
  }, [selectedCategory]);



  console.log(selectedCategory);
  console.log(categories);
  console.log(products)

  if (loading) {
    return (
      <div className='w-full h-full flex items-center justify-center pt-[10%] pb-[10%]'>
          <LoaderSpinner/>
      </div>
    )
  }

  

  return (
    <div className='mt-12'>
      <div className='text-center'>
        <h1 className="text-4xl mdl:text-5xl xl:text-7xl text-accentBg font-medium px-2">{text.title}</h1>
      </div>
      <div className='flex gap-2 flex-wrap mx-auto items-center justify-center mt-8'>
      {categories && (<div onClick={() => setSelectedCategory("")} className='cursor-pointer'>
                        <div
                            className='flex gap-2 px-4 py-2 border-2 rounded-xl border-accentBg items-center'
                          >
                          <FaBookOpen className='text-accentBg h-6 w-6'/>
                          <span className='font-semibold text-accentBg text-lg'>{text.allProducts}</span>
                        </div>
                    </div>)
                  }
      {categories && categories.filter(nav => nav.name in navigation).map(nav => (
                <div key={nav.name} onClick={() => setSelectedCategory(nav._id)} className='cursor-pointer'>
                  <div
                    className='flex gap-2 px-4 py-2 border-2 rounded-xl border-accentBg items-center'
                  >
                    <FaBookOpen className='text-accentBg h-6 w-6'/>
                    <span className='font-semibold text-accentBg text-lg'>{navigation[nav.name]}</span>
                  </div>
                </div>
                ))
              }
      </div>
        {products && <SelectedProducts text={text} lang={lang} products={products}/>}
    </div>
  )
}

export default ProductsPanel;