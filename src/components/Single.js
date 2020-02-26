import React,{Component} from 'react';
import Photo from './photo'
import Comments from './Comments'

class Single extends Component{
 render(){
     const {match,posts}=this.props;
     const id =Number(match.params.id);
     const singlePost=posts.find((p)=> p.id===id)
     const comments= this.props.comments[match.params.id] || []
     const index= this.props.posts.findIndex((post)=> post.id=== id)
     return <div className="single-photo">  
            <Photo post={singlePost} {...this.props} index={index}/>
            <Comments addComment={this.props.addComment} comments={comments} id={id}/>

        </div>

     }
 
}

export default Single