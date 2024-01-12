interface NavLink {
    label: string,
    href: string
}

interface SelectOptions {
    label: string,
    value: string
}

interface ButtonGroupOptions {
    label: string,
    function: (e: any, id: string | number) => any,
    icon?: any,
    color: string
}

interface RowTable {
    columns: any
}

interface ColumnTable {
    label: string
}

interface HeaderTable {
    columns: string[],
    keyName: string[]
}

export type { NavLink, SelectOptions, ButtonGroupOptions, ColumnTable, RowTable, HeaderTable }