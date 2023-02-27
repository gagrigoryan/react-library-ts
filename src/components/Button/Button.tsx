import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export type ButtonProps = {
    isDark?: boolean;
    isActive?: boolean;
    isUppercase?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isDark, isActive, isUppercase }) => {
    return (
        <button
            className={clsx(
                styles.container,
                isActive && styles.containerActive,
                isDark && styles.containerDark,
                isUppercase && styles.containerUppercase
            )}>
            UX button
        </button>
    );
};

export default Button;
