

export default function Button({children, className=""}){

    return <div className={`bg-amber-600 rounded shadow-sm hover:shadow-2x hover:text-black hover:bg-amber-400 cursor:pointer p-3 text-enter ${className}`}>{children}</div>
}