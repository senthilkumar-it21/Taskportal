import React from 'react';

const Updateemp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="taskName">Task Name:</label>
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        className="inputfield"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="taskDescription">Task Description:</label>
                    <input
                        type="text"
                        id="taskDescription"
                        name="taskDescription"
                        className="inputfield"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="assignTo">Assign To:</label>
                    <input
                        type="text"
                        id="assignTo"
                        name="assignTo"
                        className="inputfield"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        className="inputfield"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        className="inputfield"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endTime">End Time:</label>
                    <input
                        type="time"
                        id="endTime"
                        name="endTime"
                        className="inputfield"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="recurrence">Recurrence:</label>
                    <select id="recurrence" name="recurrence" className="inputfield">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>

                <button type="Edit & submit">Create Task</button>
            </form>
        </div>
    );
};

export default Updateemp;
