import Image from 'next/image';
import Avatar from "../../../public/avatar.png";

const EditableImage = ({text, link, setLink, setUploading, setError}) => {

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
                setLink(link);
            setUploading(false);
            } else {
                setUploading(false);
                setError(true);
            }
            
        }
    }

    return (
        <div
        className="w-[200px] h-[200px] mt-2"
        >
            {link?.length ? (
                <Image className="rounded-lg w-full mb-1" src={link} width={250} height={250} alt={'avatar'} />
            ) : (
                <Image className="rounded-lg w-full mb-1" src={Avatar} width={250} height={250} alt={'avatar'} />
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

export default EditableImage;