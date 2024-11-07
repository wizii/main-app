import dynamic from "next/dynamic";
import { useState } from "react";

const EmployeeTable = dynamic(() => import("employees/EmployeeTable"));

export default function Employees() {
    const [title, setTitle] = useState('default title');

    function changeTitle() {
        if(title == 'title is changed') {
            setTitle('back to default')
        } else {
            setTitle('title is changed')
        }
    }

    return (
        <div>
            <button onClick={changeTitle}>Change title</button>
            <EmployeeTable title={title}></EmployeeTable>
        </div>
    )
}