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
            title: "Tests",
            dataIndex: "tests",
            key: "tests",
            width: 200,
        },
        {
            title: "Assignments",
            dataIndex: "assignments",
            key: "assignments",
            width: 200,
        },
        {
            title: "Participation",
            dataIndex: "participation",
            key: "participation",
            width:200,
        },
        {
            title: "Overall",
            dataIndex: "overall",
            key: "overall",
            width:200,
        },
    ];


const data = [
    {
        namesurname: "",
        tests: "Test1  /  Test2",
        assignments: "As1  /  As2",
        participation: "",
        overall: "",
    },
    {
        namesurname: "Ella Manukyan",
        tests: "90% / 84%",
        assignments: "86% / 90%",
        participation: "90%",
        overall: "92%",
    },
    {
        namesurname: "Mike Jackson",
        tests: "76% / 68%",
        assignments: "82% / 75%",
        participation: "67%",
        overall: "82%",
    },
    {
        namesurname: "Lilit Vardanyan",
        tests: "88% / 72%",
        assignments: "93% / 54%",
        participation: "80%",
        overall: "98%",
    },
    {
        namesurname: "Hrair Poghosyan",
        tests: "93% / 89%",
        assignments: "64% / 90%",
        participation: "87%",
        overall: "75%",
    },
    {
        namesurname: "Hilda Lily",
        tests: "75% / 84%",
        assignments: "78% / 86%",
        participation: "65%",
        overall: "54%",
    },
    {
        namesurname: "Frances Fox",
        tests: "50% / 68%",
        assignments: "71% / 82%",
        participation: "90%",
        overall: "90%",
    },
    {
        namesurname: "Anna Muradyan",
        tests: "84% / 94%",
        assignments: "90% / 78%",
        participation: "56%",
        overall: "86%",
    },
    {
        namesurname: "Sue Danson",
        tests: "68% / 89%",
        assignments: "76% / 71%",
        participation: "45%",
        overall: "70%",
    },
    {
        namesurname: "George Avagyan",
        tests: "94% / 86%",
        assignments: "88% / 54%",
        participation: "84%",
        overall: "93%",
    },
    {
        namesurname: "Anahit Stepanyan",
        tests: "85% / 82%",
        assignments: "93% / 90%",
        participation: "100%",
        overall: "80%",
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
