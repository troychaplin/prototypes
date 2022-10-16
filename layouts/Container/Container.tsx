import React from 'react';
import { ColorScheme } from '../../utils/styles/tailwindClasses';

const styles = {
    container: `custom-container py-8`,
    whiteSpace: `[&.bg-white+.custom-container.bg-white]:pt-0`,
    graySpace: `[&.bg-gray-100+.custom-container.bg-gray-100]:pt-0`,
};

interface ContainerProps {
    children: React.ReactNode;
    bgColor?: 'white' | 'gray';
}

const Container = ({ children, bgColor = 'white' }: ContainerProps) => {
    return (
        <div
            className={`${styles.container} ${styles.whiteSpace} ${styles.graySpace} ${ColorScheme[bgColor]}`}
        >
            {children}
        </div>
    );
};

export default Container;
