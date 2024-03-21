import { LineChart as ReChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        {"id":1,"student":"Student 1","math":94,"physics":73,"chemistry":74},
        {"id":2,"student":"Student 2","math":97,"physics":56,"chemistry":67},
        {"id":3,"student":"Student 3","math":50,"physics":74,"chemistry":87},
        {"id":4,"student":"Student 4","math":53,"physics":74,"chemistry":75},
        {"id":5,"student":"Student 5","math":53,"physics":62,"chemistry":63},
        {"id":6,"student":"Student 6","math":89,"physics":51,"chemistry":58},
        {"id":7,"student":"Student 7","math":59,"physics":88,"chemistry":59},
        {"id":8,"student":"Student 8","math":69,"physics":89,"chemistry":70},
        {"id":9,"student":"Student 9","math":71,"physics":73,"chemistry":66},
        {"id":10,"student":"Student 10","math":86,"physics":96,"chemistry":55}
      ];
      
      
    return (
        <div className='lg:pl-64'>
            <ReChart width={400} lg:width={1000} height={200} lg:height={400} data={studentMarks}>
                <Line type="monotone" dataKey="math" stroke="red" ></Line>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Line  dataKey="physics"  stroke="yellow" ></Line>
                <Line dataKey="chemistry"  stroke="limegreen"  ></Line>
                
            </ReChart>
        </div>
    );
};

export default LineChart;