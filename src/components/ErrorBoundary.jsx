import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h2>Something went wrong.</h2>
          <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
            Please try refreshing the page.
          </p>
          <button
            className="btn"
            style={{ marginTop: '1.5rem' }}
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
