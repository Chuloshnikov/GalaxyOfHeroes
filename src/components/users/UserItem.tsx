import Link from "next/link"

const UserItem = ({user}: {user: any}) => {
  return (
    <div
    className='shadow-md rounded-lg mb-2 p-4 flex items-center'
    >
        <div className="flex xs:flex-col xs:gap-2 mdl:flex-row mdl:gap-8 grow">
            <div className="font-semibold text-accentBg">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span>No name</span>)}
            </div>
            
            <span className='text-accentBg italic'>{user.email}</span>
        </div>
        <div>
            <Link 
            className="block max-w-max bg-mainBg text-accentBg px-2 
            py-1 border-2 border-accentBg text-accentBg rounded-xl
            cursor-pointer font-semibold"
            href={'/users/' + user._id}>
                    Edit
            </Link>
        </div>
    </div>
  )
}

export default UserItem