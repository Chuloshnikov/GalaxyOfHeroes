"use client"
import {useState, useEffect} from 'react';
import SavingBox from '../ui/SavingBox';
import { useProfile } from '../profile/UseProfile';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const NewNewsItemPage = ({text, lang}: {text: any, lang: any}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [language, setLanguage] = useState<string>('english');

  {/*redirect to items state*/}
const [redirectToItems, setRedirectToItems] = useState<boolean>(false);

  return (
    <div>NewNewsItemPage</div>
  )
}

export default NewNewsItemPage