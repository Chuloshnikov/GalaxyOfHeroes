"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react'

const ContactsForm = ({ text }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] =useState<string>("");
    const [question, setQuestion] = useState("");

  return (
    <div className='p-4 flex flex-col mdl:flex-row justify-between gap-10'>
        <form className='flex flex-col gap-2 w-full'>
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
        <div className='bg-white text-accentBg p-8 rounded-2xl flex flex-col gap-4'>
            <div>
                <h3 className='text-lg font-semibold'>{text.chatWithUsTitle}</h3>
                <p className='text-sm'>{text.chatWithUsSubTitle}</p>
                <Link className='text-sm font-semibold' href={`mailto:${text.ourEmail}`}>{text.ourEmail}</Link>
            </div>
            <div>
                <h3 className='text-lg font-semibold'>{text.callUsTitle}</h3>
                <p className='text-sm'>{text.callUsSubTitle}</p>
                <Link className='text-sm font-semibold' href={`tel:${text.ourPhone}`}>{text.ourPhone}</Link>
            </div>
            <div>
                <h3 className='text-lg font-semibold'>{text.visitUsTitle}</h3>
                <p className='text-sm'>{text.visitUsSubTitle}</p>
                <span className='text-sm font-semibold'>{text.address}</span>
            </div>
        </div>
    </div>
  )
}

export default ContactsForm