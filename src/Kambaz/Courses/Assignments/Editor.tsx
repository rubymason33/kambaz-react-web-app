// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
//             <input id="wd-name" placeholder="Assignment Name" defaultValue="A1 - ENV + HTML" /><br /><br />
//             <textarea id="wd-description" cols={30} rows={10} 
//                 defaultValue=" The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the lab assignments. Link to the Kambaz application. Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.">               
//             </textarea><br /><br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" type="number" defaultValue={100} />
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Assignment Group</label>
//                     </td>
//                     <td>
//                         <select id="wd-group">
//                             <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
//                             <option value="QUIZZES">QUIZZES</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-display-grade-as">Display Grade as</label>
//                     </td>
//                     <td>
//                         <select id="wd-display-grade-as">
//                             <option selected value="PERCENTAGE">Percentage</option>
//                             <option value="POINTS">Points</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <td>
//                         <select id="wd-submission-type">
//                             <option selected value="ONLINE">Online</option>
//                             <option value="IN-PERSON">In Person</option>
//                         </select><br /><br />
//                         <label >Online Entry Options</label><br/>
//                         <input type="checkbox" name="check-type" id="wd-text-entry"/>
//                         <label htmlFor="wd-text-entry">Text Entry</label><br/>
//                         <input type="checkbox" name="check-type" id="wd-website-url"/>
//                         <label htmlFor="wd-website-url">Website URL</label><br/>
//                         <input type="checkbox" name="check-type" id="wd-media-recordings"/>
//                         <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
//                         <input type="checkbox" name="check-type" id="wd-student-annotation"/>
//                         <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
//                         <input type="checkbox" name="check-type" id="wd-file-upload"/>
//                         <label htmlFor="wd-file-upload">File Uploads</label>
//                         </td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-assign-to">Assign</label>
//                     </td>
//                     <td>
//                         Assign to <br />
//                         <input id="wd-assign-to" defaultValue="Everyone" placeholder="assign to"></input><br /><br />
//                         <label htmlFor="wd-due-date">Due</label><br />
//                         <input id="wd-due-date" type="date" defaultValue="2024-05-13"></input><br /><br />
//                         <table>
//                             <tr>
//                                 <td>
//                                 <label htmlFor="wd-available-from">Available From</label><br />
//                                 <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
//                                 </td>
//                                 <td></td>
//                                 <td>
//                                 <label htmlFor="wd-available-until">Until</label><br />
//                                 <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//             </table>
//             <hr></hr>
//             <div style={{ textAlign: 'right' }}>
//                 <button>Cancel</button> <button>Save</button>
//             </div>
//         </div>
// );}
  
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles.css";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group className="mb-3" id="wd-name">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" placeholder="Assignment Name" defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                <Form.Group className="mb-3" id="wd-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" cols={30} rows={10} 
                    defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section.
- Links to each of the lab assignments.
- Link to the Kambaz application.
- Links to all relevant source code repositories.
- The Kambaz application should include a link to navigate back to the landing page.`} />
                </Form.Group>

                <Row className="mb-3 align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="wd-points" className="mb-0">Points</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control id="wd-points" type="number" defaultValue={100} />
                    </Col>
                </Row>

                <Row className="mb-3 align-items-center" >
                    <Col xs="auto">
                        <Form.Label htmlFor="wd-group" className="mb-0">Assignment Group</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select id="wd-points" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="align-items-center mb-3">
                    <Col xs="auto">
                        <Form.Label htmlFor="wd-display-grade-as" className="mb-0">Display Grade As</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="align-items-start mb-3">
                    <Col xs="auto">
                        <Form.Label htmlFor="wd-submission-type" className="mb-0">Submission Type</Form.Label>
                    </Col>
                    <Col>
                        <div id="wd-outline-box">
                        <Form.Select id="wd-submission-type" defaultValue="ONLINE" className="mb-3">
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In Person</option>
                        </Form.Select>

                        <b className="d-block mb-2">Online Entry Options</b>
                        <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
                        <Form.Check type="checkbox" label="Website URL" id="wd-website-url" defaultChecked />
                        <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
                        <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
                        <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-start mb-3">
                    <Col xs="auto">
                        <Form.Label htmlFor="wd-submission-type" className="mb-0">Assign</Form.Label>
                    </Col>
                    <Col>
                        <div id="wd-outline-box">
                            <Form.Label htmlFor="wd-assign-to"><b>Assign To</b></Form.Label>
                            <Form.Control type="text" defaultValue="Everyone" className="mb-3"/>

                            <Form.Label htmlFor="wd-due-date"><b>Due</b></Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-13" className="mb-3"></Form.Control>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label htmlFor="wd-available-from"><b>Available From</b></Form.Label>
                                    <Form.Control id="wd-available-from" type="date" defaultValue="2024-05-06"></Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="wd-available-until"><b>Until</b></Form.Label>
                                    <Form.Control id="wd-available-until" type="date" defaultValue="2024-05-20"></Form.Control>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <hr />

                <div className="wd-assignment-editor-end">
                    <Button variant="danger" className="float-end">Save</Button>
                    <Button variant="secondary" className="me-2 float-end">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}