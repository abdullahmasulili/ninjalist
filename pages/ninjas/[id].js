import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {user}
    }
}

const Details = ({user}) => {
    return ( 
        <>
            <Head>
                <title>Ninja Detail</title>
            </Head>

            <div className="details">
                <h1>Ninja Detail - {user.name}</h1>
            </div>
        </>
     );
}
 
export default Details;