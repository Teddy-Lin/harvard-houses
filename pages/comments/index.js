import React from 'react';
import styles from './comments.module.css';

export default class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "coolboy", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
        {id: 2, author: "scarlett", body: "Cabot has big rooms"},
        {id: 3, author: "Movie Star", body: "Adams has rats."}
      ]
    };
  }

  render () {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = 'Show Reviews';

    if (this.state.showComments) {
      buttonText = 'Hide Reviews';
      commentNodes = <div className={styles.commentlist}>{comments}</div>;
    }

    return(
      <div className={styles.commentbox}>
        <h2>Join the Discussion!</h2>
        <CommentForm addComment={this.addComment.bind(this)}/>
        <button className={styles.commentreveal} onClick={this.handleClick.bind(this)}>
          {buttonText}
        </button>

        <h4 className={styles.commentcount}>
          {this.getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  } // end render

  addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} />
      );
    });
  }

  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className={styles.commentform} onSubmit={this.handleSubmit.bind(this)}>
        <div className={styles.commentformfields}>
          <input placeholder="Name" required ref={(input) => this.author = input}></input><br />
          <textarea placeholder="Comment" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
        </div>
        <div className={styles.commentformactions}>
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render

  handleSubmit(event) {
    event.preventDefault();   // prevents page from reloading on submit
    let author = this.author;
    let body = this.body;
    this.props.addComment(author.value, body.value);
  }
} // end CommentForm component

class Comment extends React.Component {
  render () {
    return(
      <div className={styles.comment}>
        <p className={styles.commentheader}>{this.props.author}</p>
        <p className={styles.commentbody}>{this.props.body}</p>
        <div className={styles.commentfooter}>
          <a href="#" className={styles.commentfooterdelete} onClick={this.deleteComment}>Delete Comment</a>
        </div>
      </div>
    );
  }
  deleteComment() {
    alert(" DELETE Comment Functionality COMMING SOON...");
  }
}
