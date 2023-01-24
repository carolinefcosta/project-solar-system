import React from 'react';

class Title extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

export default Title;
