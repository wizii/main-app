import dynamic from "next/dynamic";

const EmployeeTable = dynamic(() => import("employees/table"));

export default function Employees() {
    return <EmployeeTable></EmployeeTable>
}