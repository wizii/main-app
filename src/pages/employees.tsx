import dynamic from "next/dynamic";
import useStore from "mainApp/Store"

const EmployeeTable = dynamic(() => import("employees/EmployeeTable"));
// const useStore = dynamic(() => import("mainApp/Store"));

export default function Employees() {
    const {count, increment} = useStore();

    return (
        <div>
            <button onClick={increment}>Change Count</button>
            <EmployeeTable></EmployeeTable>
        </div>
    )
}