import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Image src="https://raw.githubusercontent.com/iamshaunjp/nextjs-tutorial/lesson-9/public/logo.png" width={128} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
     );
}
 
export default Navbar;