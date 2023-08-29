import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { IDataArray } from "./data";
import { socket } from "./socket";
import { BarChart } from "@mui/x-charts";

interface Column {
  id: "Id" | "Name" | "Phone" | "Email";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "Id", label: "Name", minWidth: 170 },
  { id: "Name", label: "Website", minWidth: 100 },
  { id: "Phone", label: "Email", minWidth: 100 },
  { id: "Email", label: "Adres", minWidth: 100 },
];

export default function StickyHeadTable() {
  const [data, setData] = useState<IDataArray | undefined>(undefined);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    function onHandleData(data: IDataArray) {
      console.log(data);
      setData(data);
    }

    socket.on("data", onHandleData);

    return () => {
      socket.off("data", onHandleData);
    };
  }, [socket]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {data ? (
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#E8E8E8",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {data.users.map((item: any) => {
                return (
                  <TableBody>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        ) : (
          <div>Loading..</div>
        )}
      </Paper>
      <div>
        {data?.chart ? (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-2"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-2"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-2"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-2"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
              <BarChart
                className="grid-item-1"
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["bar A", "bar B", "bar C"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: data?.chart,
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
          </>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </div>
  );
}
