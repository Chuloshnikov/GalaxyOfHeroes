"use client"
import {useState} from "react";

const DeleteButton = ({ text, name, onDelete}: {text: string, name:string, onDelete: any}) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center z-50">
        <div className="bg-white p-4 rounded-lg flex flex-col justify-between">
          <div>{text.deleteQuestion}{" "}{name}?</div>
          <div className="flex gap-2 mt-1 flex justify-between">
            <button 
            className='border-2 border-accentBg py-2 px-4 rounded-3xl cursor-pointer'
            type="button" 
            onClick={() => setShowConfirm(false)}>
              {text.cancel}
            </button>
            <button
            className='border-2 bg-accentBg text-mainBg border-accentBg py-2 px-4 rounded-3xl cursor-pointer'
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
              type="button"
              >
              {text.confirm}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button 
    className='border-2 border-accentBg py-1 px-2 rounded-3xl cursor-pointer w-full' 
    type="button" 
    onClick={() => setShowConfirm(true)}>
      {text.deleteButton}
    </button>
  );
}

export default DeleteButton;