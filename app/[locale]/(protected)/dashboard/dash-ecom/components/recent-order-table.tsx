"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define your data type
export type DeviDataProps = {
  id: number;
  nameEntreprise?: string;
  namePersone: string;
  numberPhon?: string;
  datecalendrier?: string;
  ville?: string;
  email: string;
  VotreFonction?: string;
  Adress: string;

};


// Define columns
export const columns: ColumnDef<DeviDataProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span>{row.getValue("id")}</span>,
  },
  {
    accessorKey: "nameEntreprise",
    header: "Entreprise",
    cell: ({ row }) => <span>{row.getValue("nameEntreprise") || "N/A"}</span>,
  },
  {
    accessorKey: "namePersone",
    header: "Person Name",
    cell: ({ row }) => <span>{row.getValue("namePersone")}</span>,
  },
  {
    accessorKey: "numberPhon",
    header: "Phone Number",
    cell: ({ row }) => <span>{row.getValue("numberPhon") || "N/A"}</span>,
  },
  {
    accessorKey: "datecalendrier",
    header: "Date",
    cell: ({ row }) => <span>{row.getValue("datecalendrier") || "N/A"}</span>,
  },
  {
    accessorKey: "ville",
    header: "City",
    cell: ({ row }) => <span>{row.getValue("ville") || "N/A"}</span>,
  },

  {
    accessorKey: "VotreFonction",
    header: "Function",
    cell: ({ row }) => <span>{row.getValue("VotreFonction") || "N/A"}</span>,
  },


  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge className={`px-3 min-w-[90px] justify-center py-1 rounded-full`}>
        {row.getValue("status") || "N/A"}
      </Badge>
    ),
  },

];


const RecentDeviTable = () => {
  const [data, setData] = React.useState<DeviDataProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ocean-dashbord-elzu.vercel.app/api/Devis"); // Update the endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { pagination: { pageIndex: 0, pageSize: 10 } },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No results found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentDeviTable;
