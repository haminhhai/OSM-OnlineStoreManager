import React, { PureComponent } from 'react';   
import {Icon, Tag, Divider, Input,} from 'antd';
import Pic from '../../assets/icons/cr.png'

var tags = []
for(let i = 0;i < 4; i++)
tags.push({
  key:i+1,
  label: `Store${i}`
})

class Infor extends PureComponent {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
  };



  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  saveInputRef = input => {
    this.input = input;
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { newTags } = state;
    if (inputValue && newTags.filter(tag => tag.label === inputValue).length === 0) {
      newTags = [...newTags, { key: `new-${newTags.length}`, label: inputValue }];
    }
    this.setState({
      newTags,
      inputVisible: false,
      inputValue: '',
    });
  };

  render() {
    const { newTags, inputVisible, inputValue } = this.state;
    

    return (
        <div>
            <div className='avatarHolder'>
            <img alt="" src={Pic} />
            <div className='name'>F.Hiquery</div>
            <div>123@osm.vn</div>
            </div>
            <div className='detail'>
            <p>
                <i className='title' />
                Toy Store
            </p>
            <p>
                <i className='group' />
                Admin
            </p>
            <p>
                <i className='address' />
                Xuan thuy, Cau giay
            </p>
            </div>
            <Divider dashed />
            <div className='tags'>
            <div className='tagsTitle'>Stores</div>
            {tags.concat(newTags).map(item => (
                <Tag key={item.key}>{item.label}</Tag>
            ))}
            {inputVisible && (
                <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag
                onClick={this.showInput}
                style={{ background: '#fff', borderStyle: 'dashed' }}
                >
                <Icon type="plus" />
                </Tag>
            )}
            </div>
            <Divider style={{ marginTop: 16 }} dashed />
            
        </div>
    )
  }
}

export default Infor;
