import axios from 'axios'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './displayPost.css'
class DispalyPost extends Component {
    constructor() {
        super()
        this.state = {
            showPost: []
        }
    }
    componentDidMount() {
        axios.get('https://instagrampost77.herokuapp.com/insta/api/getUser')
            .then((res) => {
                this.setState({
                    showPost: res.data
                })
            })
    }
    delClick=(_id)=>{
        axios.delete(`https://instagrampost77.herokuapp.com/insta/api/deleteUser/${_id}`)
        
        .then(()=>{
            const delUser = this.state.showPost.filter((data) => data._id !== _id)
            this.setState({
                showPost:delUser
            })
        })
    }

    
   
    render() {
        const { showPost } = this.state

        return (
            <div className="card-main">
                {
                    showPost.map((data, i) => {
                        return (
                            <div className="post-card">
                                <div className="user-profile">
                                    <div>
                                        <img className="profileImg" src={data.userImage} width="40px" height="40px" alt="no" />
                                    </div>
                                    <div className="userName">
                                        <h2>{data.userName}</h2>
                                    </div>
                                </div>
                                <img className="posted-Img" src={data.postImgUrl} alt="no" /><br />
                                <h3>{data.postCaption}</h3><hr />
                                <Icon className="del-icon" name="delete" size="large" onClick={()=>this.delClick(data._id)} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default DispalyPost
