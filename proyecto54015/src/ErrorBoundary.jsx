import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by error boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Hubo un error en la aplicación. Consulta la consola para obtener más detalles.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
