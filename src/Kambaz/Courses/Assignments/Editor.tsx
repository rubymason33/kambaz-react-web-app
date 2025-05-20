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
                        <div className="wd-outline-box">
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
                        <div className="wd-outline-box">
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