import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Fetchdata = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('url')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Taskname</th>
            <th>TaskDescription</th>
            <th>Assigned to</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, index) => {
              return 
            <tr key={index}>
                <td>{user.taskname}</td>
                <td>{user.taskdescription}</td>
                <td>{user.assignedto}</td>
                <td>{user.startdate}</td>
                <td>{user.enddate}</td>
                <td>{user.reason}</td>
          </tr>
            }
          )
}
        
        </tbody>
      </table>
    </div>
  );
};

export default Fetchdata;