import { HttpHeaders } from '@angular/common/http';
export function getHeaders()  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  
}
