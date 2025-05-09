import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DocIndex from './pages/Doc/index.jsx'
import Button from './pages/components/Button';
import Divider from './pages/components/Divider';
import Timeline from './pages/components/Timeline';
import Tooltip from './pages/components/Tooltip';
const Doc = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/doc" element={<DocIndex/>}>
                    <Route path="button" element={<Button/>}/>
                    <Route path="divider" element={<Divider/>}/>
                    <Route path="timeline" element={<Timeline/>}/>
                    <Route path="tooltip" element={<Tooltip/>}/>
                    {/* 其他子路由可以在这里添加 */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Doc
