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
import StepsDoc from './pages/components/Steps';
import ModalDoc from './pages/components/Modal';
import MessageBoxDoc from './pages/components/MessageBox';  
import NotificationDoc from './pages/components/Notification';
import AvatarDoc from './pages/components/Avatar';
import BadgeDoc from './pages/components/Badge';
import DropdownDoc from './pages/components/Dropdown';
import CollapseDoc from './pages/components/Collapse';
import ProgressDoc from './pages/components/Progress';
import PageHeaderDoc from './pages/components/PageHeader';
import PaginationDoc from './pages/components/Pagination';
import InputDoc from './pages/components/Input';
import SelectDoc from './pages/components/Select';
import RadioDoc from './pages/components/Radio';
import CheckboxDoc from './pages/components/Checkbox';
import InputNumberDoc from './pages/components/InputNumber';
import RateDoc from './pages/components/Rate';
import SwitchDoc from './pages/components/Switch';
import SliderDoc from './pages/components/Slider';
import CascaderDoc from './pages/components/Cascader';
import DatePickerDoc from './pages/components/DatePicker';
import TimePickerDoc from './pages/components/TimePicker';
import ColorPickerDoc from './pages/components/ColorPicker';
import TransferDoc from './pages/components/Transfer';  
import UploadDoc from './pages/components/Upload';
import TreeSelectDoc from './pages/components/TreeSelect';
import TableDoc from './pages/components/Table';

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
                    <Route path="steps" element={<StepsDoc/>}/>
                    <Route path="modal" element={<ModalDoc/>}/>
                    <Route path="messagebox" element={<MessageBoxDoc/>}/>
                    <Route path="notification" element={<NotificationDoc/>}/>
                    <Route path="avatar" element={<AvatarDoc/>}/>
                    <Route path="badge" element={<BadgeDoc/>}/>
                    <Route path="dropdown" element={<DropdownDoc/>}/>
                    <Route path="collapse" element={<CollapseDoc/>}/>
                    <Route path="progress" element={<ProgressDoc/>}/>
                    <Route path="pageheader" element={<PageHeaderDoc/>}/>
                    <Route path="pagination" element={<PaginationDoc/>}/>
                    <Route path="input" element={<InputDoc/>}/>
                    <Route path="select" element={<SelectDoc/>}/>
                    <Route path="radio" element={<RadioDoc/>}/>
                    <Route path="checkbox" element={<CheckboxDoc/>}/>
                    <Route path="inputnumber" element={<InputNumberDoc/>}/>
                    <Route path="rate" element={<RateDoc/>}/>
                    <Route path="switch" element={<SwitchDoc/>}/>
                    <Route path="slider" element={<SliderDoc/>}/>
                    <Route path="cascader" element={<CascaderDoc/>}/>
                    <Route path="datepicker" element={<DatePickerDoc/>}/>
                    <Route path="timepicker" element={<TimePickerDoc/>}/>
                    <Route path="colorpicker" element={<ColorPickerDoc/>}/>
                    <Route path="transfer" element={<TransferDoc/>}/>
                    <Route path="upload" element={<UploadDoc/>}/>
                    <Route path="treeSelect" element={<TreeSelectDoc/>}/>
                    <Route path="table" element={<TableDoc/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Doc
