import React, { Component, Suspense } from 'react'
import moment from 'moment'
import '../../styles/dashboard.css'
import { getTimeDistance } from '../../utils/utils'
import TradingHistory from './TradingHistory'
import callAPI from '../../utils/apiCaller'

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const ChartYear = React.lazy(() => import('./ChartYear'));

var ID = 0
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
        key: `${i + 1}`,
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
            loading: false,
            rangePickerValue: getTimeDistance('year'),
            sumDay: 0,
            sumMon: 0,
            profitDay: 0,
            profitMon: 0,
            yearData: [],
            rankingTrend: []
        }
    }

    componentDidMount() {
        ID = localStorage.getItem('ID')
        console.log('ID: ', ID)
        let infoRequest = `/Payments/TongHangBanTrongNgay?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined) {
                if (res.data.code !== 400) {
                    this.setState({ sumDay: res.data.data })
                    setTimeout(() => {
                        this.setState({ loading: false })
                    }, 100);
                }
            }
            else console.log(res)
        })
        infoRequest = `/Payments/TongHangBanTrongThang?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined)
                if (res.data.code !== 400)
                    this.setState({ sumMon: res.data.data })
                else console.log(res)

        })
        infoRequest = `/Payments/LoiNhuanNgay?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined)
                if (res.data.code !== 400)
                    this.setState({ profitDay: res.data.data })
                else console.log(res)


        })
        infoRequest = `/Payments/LoiNhuanThang?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined)
                if (res.data.code !== 400)
                    this.setState({ profitMon: res.data.data })
                else console.log(res)

        })
        infoRequest = `/Payments/ThongKeTongNam?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined) {
                if (res.data.code !== 400) {
                    var yearData = []
                    let datas = res.data.data
                    for (let i = 0; i < datas.length; i++)
                        yearData.push({
                            x: `Tháng ${datas[i].Thang}`,
                            y: datas[i].Tien
                        })
                    this.setState({ yearData: yearData })
                }

            }
            else console.log(res)

        })
        infoRequest = `/Payments/TopHangBanChay?ID_Employee=${ID}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if (res !== undefined) {
                if (res.data.code !== 400) {
                    var rankingTrend = []
                    let datas = res.data.data
                    for (let i = 0; i < datas.length; i++)
                        rankingTrend.push(datas[i])
                    this.setState({ rankingTrend: rankingTrend })
                }
            }
            else console.log(res)
        })
    }
    render() {
        const { loading, sumDay, sumMon, profitDay, profitMon, yearData, rankingTrend } = this.state
        return (
            <div>
                <div>
                    <Suspense fallback={null}>
                        <IntroduceRow loading={loading} className='row-intro'
                            sumDay={sumDay} sumMon={sumMon} profitDay={profitDay} profitMon={profitMon} />
                    </Suspense>
                    <Suspense fallback={null}>
                        <ChartYear
                            yearData={yearData}
                            loading={this.state.loading}
                            rankingTrend={rankingTrend}
                        />
                    </Suspense>
                    <Suspense fallback={null} >
                        <TradingHistory loading={this.state.loading} />
                    </Suspense>
                </div>
            </div>
        );
    }
}
export default Dashboard