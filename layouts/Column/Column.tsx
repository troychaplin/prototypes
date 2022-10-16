import React from 'react';
import {
    MaxWidth,
    GridColumns,
    // GridSpacing,
} from '../../utils/styles/tailwindClasses';

const styles = {
    // column: `custom-columns mx-auto grid grid-cols-1 [&+.custom-columns]:mt-8`,
    column: `custom-column mx-auto grid grid-cols-1 gap-4 [&+.custom-column]:mt-4`,
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
    maxWidth = '7xl',
    // gridGap = '8',
    // isNested,
    cols = '1',
}: ColumnProps) => {
    return (
        <div
            // className={`${styles.column} ${MaxWidth[maxWidth]} ${GridColumns[cols]} ${GridSpacing[gridGap]}`}
            className={`${styles.column} ${MaxWidth[maxWidth]} ${GridColumns[cols]}`}
        >
            {children}
        </div>
    );
};

export default Column;
