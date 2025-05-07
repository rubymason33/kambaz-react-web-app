import { Link } from "react-router-dom";
// import React from "react";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" className="wd-username" defaultValue="mason.r" /><br />
            <input placeholder="password" type="password" className="wd-password" defaultValue="webdev123" /><br />
            <input placeholder="verify password" type="password" className="wd-password-verify" defaultValue="webdev123" /><br />
            <Link  to="/Kambaz/Account/Profile" >Sign up</Link><br />
            <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
);}

