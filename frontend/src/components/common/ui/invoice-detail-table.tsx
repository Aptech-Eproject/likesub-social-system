import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,

    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
    type Column,
} from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/common/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/common/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/ui/table"

export type Product = {
    id: string
    name: string
    quantity: number
    unitCost: number
    discount: number
    total: number
}

const data: Product[] = [
    {
        id: "1",
        name: 'Macbook pro 13',
        quantity: 1,
        unitCost: 1200,
        discount: 0,
        total: 1200,
    },
    {
        id: "2",
        name: "Apple Watch Ultra",
        quantity: 1,
        unitCost: 300,
        discount: 0.5,
        total: 150,
    },
    {
        id: "3",
        name: "iPhone 15 Pro Max",
        quantity: 3,
        unitCost: 800,
        discount: 0,
        total: 2400,
    },
    {
        id: "4",
        name: "iPad Pro 3rd Gen",
        quantity: 1,
        unitCost: 900,
        discount: 0,
        total: 900,
    },
]

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Sản phẩm",
    },
    {
        accessorKey: "quantity",
        header: "Số lượng",
    },
    {
        accessorKey: "unitCost",
        header: "Giá thành",
        cell: ({ row }) => `$${row.getValue("unitCost")}`,
    },
    {
        accessorKey: "discount",
        header: "Khuyến mãi",
        cell: ({ row }) => `${row.getValue("discount") as number * 100}%`,
    },
    {
        accessorKey: "total",
        header: "Tổng cộng",
        cell: ({ row }) => `$${row.getValue("total")}`,
    },
    {
        id: "actions",
        header: "",
        enableHiding: false,
        cell: ({ row }) => {
            const ticket = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Hành động</DropdownMenuLabel>

                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(ticket.id)
                            }
                        >
                            Copy ID
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                        <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

function SortableHeader({
    column,
    title,
}: {
    column: Column<Product>,
    title: string
}) {
    return (
        <Button
            variant="ghost"
            className="px-0 font-bold text-[13px]"
            onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
            }
        >
            {title}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
}

export function InvoiceDetailTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },

        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <div className="w-full text-sm!">
            <div className="border rounded-md !text-sm">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Không có dữ liệu
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
