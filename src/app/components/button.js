

export default function Button({children, className=""}){

    return <div className={`bg-orange-500 rounded shadow hover:shadow-2x hover:text-white text-orange-900 hover:bg-orange-400 cursor:pointer p-3 text-enter ${className}`}>{children}</div>
}