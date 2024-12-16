
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';

function App() {
  const {userData,setUser,user} = useAuth()
  const [logedInUserData, setLogedInUserData] = useState({});

  useEffect(() => {
    const logedInUser = localStorage.getItem('loggedInUser')
    if(logedInUser){
      const logedUserData = JSON.parse(logedInUser)
      setUser(logedUserData.role)
      setLogedInUserData(logedUserData)
    }
  }, []);


  const handleLogin = (email,password) =>{
    if(email === "admin@example.com" && password ==='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.employee.find(e => e.email === email && e.password === password)
      employee && setUser('employee')
      setLogedInUserData({role:'employee',data:employee})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }else{
      alert('Invalid credentials')
    }
  }
  return (
    <> 
    {!user && <Login handleLogin={handleLogin} />}
    {user === "employee"  && <EmployeeDashboard data={logedInUserData.data} /> }
    {user === 'admin' && <AdminDashboard />}
    </>
  );
}

export default App;
