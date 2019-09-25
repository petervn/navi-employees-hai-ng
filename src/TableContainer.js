import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { data } from './sample-data';

const getDep = (deps, departmentId) => {
  return deps.find(item => item.departmentId === departmentId).department;
};
const populateData = data => {
  const { departments, employees } = data;
  const result = employees.map(emp => {
    const populatedEmp = {
      id: emp.userId,
      fullName: emp.name.first + emp.name.last,
      age: emp.age,
      departmentName: getDep(departments, emp.departmentId),
      nationality: emp.nationality,
      accountStatus: emp.isAccountActive ? 'Yes' : 'No',
    };
    return populatedEmp;
  });
  return result;
};
const renderTableHeader = data => {
  if (data.length > 0) {
    const header = Object.keys(data[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  return null;
};
const renderTable = populatedData => {
  return populatedData.map((emp, index) => {
    const {
      id,
      fullName,
      age,
      departmentName,
      nationality,
      accountStatus,
    } = emp; //destructuring

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{fullName}</td>
        <td>{age}</td>
        <td>{departmentName}</td>
        <td>{nationality}</td>
        <td>{accountStatus}</td>
      </tr>
    );
  });
};
const TableContainerCmp = () => {
  const [populatedData, setPopulatedData] = useState([]);
  useEffect(() => {
    // const url = './sample-data.json';
    // axios.get(url).then(response => {
    //   console.log(response.json());
    // });
    const populatedData = populateData(data);
    setPopulatedData(populatedData);
  }, []);
  return (
    <div>
      <table id="emp">
        <tbody>
          <tr>{renderTableHeader(populatedData)}</tr>
          {renderTable(populatedData)}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainerCmp;
