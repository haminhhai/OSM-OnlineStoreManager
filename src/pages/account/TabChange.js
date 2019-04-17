import React, { PureComponent, Suspense, Component } from 'react'
import { Icon, Steps, Tabs, message, Input, Card, Table, Button, Avatar } from 'antd'
import Highlighter from 'react-highlight-words'
import dog from '../../assets/icons/dog.png'
import cat from '../../assets/icons/cat.png'
import beer from '../../assets/icons/beer.png'
import girafee from '../../assets/icons/girafee.png'
import bee from '../../assets/icons/bee.png'

import WrappedStep1 from './Step1'
import WrappedStep2 from './Step2'
import WrappedStep3 from './Step3'
class TabChange extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            loading: false
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                current, loading: false
            });
        }, 1000);
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    fini() {
        const current = this.state.current + 1
        this.setState({ loading: true })
        message.loading('Confirming', 2.5)
            .then(() => message.success('Finished', 2.5))
        setTimeout(() => {
            this.setState({
                current, loading: false
            });
        }, 3000);
    }
    init() {
        this.setState({ current: 0 })
    }
    render() {
        const steps = [
            {
                title: 'Initial account',
                content: <WrappedStep1 next={this.next.bind(this)} loading={this.state.loading} />,
                icon: <Icon type="solution" />
            },
            {
                title: 'Initial password',
                content: <WrappedStep2 finish={this.fini.bind(this)} prev={this.prev.bind(this)} loading={this.state.loading} />,
                icon: <Icon type="lock" />
            },
            {
                title: 'Done',
                content: <WrappedStep3 init={this.init.bind(this)} />,
                icon: <Icon type="smile" />
            },
        ]
        const current = this.state.current
        return (
            <Suspense >
                <Tabs >
                    <Tabs.TabPane tab={<span><Icon type="table" />List Employees</span>} key='1'>
                        <ListEmploy />
                     </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="team" />Add Employee</span>} key='2'>
                        <Steps current={current}>
                            {steps.map(item => <Steps.Step icon={item.icon} key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                    </Tabs.TabPane>

                </Tabs>
            </Suspense >
        );
    }
}
const data = []
for (let i = 0; i < 20; i++) {
    data.push({
        id: Math.floor(Math.random() * 999) + 1,
        name: `Nhân viên ${i}`,
        email: 'email@osm.vn',
        rank: 'Employee',
        ava: Math.floor(Math.random() * 5)
    })
}
const ava = [dog,cat,bee, beer, girafee]
const header = () => <div style={{ color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600' }}>List Empolyees</div>;
class ListEmploy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={node => { this.searchInput = node; }}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        shape='round'
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm)}
                        icon="search"
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
                     </Button>
                    <Button
                        shape='round'
                        onClick={() => this.handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </div>
            ),
        filterIcon: filtered => <Icon type="search"
            style={{
                color: filtered ? '#0077ff' : undefined,
                fontSize: filtered ? '15px' : '12px',
                textAlign: 'center'
            }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#00c3ff', padding: 0, color: 'white' }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    })

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });

    }

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    }
    render() {
        const columns = [
        {
            align: 'left',
            title: '',
            dataIndex:'ava',
            width: '2%',
            render(val) {
                return <Avatar src={ava[val]}/>
            }

        },
        {
            align: 'center',
            title: 'ID',
            dataIndex: 'id',
            width: '20%',
            ...this.getColumnSearchProps('id'),
            
        }, {
            align: 'center',
            title: 'FullName',
            dataIndex: 'name',
            ...this.getColumnSearchProps('name'),
        }, {
            align: 'center',
            title: 'Email',
            dataIndex: 'email',
            ...this.getColumnSearchProps('email'),
        }, {
            align: 'center',
            title: 'Rank',
            dataIndex: 'rank',
            ...this.getColumnSearchProps('rank'),
        },
        ]
        return (
            <div>
                <Card loading={this.props.loading} style={{ margin: 15 }}>
                    <div className='ListTab'>
                        <Table title={header}
                            dataSource={data}
                            columns={columns}
                        />
                    </div>
                </Card>
            </div>
        );
    }

}

export default TabChange