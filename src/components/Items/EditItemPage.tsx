"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { IoMdArrowDropdown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import EditableItemsImages from './EditableItemsImages';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';
import DeleteButton from '../ui/DeleteButton';


const EditItemPage = ({text, lang}: {text: any, lang: any}) => {
const {id} = useParams();

const [images, setImages] = useState<any>([]);
const [title, setTitle] = useState<string>('');
const [brand, setBrand] = useState<string>('');
const [authors, setAuthors] = useState<string>('');
const [illustrators, setIllustrators] = useState<string>('');
const [format, setFormat] = useState<string>('');
const [published, setPublished] = useState<string>('');
const [description, setDescription] = useState<string>('');
const [category, setCategory] = useState<string>('');
const [categories, setCategories] = useState<any>([]);
const [sku, setSku] = useState<string>('');
const [tagText, setTagText] = useState<string>('');
const [tags, setTags] = useState<any>([]);
const [quantity, setQuantity] = useState<number>(0);
const [regularPrice, setRegularPrice] = useState<number>(0);
const [salePrice, setSalePrice] = useState<number>(0);
const [language, setLanguage] = useState<string>('en');

{/*redirect to items state*/}
const [redirectToItems, setRedirectToItems] = useState<boolean>(false);


{/*UI States*/}
const [deleted, setDeleted] = useState<boolean>(false);
const [isDeleting, setIsDeleting] = useState<boolean>(false)
const [isUploading, setIsUploading] = useState<boolean>(false);
const [isSaving, setIsSaving] = useState<boolean>(false);
const [isError, setIsError] = useState<boolean>(false);
const [saved, setSaved] = useState<boolean>(false);

{/*Admin State*/}
const {loading: profileLoading, data: profileData} = useProfile();

useEffect(() => {
    fetch('/api/items').then(res => {
        res.json().then(items => {
            const item = items.find(item => item._id === id);
            setImages(item.images);
            setTitle(item.title);
            setBrand(item.brand);
            setAuthors(item.authors);
            setIllustrators(item.illustrators);
            setFormat(item.format);
            setPublished(item.published);
            setDescription(item.description);
            setCategory(item.category);
            setSku(item.sku);
            setTags(item.tags);
            setQuantity(item.quantity);
            setRegularPrice(item.regularPrice);
            setSalePrice(item.salePrice);
            setLanguage(item.language);
        });
    });

    fetch('/api/categories').then(res => {
        res.json().then(categories => {
            setCategories(categories);
        });
    });
}, [id]);

useEffect(() => {
    if (saved) {
        setTimeout(() => {
            setSaved(false);
        }, 2000);
    } else if (isError) {
        setTimeout(() => {
            setIsError(false);
        }, 2000);
    } else if (isDeleting) {
        setTimeout(() => {
            setIsDeleting(false);
        }, 2000);
    }
}, [saved, isDeleting, isError]);


    const handleFormSubmit = async (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSaved(false);
        setIsSaving(true);

        const data = {
            images,
            title, 
            brand, 
            authors, 
            illustrators, 
            format, 
            published, 
            description, 
            sku, 
            tags, 
            language, 
            category, 
            regularPrice, 
            salePrice, 
            quantity,
            _id: id
        };
        const response = await fetch('/api/items', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data),
        })
        if (response.ok) {
            setIsSaving(false);
            setSaved(true);   
            setRedirectToItems(true);
        } else {
            setIsSaving(false);
            setIsError(true);
        }
        
    }

    if (redirectToItems) {
        return redirect(`/${lang}/profile/items`);
    }

    const handleTagInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTagText(e.target.value);
      };

      const handleAddTag = () => {
        if (tagText.trim() !== '') {
          setTags([...tags, tagText]);
          setTagText('');
        }
      };

      const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
      };

      async function handleDeleteClick() {
            setIsDeleting(true);
            const res = await fetch('/api/items?_id=' + id, {
                method: 'DELETE',
            });
            if (res.ok) {
                setIsDeleting(false);
                setDeleted(true);
                setRedirectToItems(true);
            } else {
                setIsError(true);
            }
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
    


  return (
    <div>
        <div
        className='mt-8 flex flex-col gap-2 ml-4 xl:ml-0'
        >
            <h2
            className='text-4xl text-accentBg font-medium'
            >
                {text.title}
            </h2>
            <Link 
            className="block max-w-max bg-mainBg text-accentBg px-2 
            py-1 border-2 border-accentBg text-accentBg rounded-3xl
            cursor-pointer font-semibold"
            href={"/profile/items"}>
                {text.toAllItems}
            </Link>
        </div>
        <form
        onSubmit={handleFormSubmit}
        className='formLabel mt-8 max-w-4xl mx-auto flex xs:flex-col-reverse lg:flex-row gap-4'
        >
            
        {/*form cantainer start*/}
            <div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemName}</label>
                    <input 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemDescription}</label>
                    <textarea 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className='itemsInput'
                    />
                </div>
                <div
                className='flex flex-col relative'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemCategory}</label>
                    <select className='primary relative' value={category} onChange={e => setCategory(e.target.value)}>
                        {categories?.length > 0 && categories.map(c => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                    <IoMdArrowDropdown className="pointer-events-none absolute inset-y-0 right-1 top-5 text-accentBg w-7 h-7"/>
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemBrandName}</label>
                    <input 
                    onChange={e => setBrand(e.target.value)}
                    value={brand}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemAuthors}</label>
                    <input 
                    onChange={e => setAuthors(e.target.value)}
                    value={authors}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemIllustrators}</label>
                    <input 
                    onChange={e => setIllustrators(e.target.value)}
                    value={illustrators}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemPublished}</label>
                    <input 
                    onChange={e => setPublished(e.target.value)}
                    value={published}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex flex-col'
                >
                    <label className='text-accentBg text-xs font-semibold'>{text.itemFormat}</label>
                    <input 
                    onChange={e => setFormat(e.target.value)}
                    value={format}
                    className='itemsInput'
                    type="text"
                    />
                </div>
                <div
                className='flex xs:flex-col mdl:flex-row gap-2'
                >
                    <div
                    className='flex flex-col'
                    >
                        <label className='text-accentBg text-xs font-semibold'>{text.itemSku}</label>
                        <input
                        onChange={e => setSku(e.target.value)}
                        value={sku}
                        className='itemsInput'
                        type="text"
                        />
                    </div>
                    <div
                    className='flex flex-col'
                    >
                        <label className='text-accentBg text-xs font-semibold'>{text.itemStockQuantity}</label>
                        <input
                        onChange={e => setQuantity(e.target.value)}
                        value={quantity}
                        className='itemsInput'
                        type="number"
                        />
                    </div>
                </div>
                    <div
                    className='flex xs:flex-col mdl:flex-row gap-2'
                    >
                        <div
                        className='flex flex-col'
                        >
                            <label className='text-accentBg text-xs font-semibold'>{text.itemRegularPrice}</label>
                            <input
                            onChange={e => setRegularPrice(e.target.value)}
                            value={regularPrice}
                            className='itemsInput'
                            type="text"
                            />
                        </div>
                        <div
                        className='flex flex-col'
                        >
                            <label className='text-accentBg text-xs font-semibold'>{text.itemSalePrice}</label>
                            <input
                            onChange={e => setSalePrice(e.target.value)}
                            value={salePrice}
                            className='itemsInput'
                            type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div
                            className='flex flex-col'
                            >
                                <label className='text-accentBg text-xs font-semibold'>{text.itemTags}</label>
                                <input
                                value={tagText}
                                onChange={handleTagInputChange}
                                className='itemsInput'
                                type="text"
                                />
                                <span
                                className="mt-2 max-w-max bg-accentBg text-mainBg px-2 
                                py-1 border-2 border-accentBg text-accentBg rounded-3xl
                                cursor-pointer"
                                onClick={handleAddTag}
                                >
                                    {text.addTagButtonText}
                                </span>
                            </div>
                            <div>
                                <label className='text-accentBg text-xs font-semibold'>{text.itemTagList}</label>
                                <div
                                className=' border-2 border-accentBg rounded-2xl min-h-[100px] max-w-[400px] p-1 flex flex-wrap gap-1'
                                >
                                    {tags?.length > 0 && tags.map((tag, index) => (
                                         <div
                                         key={index}
                                         className='bg-accentBg text-mainBg font-semibold 
                                         text-sm p-1 px-2 rounded-full max-w-max max-h-[28px]
                                         flex items-center gap-1'
                                         >
                                             {tag} 
                                             <button onClick={() => handleRemoveTag(index)}><TiDelete className="text-mainBg w-5 h-5"/></button>
                                         </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                    className='mt-2'
                    >
                        {/*form selection*/}
                    <label className='text-accentBg text-xs font-semibold'>{text.itemLangSelectionText}</label>
                        <div
                        className='relative border-2 solid border-accentBg rounded-full max-w-max flex items-center'>
                                <select 
                                onChange={e => setLanguage(e.target.value)}
                                defaultValue={"english"}
                                required={true}
                                className=' bg-mainBg font-semibold text-accentBg p-2 rounded-full'
                                name="select"
                                >
                                    <option className='bg-mainBg font-semibold' value="en">English</option>
                                    <option className='bg-mainBg font-semibold' value="de">Deutch</option>
                                    <option className='bg-mainBg font-semibold'value="ua">Ukraine</option>
                                </select>
                        </div>
                    </div>
                    <div>
                        <button 
                        className='mt-2 w-full bg-accentBg text-mainBg px-2 py-1 border-2 border-accentBg text-accentBg rounded-3xl'
                        type="submit"
                        >
                            {text.updateButton}
                        </button>
                        <div
                        className='mt-2'
                        >
                            <DeleteButton 
                            text={text}
                            onDelete={handleDeleteClick}
                            />
                        </div>
                    </div>
            </div>
                {/*form container end*/}
                {/* image container*/}
                <EditableItemsImages 
                text={text}
                images={images} 
                setImages={setImages}
                setUploading={setIsUploading} 
                setError={setIsError}
                />
        </form>
        {saved && (
                    <SavingBox text={text.itemSaved} frame="bg-green-100 border border-green-400"/>
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
                    {isDeleting && (
                        <SavingBox text={text.deleting} frame="bg-blue-200 border border-blue-400"/>
                    )}
                     {deleted && (
                        <SavingBox text={text.categoryDeleted} frame="bg-green-100 border border-green-400"/>
                    )}
    </div>
  )
}

export default EditItemPage;