import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://192.168.100.10:1235');
  sleep(1);
}
