import React from 'react';
import './App.css';

const IssuesPage = (props) => {
    // const keys = props.keys;
    // const issues = props.issues;
    return (
        <div>
            <h3>Issue details</h3>
            <div><img src={props.issues[props.keys].user.avatar_url} alt="Not found" /></div>
            <div>{props.keys, props.issues[props.keys].user.login}</div>
            <div>Comment: {props.issues[props.keys].title}</div>
            <div>Created on: {props.issues[props.keys].created_on}</div>
            <div>Updated by: {props.issues[props.keys].updated_by}</div>
        </div>
    );
};

export default IssuesPage;