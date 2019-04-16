import React, { Component, Suspense } from 'react'
import {  Icon, Menu, Dropdown } from 'antd'
import moment from 'moment'
import '../../styles/dashboard.css'
import { getTimeDistance } from '../../utils/utils'
import PageLoading from '../../components/PageLoading'
import TradingHistory from './TradingHistory'

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const ChartYear = React.lazy(() => import('./ChartYear'));
const ChartMonth = React.lazy(() => import('./ChartMonth'));
const yearData = [];
for (let i = 0; i < 12; i++) {
    yearData.push({
        x: `Month ${i + 1}`,
        y: Math.floor(Math.random() * 100000) + 20000,
    });
}
const monthData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i++) {
    monthData.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
    });
}
const rankData = []
for (let i = 0; i < 10; i++) {
    rankData.push({
        key: `${i+1}`,
        keyword: `Pepsi`,
        count: Math.floor(Math.random() * 199) + 1,
        range: Math.floor(Math.random() * 100) + 1,
        status: Math.floor(Math.random() * 2) + 1
    });
}
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rangePickerValue: getTimeDistance('year'),
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }
    handleRangePickerChange = rangePickerValue => {
        this.setState({
            rangePickerValue,
        });
    };

    selectDate = type => {
        this.setState({
            rangePickerValue: getTimeDistance(type),
        });
    };
    isActive = type => {
        const rangePickerValue = this.state.rangePickerValue;
        const value = getTimeDistance(type);
        if (!rangePickerValue[0] || !rangePickerValue[1]) {
            return '';
        }
        if (
            rangePickerValue[0].isSame(value[0], 'day') &&
            rangePickerValue[1].isSame(value[1], 'day')
        ) {
            return 'currentDate';
        }
        return '';
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item>Changes1</Menu.Item>
                <Menu.Item>Changes2</Menu.Item>
            </Menu>
        );
        const dropdownGroup = (
            <span className='{iconGroup'>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Icon type="ellipsis" />
                </Dropdown>
            </span>
        );
        return (
            <div>
                <div>
                    <Suspense fallback={<PageLoading />}>
                        <IntroduceRow loading={this.state.loading} className='row-intro' />
                    </Suspense>
                    <Suspense fallback={null}>
                        <ChartYear
                            rangePickerValue={this.state.rangePickerValue}
                            yearData={yearData}
                            isActive={this.isActive}
                            handleRangePickerChange={this.handleRangePickerChange}
                            loading={this.state.loading}
                            selectDate={this.selectDate}
                        />
                    </Suspense>

                    <Suspense fallback={null}>
                        <ChartMonth
                            loading={this.state.loading}
                            monthData={monthData}
                            selectDate={this.selectDate}
                            rankData={rankData}
                            dropdownGroup={dropdownGroup}
                        />
                    </Suspense>
                    <Suspense fallback={null} >
                        <TradingHistory loading = {this.state.loading}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}
export default Dashboard