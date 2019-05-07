import React, { PureComponent } from 'react';
import dog from '../../assets/icons/dog.png'
import cat from '../../assets/icons/cat.png'
import beer from '../../assets/icons/beer.png'
import girafee from '../../assets/icons/girafee.png'
import bee from '../../assets/icons/bee.png'
import alien from '../../assets/icons/alien.png'
import bird from '../../assets/icons/bird.png'
import girl from '../../assets/icons/girl.png'

const ava = [dog, cat, bee, beer, girafee, alien, bird, girl]
class Infor extends PureComponent {
  render() {
    const fullname = localStorage.getItem('nameAcc')
    const email = localStorage.getItem('emailAcc')
    const id = localStorage.getItem('ID')
    const rights = localStorage.getItem('rights')
    const avatar = localStorage.getItem('ava')
    return (
      <div>
        <div className='avatarHolder'>
          <img alt="" src={ava[avatar]} />
          <div className='name'>{fullname}</div>
          <div>{email}</div>
        </div>
        <div className='detail'>
          <p>
            <i className='title' />
              {id === rights ? 'Quản lý' : 'Nhân viên'}
            </p>
        </div>

      </div>
    )
  }
}

export default Infor;
