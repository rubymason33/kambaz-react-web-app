export default function Modules() {
    return (
        <div id="wd-module-page">
            <button>Collapse All</button>{' '}
            <button>View Progress</button>{' '}
            <select id="wd-select-one-publish-mode">
                <option value="PUBLISH_SELECTED">Publish Selected</option>
                <option value="UNPUBLISH_SELECTED">Unpublish Selected</option>
                <option selected value="PUBLISH_ALL">
                    Publish All</option>
                <option value="UNPUBLISH_ALL">Unpublish All</option>
            </select>{' '}
            <button>+ Module</button>
            
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1 - Intro to Web Development</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating a HTTP server</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2 - Getting Set Up</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Setting up environment</li>
                                <li className="wd-content-item">Learning to write code</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 3</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 4</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Downloading the software</li>
                                <li className="wd-content-item">Running software on your computer</li>
                                <li className="wd-content-item">Writting in HTML</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3 - Creating a Website</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Deploying a website</li>
                                <li className="wd-content-item">Customizing with CSS</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 5</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 6</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Setting up GitHub</li>
                                <li className="wd-content-item">What is CSS?</li>
                                <li className="wd-content-item">Designing a website</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
);}
  
  