export const MaxWidth = {
    none: 'max-w-none',
    full: 'max-w-full',
    '3xl': 'max-w-3xl',
    '5xl': 'max-w-5xl',
    '7xl': 'max-w-7xl',
};

export const GridColumns = {
    '1': '',
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
    '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
    '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
};

export const ColSpan = {
    '2': 'md:col-span-2',
    '3': 'md:col-span-3',
    '4': 'md:col-span-4',
};

export const GridSpacing = {
    '0': 'gap-0', // none
    '0.5': 'gap-0.5 [&+.custom-column]:mt-0.5', // 2px
    '1': 'gap-1 [&+.custom-column]:mt-1', // 4px
    '2': 'gap-2 [&+.custom-column]:mt-2', // 8px
    '4': 'gap-4 [&+.custom-column]:mt-4', // 16px
    '8': 'gap-8 [&+.custom-column]:mt-8', // 32px
    '10': 'gap-10 [&+.custom-column]:mt-10', // 40px
};

export const ColorScheme = {
    white: 'bg-white',
    gray: 'bg-gray-100',
};

export const FontSizes = {
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};
