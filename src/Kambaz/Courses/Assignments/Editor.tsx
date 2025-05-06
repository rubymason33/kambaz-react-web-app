export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
                Your full name and section. 
                Links to each of the lab assignments. 
                Link to the Kambaz application. 
                Links to all relevant source code repositories. 
                The Kambaz application should include a link to navigate back to the landing page.
            </textarea><br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="IN_PERSON">In Person</option>
                        </select><br /><br />
                        <label >Online Entry Options</label><br/>
                        <input type="checkbox" name="check-type" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>
                        <input type="checkbox" name="check-type" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>
                        <input type="checkbox" name="check-type" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                        <input type="checkbox" name="check-type" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                        <input type="checkbox" name="check-type" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        Assign to <br />
                        <input id="wd-assign-to" defaultValue="Everyone"></input><br /><br />
                        <label htmlFor="wd-due-date">Due</label><br />
                        <input id="wd-due-date" type="date" defaultValue="2024-05-13"></input><br /><br />
                        <table>
                            <tr>
                                <td>
                                <label htmlFor="wd-available-from">Available From</label><br />
                                <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                                </td>
                                <td></td>
                                <td>
                                <label htmlFor="wd-available-until">Until</label><br />
                                <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr></hr>
            <div style={{ textAlign: 'right' }}>
                <button>Cancel</button> <button>Save</button>
            </div>
        </div>
);}
  