"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';

const CategoriesPage = ({lang, text }: {lang: any, text: any}) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        fetch('/api/profile').then(response => {
            response.json().then(data => {
                setIsAdmin(data.admin);
            })
        })
    }, []);

    if (!isAdmin) {
        return (
        <div
        className='mt-8 text-center text-lg text-red-500'
        >
            Error! Not an admin
        </div>
        )
    }

  return (
    <section
    className='mt-8 max-w-lg'
    >
        categories
    </section>
  )
}

export default CategoriesPage