import axios from 'axios'
import React, { Component } from 'react'
import {Editor} from '@tinymce/tinymce-react';
import './postform.css'

class PostForm extends Component {
    constructor(){
        super()
        this.state={
            userName:'',
            userImage:'',
            postImgUrl:'',
            postCaption:''
        }
    }
    handleChange=(e)=>{
        const {name, value }= e.target
        this.setState({
        [name]:value
        })
    }

    handleClick=(e)=>{
        const instapost = {
        userName:this.state.userName,
        userImage:this.state.userImage,
        postImgUrl:this.state.postImgUrl,
        postCaption:this.state.postCaption
        }
        axios.post('https://instagrampost77.herokuapp.com/insta/api/addUser' , instapost )
        .then((res)=>{
            this.props.history.push("/")
        })
    }

    handleEditorChange=(e)=>{
        e.preventDefault();
        this.setState({
            postCaption:e.target.getContent()
        })
   }

    render() {
        return (
            <div className="post-form-main">
                <h1>Post your story here !</h1>
                <input className="input" type="text" name="userName" placeholder="Enter your User name"  onChange={this.handleChange}/><br /><br />
                <input className="input" type="text" name="userImage" placeholder="Enter your profile URL" onChange={this.handleChange} /><br /><br />
                <input className="input" type="text"  name="postImgUrl" placeholder="Enter Post image URL" onChange={this.handleChange} /><br /><br />
                
                <Editor
                                   init={{
                                   height: 500,
                                   menubar: false,
                                   selector: 'textarea',  // change this value according to your HTML
                                   plugins: 'media',
                                   menubar: 'insert',
                                   toolbar: 'media',
                                   media_dimensions: false,
                                   plugins: [
                                        'advlist autolink lists link image',
                                        'charmap print preview anchor help',
                                        'searchreplace visualblocks code',
                                        'insertdatetime media table paste wordcount'
                                   ],
                                   toolbar:
                                        'undo redo | formatselect | bold italic | \
                                        alignleft aligncenter alignright | \
                                        bullist numlist outdent indent | help'
                              }}
                              onChange={(e)=> this.handleEditorChange(e)}
                         /><br /><br />
                <button className="sharebtn" onClick={this.handleClick}>Share</button>
            </div>
        )
    }
}

export default PostForm
