import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'react-bootstrap';

function NotFound() {
  return (
    <div className='bg-white p-5 mt-5 shadow-sm rounded'>
      <h1 className=' mb-5'>Page Not Found</h1>
      <p>Page does not exsit!</p>
    </div>
  );
}

export default NotFound;
