import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta {
    cellClassName?: string;
    headerClassName?: string;
  }
}

declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
