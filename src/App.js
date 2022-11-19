import Bar from './Bar';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address'
function App() {
  return (
    <div className="App">
      <Bar/>
      <div className='introduction'>
      <ProfilePhoto/>
      <div>
      <FullName/>
      <Address/>
      </div>

      </div>
    </div>
  );
}

export default App;
