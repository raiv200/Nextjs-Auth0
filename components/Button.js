import Link from "next/link";

const Button = ({type ,url}) => {
    return (
        <Link href={url}>

         <a className={`btn ${type ==='Sign In' ?'bg-indigo-600 hover:bg-indigo-500 text-indigo-200':'bg-indigo-300 hover:bg-indigo-400 text-indigo-700'}`}>{type}</a> 
        </Link>
    )
}

export default Button
