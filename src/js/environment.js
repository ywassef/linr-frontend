export default function api (path) {
  if (process.env.NODE_ENV === 'production') {
    return '/api' + path
  }
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080' + path
  }
  if (process.env.NODE_ENV === 'test') {
    return 'http://localhost:8080' + path
  }
}
