import React from 'react'

const ContactsPage = ({ lang, text }) => {
  return (
    <div className="max-w-full mb-16">
        <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2 max-w-[520px]">{text.title}</h2>
    </div>
  )
}

export default ContactsPage