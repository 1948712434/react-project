import './App.css';
import axios from "axios"

let num;
axios.get('/api/getValue',{
  params:{
    id:1
  }
}).then(res=>{
  num = res.data;
  
  console.log(num,9999);
})

function App() {
  return (
    <div>
      <header>
        {num[0].id}
      </header>
    </div>
  );
}

export default App;
