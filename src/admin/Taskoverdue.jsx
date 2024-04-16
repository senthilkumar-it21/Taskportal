import React from 'react'

const Taskoverdue = () => {
    return (
        <div className='taskover'>
            <label htmlFor="taskname" className="label">Taskname</label>
            <label htmlFor="taskdescription" className="label">TaskDescription</label>
            <label htmlFor="Startdate" className="label">Startdate</label>
            <label htmlFor="Enddate" className="label">Enddate</label>
            <label htmlFor="Reason" className="label">Reason</label>
            <button type='submit'className='button'>Reassign</button>
            <button type='submit' className='button'>Reject</button>
        </div>
    )
};

export default Taskoverdue;