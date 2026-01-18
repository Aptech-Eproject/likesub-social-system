"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,

    type Column,
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
} from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/common/ui/button"
import { Checkbox } from "@/components/common/ui/checkbox"

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

export type Ticket = {
    id: string
    title: string
    orderCode: string
    topic: string
    status: "mới" | "đang xử lý" | "hoàn thành" | "đã hủy"
    createdAt: string
    updatedAt: string
}

const data: Ticket[] = [
    {
        id: "1",
        title: "Không đăng nhập được",
        orderCode: "ORD-1001",
        topic: "Tài khoản",
        status: "mới",
        createdAt: "2025-01-05",
        updatedAt: "2025-01-05",
    },
    {
        id: "2",
        title: "Thanh toán bị lỗi",
        orderCode: "ORD-1002",
        topic: "Thanh toán",
        status: "đang xử lý",
        createdAt: "2025-01-04",
        updatedAt: "2025-01-06",
    },
    {
        id: "3",
        title: "Yêu cầu hoàn tiền",
        orderCode: "ORD-1003",
        topic: "Đơn hàng",
        status: "hoàn thành",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-03",
    },
    {
        id: "4",
        title: "Sai thông tin sản phẩm",
        orderCode: "ORD-1004",
        topic: "Sản phẩm",
        status: "đã hủy",
        createdAt: "2024-12-30",
        updatedAt: "2024-12-31",
    },
    {
        id: "5",
        title: "Cần hỗ trợ kỹ thuật",
        orderCode: "ORD-1005",
        topic: "Kỹ thuật",
        status: "mới",
        createdAt: "2025-01-07",
        updatedAt: "2025-01-07",
    },
    {
        id: "6",
        title: "Đổi trả sản phẩm",
        orderCode: "ORD-1006",
        topic: "Đơn hàng",
        status: "đang xử lý",
        createdAt: "2025-01-06",
        updatedAt: "2025-01-08",
    },
]

export const columns: ColumnDef<Ticket>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Chọn tất cả"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Chọn dòng"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "orderCode",
        header: "Mã đơn hàng",
    },
    {
        accessorKey: "topic",
        header: "Chủ đề",
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <Button
                className="font-bold text-[13px]!"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Trạng thái
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <span className="capitalize">{row.getValue("status")}</span>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Ngày tạo",
    },
    {
        accessorKey: "updatedAt",
        header: "Cập nhật",
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
    column: Column<Ticket, unknown>,
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

export function SupportRequestTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [visibleRows, setVisibleRows] = React.useState(0)

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

    // Animation effect for loading rows
    React.useEffect(() => {
        const totalRows = table.getRowModel().rows.length
        let count = 0

        const interval = setInterval(() => {
            count++
            setVisibleRows(count)

            if (count >= totalRows) {
                clearInterval(interval)
            }
        }, 80) // 80ms delay between each row

        return () => clearInterval(interval)
    }, [table.getRowModel().rows.length])

    return (
        <div className="w-full text-sm!">
            <div className="border rounded-md !text-sm overflow-hidden">
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
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className={`transition-all duration-500 ease-out ${index < visibleRows
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 50}ms`
                                    }}
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

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2 py-4 px-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} /{" "}
                    {table.getFilteredRowModel().rows.length} dòng được chọn
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Trước
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Sau
                </Button>
            </div>
        </div>
    )
}