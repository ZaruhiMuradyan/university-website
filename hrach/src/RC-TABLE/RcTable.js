import Table from "rc-table";

export const Rctable = () => {
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
        fullTime: 582.000,
        fullTimeF: "870.000 ",
        partTime: "465.000",
        partTimeF: "692.000",
    },
    {
        profession: "Linguistics",
        fullTime: 582.000,
        fullTimeF: "870.000 ",
        partTime: "465.000",
        partTimeF: "692.000",
    },
    {
        profession: "Law",
        fullTime: 582.000,
        fullTimeF: "870.000 ",
        partTime: "465.000",
        partTimeF: "692.000",
    },
    {
        profession: "Psychology",
        fullTime: 582.000,
        fullTimeF: "870.000 ",
        partTime: "465.000",
        partTimeF: "692.000",
    },
    {
        profession: "Graphic Design   ",
        fullTime: 582.000,
        fullTimeF: "870.000 ",
        partTime: "465.000",
        partTimeF: "692.000",
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
