import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Group from './pages/Group'


function RoutesApp() {
    return (
        <BrowserRouter>
                <Header/>
            <Routes>
                <Route path="*" element={<Error/> } />
                <Route path="/" element={<Home/> } />
                <Route path="/about" element={<About/> } />
                <Route path="/group" element={<Group/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp