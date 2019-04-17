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
    render() {
        return (
            <div>
                <div>
                    <Suspense fallback={<PageLoading />}>
                        <IntroduceRow loading={this.state.loading} className='row-intro' />
                    </Suspense>
                    <Suspense fallback={null}>
                        <ChartYear
                            yearData={yearData}
                            loading={this.state.loading}
                        />
                    </Suspense>

                    <Suspense fallback={null}>
                        <ChartMonth
                            loading={this.state.loading}
                            monthData={monthData}
                            rankData={rankData}
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