import './App.css';
import Image from './images/image-header-desktop.jpg';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="cardtext">
          <h1>Get <span style={{color:'hsl(277, 64%, 61%)'}} >insights</span> that help your business grow.</h1>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
          experience, and overall efficiency.</p>
          <table>
        <tbody>
          <tr>
            <th>10k+</th>
            <td>companies</td>
          </tr>
          <tr>
            <th>314</th>
            <td>templates</td>
          </tr>
          <tr>
            <th>12m+</th>
            <td>queries</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div className="cardimage">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
