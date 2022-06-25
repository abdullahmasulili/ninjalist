import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();

  return {
    props: {
      ninjas,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>
      <div className="ninja-list">
        <h1>All Ninjas</h1>
        {ninjas.map((item) => (
          <Link href={`/ninjas/${item.id}`} key={item.id}>
            <a className={styles.single}>
              <h2>{item.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
