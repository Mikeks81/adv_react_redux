import React, { Component } from 'react'
import { connect } from 'react-redux'


class CommentList extends Component {

  renderComments () {
    return this.props.comments.map((comment, i) => {
      return (
        <li key={i} className='comment' id={`${comment}${i}`} >
          {comment}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='comment-list'>
        {this.renderComments()}
      </ul>
    )
  }
}

function mapStateToProps ({comments}) {
  return { comments }
}

export default connect(mapStateToProps)(CommentList)
