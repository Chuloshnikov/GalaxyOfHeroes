"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react'

const ContactsForm = ({ text }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] =useState<string>("");
    const [question, setQuestion] = useState("");

  return (
    <div className='p-4'>
        <form className='flex flex-col gap-2'>
            <div>
                <label className='font-semibold text-sm text-accentBg'>{text.nameInputTitle}</label>
                <input className='contactsInput' type="text" value={name} placeholder={text.nameInputPlaceholder} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
            <label className='font-semibold text-sm text-accentBg'>{text.emailInputTitle}</label>
                <input className='contactsInput' type="text" value ={email} placeholder={text.emailInputPlaceholder} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
            <label className='font-semibold text-sm text-accentBg'>{text.phoneInputTitle}</label>
                <input className='contactsInput' type="text"value={phone} placeholder={text.phoneInputPlaceholder} onChange={e => setPhone(e.target.value)}/>
            </div>
            <div>
            <label className='font-semibold text-sm text-accentBg'>{text.questionInputTitle}</label>
                <input className='contactsInput' type="text" value={question} placeholder={text.questionInputPlaceholder} onChange={e => setQuestion(e.target.value)}/>
            </div>
            <div className='text-sm text-accentBg font-semibold flex gap-2 p-2 bg-red-100 rounded-xl items-center mt-2'>
                <input className='' type="checkbox"/>
                <label>{text.agree}</label>
                <Link className='underline' href={'/private-policy'}>{text.policy}</Link>
            </div>
            <button type="submit" className='max-w-max text-mainBg bg-accentBg px-4 py-2 rounded-xl mt-2'>{text.sendButton}</button>
        </form>
        <div>
            
        </div>
    </div>
  )
}

export default ContactsForm