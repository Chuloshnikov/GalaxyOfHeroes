"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { useProfile } from '../profile/UseProfile';

const CategoriesPage = ({lang, text }: {lang: any, text: any}) => {
    const [categoryName, setCategoryName] = useState<string>('');
    const [categories, setCategories] = useState<any>([]);
    const [editedCategory, setEditedCategory] = useState(null);
    const [saved, setSaved] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const {loading: profileLoading, data: profileData} = useProfile();

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 2000);
        } else if (isError) {
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }, [saved, isError]);

    useEffect(() => {
        fetchCategories(); 
    }, []);

    function fetchCategories() {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            })
        })
    }

    if (profileLoading) {
        return 'Loading user info...';
    }

    if (!profileData.admin) {
        return (
        <div
        className='mt-8 text-center text-lg text-red-500'
        >
            Error! Not an admin
        </div>
        )
    }

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('/api/categories', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name: categoryName}),
        });
        setCategoryName('');
        fetchCategories();
        if (response.ok) {
            setIsSaving(false);
            setSaved(true);   
        } else {
            setIsSaving(false);
            setIsError(true);
        }
    }

  return (
    <section
    className='mt-8 max-w-lg mx-auto'
    >
        <form
        onSubmit={handleCategorySubmit}
        className='flex flex-col gap-2'
        >
             {saved && (
                        <SavingBox text={text.categorySaved} frame="bg-green-100 border border-green-400"/>
                        
                    )}
                    {isSaving && (
                        <SavingBox text={text.saving} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isUploading && (
                        <SavingBox text={text.uploading} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isError && (
                        <SavingBox text={text.error} frame="bg-red-200 border border-bed-400"/>
                    )}
            <div
            className='flex flex-col'
            >
                <label
                className='text-sm lg:text-base font-medium text-accentBg'
                >
                    {text.newCategory}
                </label>
                <input 
                onChange={e => setCategoryName(e.target.value)}
                className='bg-accentBg text-smouthText text-sm lg:text-base py-3 px-3 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                type="text"
                value={categoryName}
                />
            </div>
            <div>
                <button
                className='bg-mainBg py-2 px-4 rounded-3xl max-w-max text-assentBg font-semibold border-2 border-accentBg'
                type='submit'
                >
                    Create
                </button>
            </div>
            <div
            className='mt-4'
            >
                <h2 className='font-semibold text-lg text-accentBg'>{text.editCategory}:</h2>
                {categories?.length > 0 && categories.map(category => (
                        <div
                        className='bg-white rounded-3xl text-accentBg font-semibold cursor-pointer flex justify-between'
                        >
                            <div
                            className='flex gap-2 border-2 border-accentBg py-2 px-4 rounded-3xl'
                            >
                                <span>{text.editCategory}:</span>
                                <span>{category.name}</span>
                            </div>
                                <button
                                className=' border-2 border-accentBg py-2 px-4 rounded-3xl'
                                >
                                    {text.deleteButton}
                                </button>
                        </div>
                    ))
                }
            </div>
        </form>
    </section>
  )
}

export default CategoriesPage