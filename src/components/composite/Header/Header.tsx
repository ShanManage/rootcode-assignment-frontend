import { Typography } from 'antd'
import styles from './Header.module.scss'

const { Title } = Typography

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Title className='zero-margin' type='warning'>HOME</Title>
    </header>
  )
}

export default Header
