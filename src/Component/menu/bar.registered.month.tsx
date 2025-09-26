import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Tháng 1', uv: 4000 },
    { name: 'Tháng 2', uv: 3000 },
    { name: 'Tháng 3', uv: 2000 },
    { name: 'Tháng 4' },
    { name: 'Tháng 5', uv: 1890 },
    { name: 'Tháng 6', uv: 2390 },
    { name: 'Tháng 7', uv: 3490 },
    { name: 'Tháng 8', uv: 3490 },
    { name: 'Tháng 9', uv: 3490 },
    { name: 'Tháng 10', uv: 3490 },
    { name: 'Tháng 11', uv: 3490 },
    { name: 'Tháng 12', uv: 3490 },
];

export default function BarRegisteredMonth() {
    return (
        <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}