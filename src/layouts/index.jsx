
import { Header } from '../components/Header'
import { Container } from 'react-bootstrap'
import styles from './index.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const MainLayout = ({children})=>{
    return(
        <div className={styles.main}>
            <Header/>
       
            <Container className='mt-5'>
                {children}
            </Container>
           
        </div>
    )
}

MainLayout.propTypes ={
    children :PropTypes.node.isRequired
}