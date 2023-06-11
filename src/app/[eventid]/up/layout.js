import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"


export default async function EventLayout({ children }) {
    const session = await getServerSession(authOptions);
    if(session || true ){
        return <>{children}</>
    }
    else{
        return <div className="text-red-500 text-2xl">Not Authorized</div>
    }

}