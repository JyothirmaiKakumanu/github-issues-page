// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch ,Link} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import IssuesPage from './IssuesPage';


function App() {

  const [issues,setIssues] = useState([]);
  const [keys , setKeys ] = useState("");

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/facebook/create-react-app/issues'
    ).then((res)=>res.json())
    .then((pageIssues)=>{
        setIssues(pageIssues);
      return
    })
  },[]);

  const handleClick =(e)=>{
    setKeys(e);
  }
  const createIssuesList=(issues)=>{
    return (
      issues.map((issue,index)=>{
        return (
          <div>
            <ListGroup.Item key={index} onClick={()=>handleClick(index)}></ListGroup.Item>
            <span className="mr-1"><svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="#28a745"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span> 
            <Link to='/issues' className="links" id={index} >{issue.title}</Link>
         <div className="comment-icon flex-1" style={{float:"right" ,textAlign:"right"}}><svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" ><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
        
         </svg>  {issue.comments}</div> 
          </div>
        )
      })
    )
  }

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="appHeader">GitHub Issue Page</div>
          <Switch>
            <Route path="/issues" exact>
            {console.log("key"+issues.key)}
              <IssuesPage keys={keys} issues={issues}/>
            </Route>
            <Route path="/">
            <ListGroup>
            {console.log("key"+issues.key)}
              <ListGroup.Item>

              </ListGroup.Item>
              {createIssuesList(issues)}
            </ListGroup>
            </Route>
            
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
