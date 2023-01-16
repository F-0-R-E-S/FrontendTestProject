import Image from "next/image";
import { FunctionComponent, VoidFunctionComponent } from "react";
import { menuItems } from "../../consts/menuItems";
// import s from "./header.module.css";

const Menu: VoidFunctionComponent<{
    className?: string;
    view?: "compact";
}> = (props) => {
    
    const { className, view } = props;

    return (
        <div>
            {menuItems.map((item, index: number) => {
                return (
                    <div>
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}

Menu.displayName = "Header";

export default Menu;
