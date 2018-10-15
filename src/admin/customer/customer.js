import React from 'react'
export class Customer extends React.Component {
  render() {
    return (
     <h1>Trong customerList</h1>
    );
  }
}

// const mapStateToProps = ({ customer }) => ({
//   customerList: customer.entities
// });

// const mapDispatchToProps = {
//   getEntities:getEntities
// };


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Customer);
export default Customer;