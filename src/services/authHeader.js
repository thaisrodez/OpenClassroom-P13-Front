export default function authHeader(_token) {
  const token =
    _token || JSON.parse(localStorage.getItem('userArgentBank')).token;
  if (token) {
    return {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token} `,
    };
  } else {
    console.log('no authorisation header');
    return {};
  }
}
