


export default function Well({children, className=""}){
    return <div className={`${className} bg-white bg-opacity-75 rounded-lg p-6 text-black`}>
        {children}
        </div>
}