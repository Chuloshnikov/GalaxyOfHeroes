import Image from 'next/image';
import { MdOutlineImageNotSupported } from "react-icons/md";

const EditableItemsImages = ({text, images, setImages, setUploading, setError}) => {

    const uploadImages = async (e) => {
        setUploading(true);
        const files = e.target.files;
        if (files.length > 0 ) {
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }
            const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: data,
            });
            const link = await response.json();
            if (link) {
                setImages(prevImages => [...prevImages, link]);
                setUploading(false);
            } else {
                setUploading(false);
                setError(true);
            }
            
        }
    }

  return (
    <div
            className='flex gap-2 flex-col'
            >
                <label className='text-accentBg text-xs font-semibold'>{text.itemImage}</label>
                <div
                className="xs:w-[270px] xs:h-[270px] lg:w-[400px] lg:w-[400px] mt-2 xs:mb-[70px] lg:mb-[55%]"
                >   
                    {images?.length === 0 ? (
                        <div
                        className='h-full w-full border-2 border-accentBg rounded-lg'
                        >
                            <MdOutlineImageNotSupported className="w-16 h-16 text-accentBg mt-4 ml-4"/>
                        </div>
                    ) : (
                        <Image className="rounded-lg w-full mb-1" src={images?.length > 1  ? images[images.length - 1] : images[0]} width={400} height={400} alt={'item image'} />
                    )}
                    <label>
                        <input type="file" className='hidden' onChange={uploadImages}/>
                            <span 
                            className='block max-w-max bg-mainBg py-1 px-2 rounded-xl 
                            text-assentBg font-semibold border-2 border-accentBg cursor-pointer text-xs sm:text-base mt-2'
                            >
                                {text.addImageButton}
                            </span>
                    </label>
                </div>
                <div
                className='flex gap-2'
                >
                    {!images?.length ? (
                        <span
                        className='block text-accentBg font-semibold'
                        >
                            {text.noPhotosText}
                        </span>
                    ) : images.map(image => (
                        <div
                        key={image}
                        >
                            <Image src={image} width={50} height={50} className='rounded-lg'/>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default EditableItemsImages