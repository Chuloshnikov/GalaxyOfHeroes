import Image from "next/image";
import DateConverter from "@/components/ui/DateConverter";

const NewsItem = ({ item }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <div className="flex items-center justify-between w-full">
            <span className="border border-accentBg text-accentBg font-semibold px-2 py-1 rounded-xl">{item.topic}</span>
            <div className="text-accentBg font-medium">
                <DateConverter mongoDate={item.createdAt}/>
            </div>
        </div>
        <div className="w-full max-h-[400px] overflow-hidden rounded-2xl">
            <Image className="rounded-2xl" src={item.image} width={800} height={400} alt="newsimage"/>
        </div>
        <div className="text-accentBg max-w-[800px] flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="font-medium">{item.description}</p>
        </div>
    </div>
  )
}

export default NewsItem;