import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum
          voluptatum fugiat cupiditate quod. Pariatur veritatis non recusandae
          reiciendis debitis? Labore quaerat id numquam praesentium
          exercitationem ut, optio quae deleniti.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum
          voluptatum fugiat cupiditate quod. Pariatur veritatis non recusandae
          reiciendis debitis? Labore quaerat id numquam praesentium
          exercitationem ut, optio quae deleniti.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
