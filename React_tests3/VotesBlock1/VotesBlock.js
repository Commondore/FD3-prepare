var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    info: React.PropTypes.shape({
      question:React.PropTypes.string.isRequired,
      answers:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          count: React.PropTypes.number.isRequired,
          text: React.PropTypes.string.isRequired
        })
      )
    })
  },

  getInitialState: function() {
    return { info:this.props.info };
  },

  
  render: function(){
    /*
    var answersCode=[];
    for ( var a=0; a<this.state.info.answers.length; a++ ) {
      var answer=this.state.info.answers[a];
      answersCode.push( 
        React.DOM.div({key:answer.code,className:'Answer'},
          React.DOM.span({className:'Count'},answer.count),
          React.DOM.span({className:'Text'},answer.text),
        )
      );
    }
    */
    var answersCode=this.state.info.answers.map(v=>
        React.DOM.div({key:v.code,className:'Answer'},
          React.DOM.span({className:'Count'},v.count),
          React.DOM.span({className:'Text'},v.text),
        )
      );
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.state.info.question ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});