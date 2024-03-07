import Image from 'next/image';
import { MdOutlineImageNotSupported } from "react-icons/md";

const EditableNewsImage = ({text, image, setImage, setUploading, setError}) => {

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            setUploading(true);
            const response = await fetch('api/upload', {
                method: 'POST',
                body: data,
            })

            const link = await response.json();
            if (link) {
                setImage(link);
                setUploading(false);
            } else {
                setUploading(false);
                setError(true);
            }
            
        }
    }

    return (
        <div
        className="max-w-[400px] h-[200px] mt-2 flex flex-col gap-2"
        >
            {image ? (
                <Image className="rounded-lg w-full mb-1" src={image} width={400} height={250} alt={'image'} />
            ) : (
                <div
                className='h-full w-full border-2 border-accentBg rounded-lg'
                >
                    <MdOutlineImageNotSupported className="w-16 h-16 text-accentBg mt-4 ml-4"/>
                </div>
            )}
            <label>
                <input type="file" className='hidden' onChange={handleFileChange}/>
                <span 
                className='block max-w-max bg-mainBg py-1 px-2 rounded-xl 
                text-assentBg font-semibold border-2 border-accentBg cursor-pointer text-xs sm:text-base'
                >
                    {text}
                </span>
            </label>
        </div>

    )
}

export default EditableNewsImage;