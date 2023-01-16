import Image from "next/image";
import { FunctionComponent } from "react";
import Menu from "../../components/menu";
import Logo from "../../assets/svg/logo";
// import s from "./header.module.css";

const Header: FunctionComponent = () => {
    return (
        <div>
            <Logo />
            <Menu />
        </div>
    )
}

Header.displayName = "Header";

export default Header;
