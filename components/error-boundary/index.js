class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        console.log("Hato bo'ldi")
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary