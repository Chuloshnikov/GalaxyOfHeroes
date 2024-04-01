import Link from "next/link"

const UserItem = ({user, text}: {user: any, text: any}) => {
  return (
    <div
    className='shadow-md rounded-lg mb-2 xs:p-2 mdl:p-4 flex items-center'
    >
        <div className="flex xs:flex-col xs:gap-2 mdl:flex-row mdl:gap-8 grow">
            <div className="font-semibold text-accentBg">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span>No name</span>)}
            </div>
            
            <span className='text-accentBg italic text-xs mdl:text-base'>{user.email}</span>
        </div>
        <div>
            <Link 
            className="block max-w-max bg-mainBg text-accentBg px-2 
            py-1 border-2 border-accentBg text-accentBg rounded-xl
            cursor-pointer font-semibold text-xs md:text-base"
            href={'/profile/users/' + user._id}>
                    {text.editButton}
            </Link>
        </div>
    </div>
  )
}

export default UserItem