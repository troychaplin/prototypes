import React from 'react';
import {
    MaxWidth,
    GridColumns,
    GridSpacing,
} from '../../utils/tailwindClasses';

const styles = {
    // column: `custom-columns mx-auto grid grid-cols-1 [&+.custom-columns]:mt-8`,
    column: `custom-column mx-auto grid grid-cols-1`,
};

interface ColumnProps {
    children: React.ReactNode;
    maxWidth?: 'none' | 'full' | '3xl' | '5xl' | '7xl';
    gridGap?: '0' | '0.5' | '1' | '2' | '4' | '8' | '10';
    cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
    span?: '2' | '3' | '4';
    isNested?: boolean;
}

const Column = ({
    children,
    // isNested,
    maxWidth = '7xl',
    gridGap = '8',
    cols = '1',
}: ColumnProps) => {
    return (
        <div
            className={`${styles.column} ${MaxWidth[maxWidth]} ${GridColumns[cols]} ${GridSpacing[gridGap]}`}
        >
            {children}
        </div>
    );
};

export default Column;
