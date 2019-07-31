/* eslint-disable no-console */
import propTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  state = { error: null }

  componentDidCatch(error, info) {
    if (info && info.componentStack && process.env.NODE_ENV === 'development') {
      // The component stack is sometimes useful in development mode
      console.log(info.componentStack, false)
    }

    console.log(error)
    this.setState({ error })
  }

  render() {
    const { state, props } = this
    if (state.error) {
      return <h3>Something went wrong with page module. Please inform system administrator.</h3>
    }
    return props.children
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node
}

export default ErrorBoundary
