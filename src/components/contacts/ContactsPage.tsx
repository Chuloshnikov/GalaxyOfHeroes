import React from 'react'

const ContactsPage = ({ lang, text }) => {
  return (
    <div className="max-w-full mb-16">
        <div className='flex flex-col gap-8'>
            <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2 max-w-[520px]">{text.title}</h2>
            <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.subTitle}</p>
        </div>
        <div className='flex flex-col mdl:flex-row-reverse gap-8'>

        </div>
    </div>
  )
}

export default ContactsPage