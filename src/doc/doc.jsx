import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DocIndex from './pages/Doc'
import ButtonDoc from './pages/components/Button';
import IconDoc from './pages/components/Icon';
import DividerDoc from './pages/components/Divider';
import TimelineDoc from './pages/components/Timeline';
import TooltipDoc from './pages/components/Tooltip';
import MenuDemo from './pages/components/Menu';
import SpaceDemo from './pages/components/Space';
import GridDemo from './pages/components/Grid';
import BreadcrumbDemo from './pages/components/Breadcrumb';
import EmptyDoc from './pages/components/Empty';
import TagDoc from './pages/components/Tag';
import MessageDoc from './pages/components/Message';
import AlertDoc from './pages/components/Alert';
import DrawerDoc from './pages/components/Drawer';
import AffixDoc from './pages/components/Affix';
import CardDoc from './pages/components/Card';
import LoadingDoc from './pages/components/Loading';
import BackTopDoc from './pages/components/BackTop';
import AnchorDoc from './pages/components/Anchor';
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
                    <Route path="space" element={<SpaceDemo/>}/>
                    <Route path="grid" element={<GridDemo/>}/>
                    <Route path="breadcrumb" element={<BreadcrumbDemo/>}/>
                    <Route path="empty" element={<EmptyDoc/>}/>
                    <Route path="tag" element={<TagDoc/>}/>
                    <Route path="message" element={<MessageDoc/>}/>
                    <Route path="alert" element={<AlertDoc/>}/>
                    <Route path="drawer" element={<DrawerDoc/>}/>
                    <Route path="affix" element={<AffixDoc/>}/>
                    <Route path="card" element={<CardDoc/>}/>
                    <Route path="loading" element={<LoadingDoc/>}/>
                    <Route path="backtop" element={<BackTopDoc/>}/>
                    <Route path="anchor" element={<AnchorDoc/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Doc
