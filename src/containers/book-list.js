import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators } from 'redux';

class BookList extends Component {
renderList(){
    return this.props.books.map((book)=>{
        return (
             <li onClick={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
        );
    });
}

    render () {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
        
    };
}

function mapStateToProps(state){
    // whatever is returned will showup as props
    // inside of BookList
    return {
        books:state.books
    };
}


// Anything returned from this function will end group
// as props on the booklist container
function mapDispatchToProps(dispatch){
//whenever selectbook is called, the result should be passed
// to all of our reducers
return bindActionCreators({ selectBook:selectBook},dispatch);
}

// Promote BookList component to container - it need to know
// about this new dispatch method seelctbook. make it available in props
export default connect (mapStateToProps,mapDispatchToProps)(BookList);