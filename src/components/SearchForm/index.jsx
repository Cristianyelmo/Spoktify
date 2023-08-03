import {Formik,Field,ErrorMessage} from 'formik'
import { Form,Row,Col,Alert,Button  } from "react-bootstrap";
import * as Yup from 'yup'
/* import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrink'; */
import styles from './index.module.css'
import useMusic from '../../hooks/useMusic';
export const SearchForm = ()=>{
const {getData} = useMusic()

/* const{categorias} = useCategories() */


/* const{getDrink,loading}= useDrinks() */

    const initialValues ={
      name:"",
        
    } 

const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
   
})


const handleSubmit = (values) =>{

getData(values.name)
}


    return(
      <Formik initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      >
{
    (formik)=>(
        <Form onSubmit={formik.handleSubmit} className={styles.formEdition}>
            <Row>
                <Col >
                    <Form.Group>
                      
                        <Field id='name' type='text' placeholder='Busca tu track favorito' name='name' as={Form.Control} className={styles.formImput}/>
<ErrorMessage name='name' component={Form.Text} className={styles.errorMessageForm} />
                        
                    </Form.Group>
                </Col>



               
            </Row>
            <Row className='justify-content-end mt-3'>
                <Col >
<Button className={styles.buttonSubmit} type='submit'>
Buscar Track
</Button>

                </Col>
            </Row>
        </Form>

    )
}


      </Formik>
    )
}