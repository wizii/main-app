import dynamic from "next/dynamic";
import useStore from "mainApp/Store"
import { Select } from "antd";

const EmployeeTable = dynamic(() => import("employees/EmployeeTable"));
const CORPORATES = [{
    value: 'corp1',
    label: (<h1>Corp 1</h1>)
}, {
    value: 'corp2',
    label: (<h2>Corp 2</h2>)
}];

export default function Employees() {
    const updateSelectedCorporateId = useStore((state) => state.updateSelectedCorporateId)

    return (
        <div className='flex flex-col p-8 w-full'>
        <Select
            style={{
                width: 300,
            }}
            placeholder='Select a corporate'
            onChange={value => updateSelectedCorporateId(value)}
            options={CORPORATES}
        />
            <EmployeeTable></EmployeeTable>
        </div>
    )
}