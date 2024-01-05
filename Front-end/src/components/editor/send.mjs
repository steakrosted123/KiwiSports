import axios from 'axios';
const data = [1, 2, 3, 4, 5];

axios.post('http://127.0.0.1:5000', {
  data
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});
