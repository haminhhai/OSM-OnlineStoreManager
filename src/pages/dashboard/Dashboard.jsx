import React, { Component, Suspense } from 'react'
import moment from 'moment'
import '../../styles/dashboard.css'
import { getTimeDistance } from '../../utils/utils'
import TradingHistory from './TradingHistory'
import callAPI from '../../utils/apiCaller'

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const ChartYear = React.lazy(() => import('./ChartYear'));
const ChartMonth = React.lazy(() => import('./ChartMonth'));
const yearData = [];
for (let i = 0; i < 12; i++) {
    yearData.push({
        x: `Tháng ${i + 1}`,
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
            sumDay: 0,
            sumMon: 0,
            profitDay: 0,
            profitMon: 0,
        }
    }
    componentDidMount() {
        const ID = localStorage.getItem('ID')
        let infoRequest = `/Payments/TongHangBanTrongNgay?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            this.setState({sumDay: res.data.data})
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000);
        })
        infoRequest = `/Payments/TongHangBanTrongThang?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            this.setState({sumMon: res.data.data})
            
        })
        infoRequest = `/Payments/LoiNhuanNgay?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            console.log(res)
            this.setState({profitDay: res.data.data})
            
        })
        infoRequest = `/Payments/LoiNhuanThang?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            console.log(res)
            this.setState({profitMon: res.data.data})
            
        })
    }
    render() {
        const {loading, sumDay, sumMon, profitDay, profitMon} = this.state
        return (
            <div>
                <div>
                    <Suspense fallback={null}>
                        <IntroduceRow loading={loading} className='row-intro' 
                        sumDay={sumDay} sumMon={sumMon} profitDay={profitDay} profitMon={profitMon}/>
                    </Suspense>
                    <Suspense fallback={null}>
                        <ChartYear
                            yearData={yearData}
                            loading={this.state.loading}
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