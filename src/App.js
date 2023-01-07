import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [stuData, setStuData] = useState({ name: "", rollno: "" });
  const [stuInfo, setStuInfo] = useState([]);
  const [leave, setleave] = useState("");

  const changeHandler = (e) => {
    setStuData({ ...stuData, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    let d = new Date();
    let day = d.getDay() < 10 ? "0" + d.getDay() : d.getDay();
    let month =
      d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;

    let date =
      day.toString() +
      "-" +
      month.toString() +
      "-" +
      d.getFullYear().toString();
    setStuInfo([...stuInfo, { ...stuData, currentDate: date }]);
    setStuData({ name: "", rollno: "" });
  };

  const leaveHandler = () => {
    let temp = [];
    temp = stuInfo.filter((stu) => {
      return stu.rollno != leave;
    });
    setStuInfo(temp);
    console.log(temp);
  };

  useEffect(() => {}, [stuInfo]);

  return (
    <div className="App">
      <input
        name="name"
        placeholder="Enter Your Name"
        value={stuData.name}
        onChange={changeHandler}
      />
      <input
        name="rollno"
        placeholder="Enter Your rool number"
        value={stuData.rollno}
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>submit</button>
      <input
        type="number"
        onChange={(e) => {
          setleave(e.target.value);
        }}
      />
      <button onClick={leaveHandler}>Leave</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Roll no</th>
          <th>Time</th>
        </tr>
        {stuInfo &&
          stuInfo.map((stu) => {
            return (
              <tr className="border-2 border-black">
                <td className="border-2 border-red-600">{stu.name}</td>
                <td>{stu.rollno}</td>
                <td>{stu.currentDate}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
