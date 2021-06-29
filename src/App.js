import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DispalyPost from './displayposts/DispalyPost'
import Navbar from './header/Navbar'
import PostForm from './postform/PostForm'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={DispalyPost}/>
        <Route path="/post" component={PostForm}/>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
