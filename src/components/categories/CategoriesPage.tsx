"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { useProfile } from '../profile/UseProfile';
import DeleteButton from '../ui/DeleteButton';

const CategoriesPage = ({lang, text }: {lang: any, text: any}) => {
    const [categoryName, setCategoryName] = useState<string>('');
    const [categories, setCategories] = useState<any>([]);
    const [editedCategory, setEditedCategory] = useState(null);
    const [saved, setSaved] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const {loading: profileLoading, data: profileData} = useProfile();

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 2000);
        } else if (deleted) {
            setTimeout(() => {
                setDeleted(false);
            }, 2000);
        } else if (isError) {
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }, [saved, deleted, isError]);

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
        const data = {name: categoryName};
        if (editedCategory) {
            setIsSaving(false);
            setIsUpdating(true);
            data._id = editedCategory._id;
        }
        const response = await fetch('/api/categories', {
            method: editedCategory ? 'PUT' : 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data),
        });
        setCategoryName('');
        fetchCategories();
        if (response.ok) {
            setIsSaving(false);
            setIsUpdating(false);
            setSaved(true);   
        } else {
            setIsSaving(false);
            setIsError(true);
        }
    }

    async function handleDelete(_id) {
          setIsDeleting(true);
          const response = await fetch('/api/categories?_id='+_id, {
            method: 'DELETE',
          });
          fetchCategories();
          if (response.ok) {
            setIsDeleting(false);
            setDeleted(true);
          } else {
            setIsDeleting(false);
            setIsError(true);
          }
        };

  return (
    <section
    className='mt-8 max-w-2xl mx-auto'
    >
        <form
        onSubmit={handleCategorySubmit}
        className='flex flex-col gap-2'
        >           
                    {saved && (
                        <SavingBox text={text.categorySaved} frame="bg-green-100 border border-green-400"/>
                    )}
                     {deleted && (
                        <SavingBox text={text.categoryDeleted} frame="bg-green-100 border border-green-400"/>
                    )}
                    {isSaving && (
                        <SavingBox text={text.saving} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isUpdating && (
                        <SavingBox text={text.updating} frame="bg-blue-200 border border-blue-400"/>
                    )}
                    {isDeleting && (
                        <SavingBox text={text.deleting} frame="bg-blue-200 border border-blue-400"/>
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
                    {editedCategory ? text.updateCategory : text.newCategory}
                    {editedCategory && (
                        <>
                            :{" "}{editedCategory.name}
                        </>
                    )}
                </label>
                <input 
                onChange={e => setCategoryName(e.target.value)}
                className='bg-accentBg text-smouthText text-sm lg:text-base py-3 px-3 mdl:px-5 rounded-3xl placeholder:text-smouthText'
                type="text"
                value={categoryName}
                />
            </div>
            <div
            className='flex gap-2'
            >
                <button
                className='bg-mainBg py-2 px-4 rounded-3xl max-w-max text-assentBg font-semibold border-2 border-accentBg'
                type='submit'
                >
                    {editedCategory ? text.updateButton : text.createButton}
                </button>
                <button
                className='bg-mainBg py-2 px-4 rounded-3xl max-w-max text-assentBg font-semibold border-2 border-accentBg'
                type="button"
                onClick={() => {
                setEditedCategory(null);
                setCategoryName('');
                }}
                >
                {text.cancel}
                </button>
            </div>
        </form>
        <div
            className='mt-4'
            >
                <h2 className='font-semibold text-lg text-accentBg'>{text.editCategory}:</h2>
                {categories?.length > 0 && categories.map(category => (
                        <div
                        className='bg-white rounded-3xl text-accentBg font-semibold  flex justify-between mt-1'
                        >
                            <div
                            className='py-1 px-2 text-xl'
                            >
                                
                                <span>{category.name}</span>
                            </div>
                            <div
                            className='flex gap-1'
                            >
                                <button
                                onClick={() => {
                                    setEditedCategory(category);
                                    setCategoryName(category.name);
                                }}
                                className='border-2 border-accentBg py-1 px-4 rounded-3xl cursor-pointer'
                                >
                                    {text.editCategory}
                                </button>
                                <DeleteButton
                                 text={text}
                                 onDelete={() => handleDelete(category._id)}
                                />
                            </div>
                               
                        </div>
                    ))
                }
            </div>
    </section>
  )
}

export default CategoriesPage