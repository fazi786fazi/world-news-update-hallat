
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  // state={
  //   progress: 0
  // }
  // setprogress=(progress)=> {
  //   this.setState({progress:progress})

  // }
 
  render() {
    return (
      <>
      <BrowserRouter>
     
      <Navbar />
      {/* <LoadingBar
        color='#f11946'
        height={3}
        progress={ this.state.progress }
      
      /> */}
      
      <Routes>

    

        <Route exact path="/" element={<News setprogress={this.setprogress}  key='business' catg="business"/>}/>
         
        <Route exact path="/business" element={<News setprogress={this.setprogress} key='business' catg="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setprogress={this.setprogress} key='entertainment' catg="entertainment"/>}/>
        <Route exact path="/general" element={<News setprogress={this.setprogress} key='general' catg="general"/>}/>
        <Route exact path="/health" element={<News setprogress={this.setprogress} key='health' catg="health"/>}/>
        <Route exact path="/science" element={<News setprogress={this.setprogress} key='science' catg="science"/>}/>
        <Route exact path="/sports" element={<News setprogress={this.setprogress} key='sports' catg="sports"/>}/>
        <Route exact path="/technology" element={<News setprogress={this.setprogress} key='technology' catg="technology"/>}/>
        
      </Routes>
    </BrowserRouter>
       
       
      </>
    )
  }
}

