export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('userArgentBank'));

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
