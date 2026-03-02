import { Component } from 'react';
import { useTranslation } from 'react-i18next';

function ErrorFallback() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2>{t('errorBoundary.title')}</h2>
      <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
        {t('errorBoundary.message')}
      </p>
      <button
        className="btn"
        style={{ marginTop: '1.5rem' }}
        onClick={() => window.location.reload()}
      >
        {t('errorBoundary.refresh')}
      </button>
    </div>
  );
}

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
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
