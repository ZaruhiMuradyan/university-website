import Table from "rc-table";

export const StudentsTable = () => {
    const columns = [
        {
            title: "Name, surname",
            dataIndex: "namesurname",
            key: "namesurname",
            width: 400,
        },
        {
            title: "English tests",
            dataIndex: "tests",
            key: "tests",
            width: 200,
        },
        {
            title: "Tuitions",
            dataIndex: "assignments",
            key: "assignments",
            width: 200,
        },
        {
            title: "Bachelor degree",
            dataIndex: "participation",
            key: "participation",
            width:200,
        },
        {
            title: "Grade Point Average",
            dataIndex: "overall",
            key: "overall",
            width:200,
        },
    ];


const data = [
    {
        namesurname: "",
        tests: "Test1  /  Test2",
        assignments: "Paid / Unpaid",
        participation: "",
        overall: "",
    },
    {
        namesurname: "Ella Manukyan",
        tests: "90% / 84%",
        assignments: "+ / +",
        participation: "full time",
        overall: "92",
    },
    {
        namesurname: "Mike Jackson",
        tests: "76% / 68%",
        assignments: "+ / -",
        participation: "part time",
        overall: "82",
    },
    {
        namesurname: "Lilit Vardanyan",
        tests: "88% / 72%",
        assignments: "+ / -",
        participation: "full time",
        overall: "98",
    },
    {
        namesurname: "Hrair Poghosyan",
        tests: "93% / 89%",
        assignments: "+ / -",
        participation: "full time",
        overall: "75",
    },
    {
        namesurname: "Hilda Lily",
        tests: "75% / 84%",
        assignments: "+ / +",
        participation: "part time",
        overall: "90",
    },
    {
        namesurname: "Frances Fox",
        tests: "50% / 68%",
        assignments: "- / -",
        participation: "full time",
        overall: "92",
    },
    {
        namesurname: "Anna Muradyan",
        tests: "84% / 94%",
        assignments: "+ / +",
        participation: "full time",
        overall: "86",
    },
    {
        namesurname: "Sue Danson",
        tests: "68% / 89%",
        assignments: "+ / -",
        participation: "part time",
        overall: "70",
    },
    {
        namesurname: "George Avagyan",
        tests: "94% / 86%",
        assignments: "+ / -",
        participation: "full time",
        overall: "93",
    },
    {
        namesurname: "Anahit Stepanyan",
        tests: "85% / 82%",
        assignments: "+ / -",
        participation: "part time",
        overall: "80",
    },
];
     return (
         <Table
             columns={columns}
             data={data}
             tableLayout="auto"
         />
     )
 };
