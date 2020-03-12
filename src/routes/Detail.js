import React from 'react';

class Detail extends React.Component {
  componentDidMount () {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render () {
    const { location } = this.props;
    return (
      <span>{location.state ? location.state.title : null}</span>
    );
  }
}

export default Detail;