"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps {
  data: { key: string; value: string }[];
  title: string;
}

export default function DataTable({ data, title }: DataTableProps) {
  return (
    <div className="p-4 border rounded-lg shadow w-full">
      <h2 className="text-xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-ellipsis mb-2 text-center border-b pb-2">{title}</h2>
      <Table className="table-auto border border-zinc-400 rounded-lg mt-2">
        <TableHeader>
          <TableRow className="">
            <TableHead className="border-r border-zinc-400">Data</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border-r border-zinc-400">{row.key}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
