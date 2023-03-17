import Table from "rc-table";

export const AnnualTable = () => {
    const columns = [
        {
            title: "Profession",
            dataIndex: "profession",
            key: "profession",
            width: 600,
        },
        {
            title: "Full time",
            dataIndex: "fullTime",
            key: "fullTime",
            width: 200,
        },
        {
            title: "Full time (foreigners)",
            dataIndex: "fullTimeF",
            key: "fullTimeF",
            width: 200,
        },
        {
            title: "Part Time",
            dataIndex: "partTime",
            key: "partTime",
            width:200,
        },
        {
            title: "Part Time (foreigners)",
            dataIndex: "partTimeF",
            key: "partTimeF",
            width:200,
        },
    ];


const data = [
    {
        profession: "Information Technologies",
        fullTime: "570.000",
        fullTimeF: "960.000 ",
        partTime: "-",
        partTimeF: "-",
    },
    {
        profession: "Linguistics",
        fullTime: "552.000",
        fullTimeF: "960.000 ",
        partTime: "-",
        partTimeF: "-",
    },
    {
        profession: "Law",
        fullTime: "690.000",
        fullTimeF: "960.000 ",
        partTime: "552.000",
        partTimeF: "768.000",
    },
    {
        profession: "Psychology",
        fullTime: "552.000",
        fullTimeF: "960.000 ",
        partTime: "-",
        partTimeF: "-",
    },
    {
        profession: "Graphic Design   ",
        fullTime: "570.000",
        fullTimeF: "960.000 ",
        partTime: "-",
        partTimeF: "-",
    }
];
     return (
         <Table
             columns={columns}
             data={data}
             tableLayout="auto"
         />
     )
 };
