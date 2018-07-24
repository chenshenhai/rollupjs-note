import React from 'react';
 
class List extends React.Component {

  render() {
    const { dataList = [] } = this.props;
    return (
      <ul>
        { dataList.map(function(item, index){
          return ( <li key={index}>{item.name}</li> )
        }) }
      </ul>
    )
  }
}

export default List;

