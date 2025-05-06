import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title"> Full Stack software developer </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4400/Home" className="wd-dashboard-course-link" >
                        <img src="/images/machinelearning.jpg" width={200} />
                        <div>
                            <h5> DS4400 Machine Learning and Data Mining 1 </h5>
                            <p className="wd-dashboard-course-title"> Learn core ML techniques and data mining tools </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2331/Home" className="wd-dashboard-course-link" >
                        <img src="/images/linearalgebra.jpg" width={200} />
                        <div>
                            <h5> MATH2331 Linear Algebra </h5>
                            <p className="wd-dashboard-course-title"> Foundations of Linear Algebra concepts </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4120/Home" className="wd-dashboard-course-link" >
                        <img src="/images/nlp.jpg" width={200} />
                        <div>
                            <h5> CS4120 Natural Language Processing </h5>
                            <p className="wd-dashboard-course-title"> Build language models and analyze text using NLP properties </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5005/Home" className="wd-dashboard-course-link" >
                        <img src="/images/infoethics.jpg" width={200} />
                        <div>
                            <h5> PHIL5005 Information Ethics </h5>
                            <p className="wd-dashboard-course-title"> Explore privacy, fairness, and accountability in emerging technologies </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4100/Home" className="wd-dashboard-course-link" >
                        <img src="/images/ai.jpg" width={200} />
                        <div>
                            <h5> CS4100 Artificial Intelligence </h5>
                            <p className="wd-dashboard-course-title"> Design intelligent systems using search, logic, planning, and learning algorithms </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3200/Home" className="wd-dashboard-course-link" >
                        <img src="/images/database.jpg" width={200} />
                        <div>
                            <h5> CS3200 Database Design </h5>
                            <p className="wd-dashboard-course-title"> Learn how to manage databases and query for results </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3520/Home" className="wd-dashboard-course-link" >
                        <img src="/images/c++.jpg" width={200} />
                        <div>
                            <h5> CS3520 Programming in C++ </h5>
                            <p className="wd-dashboard-course-title"> Learn programming in C++ for various applications </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
);}