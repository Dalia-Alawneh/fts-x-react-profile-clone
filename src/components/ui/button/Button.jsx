export default function Button({ text, className }) {
  return (
    <button
      className={`flex justify-center capitalize items-center bg-btn text-black text-base font-bold rounded-full
      ${className}
      `}>
      {text}
    </button>
  )
}
