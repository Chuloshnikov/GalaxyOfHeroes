const SavingBox = ({text, frame}) => {
  return (
    <div
    className={`text-center ${frame} rounded-xl py-2 my-2 font-medium`}
    >
        {text}
    </div>
  )
}

export default SavingBox