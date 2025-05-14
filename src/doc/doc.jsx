import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DocIndex from './pages/Doc'
import ButtonDoc from './pages/components/Button';
import IconDoc from './pages/components/Icon';
import DividerDoc from './pages/components/Divider';
import TimelineDoc from './pages/components/Timeline';
import TooltipDoc from './pages/components/Tooltip';
import MenuDemo from './pages/components/Menu';
const Doc = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/doc" element={<DocIndex/>}>
                    <Route path="button" element={<ButtonDoc/>}/>
                    <Route path="icon" element={<IconDoc/>}/>
                    <Route path="divider" element={<DividerDoc/>}/>
                    <Route path="timeline" element={<TimelineDoc/>}/>
                    <Route path="tooltip" element={<TooltipDoc/>}/>
                    <Route path="menu" element={<MenuDemo/>}/>
                    {/* 其他子路由可以在这里添加 */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Doc
