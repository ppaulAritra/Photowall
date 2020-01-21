import React from 'react';
import Photo from './photo';
import PropTypes from 'prop-types'

function Photowall(props){
    return <div className='photoGrid'>
                
    {props.posts.map((post,index)=> <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}

</div>
}
Photowall.propTypes={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Photowall