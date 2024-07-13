import React from "react";
import Error from "../error/error";

class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
