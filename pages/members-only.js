import {withPageAuthRequired } from "@auth0/nextjs-auth0";

const membersOnly = () => {
    return (
        <div>
        <h1 className="text-5xl font-semibold mt-10 text-center text-indigo-600">This page is for Members Only.</h1>   
        </div>
    )
}

export default membersOnly

export const getServerSideProps = withPageAuthRequired();


