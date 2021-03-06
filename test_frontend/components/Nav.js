import Link from "next/Link"

const Nav = () => {
    return (
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/contact'}><a>Contact Me</a></Link>
        </nav>
    )
};

export default Nav;