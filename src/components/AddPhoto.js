import React, { Component } from 'react'

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: link
        }
        if (link && description) {
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }

    }

    render() {
        return (
            <div>
               
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto