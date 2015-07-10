var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Mannuel Ferreira">Wow this is not bad at all.</Comment>
                <Comment author="Denton Pretorius">Yeah I agree.</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var Comment = React.createClass({
   render: function() {
       return (
           <div className="comment">
               <h2 className="commentAuthor">
                   {this.props.author}
               </h2>
               {marked(this.props.children.toString())}
           </div>
       );
   }
});

var CommentBox = React.createClass({
   render: function() {
       return (
           <div className="commentBox">
               <h1>Comments</h1>
               <CommentList/>
               <CommentForm/>
           </div>
       );
   }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);
