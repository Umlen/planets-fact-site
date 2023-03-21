import useResize from "../utils/useResize";

function Header() {
    const isMobileWidth = useResize();

    return (
        <header>
            Header
            <nav>
                {isMobileWidth ? 'Mobile' : 'Navigation'}
            </nav>
        </header>
    );
}

export default Header;