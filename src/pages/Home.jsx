import React from 'react'
import {Row, Col, Figure} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';

function Home() {
   const data= useFetch('https://dummyjson.com/products')
   console.log(data);
  return (
    <Row className='m-5'>
        <h3>Best of Products</h3>

         {data?.length>0?
         data?.map((item)=>(<Col className='mb-5'sm={12} md={4} lg={4} xl={2}>
        <Card style={{ width: '13rem',borderRadius:'5px',height:'250px' }}>
      <Card.Img variant="top" src={item.thumbnail} className=' ms-2 ' style={{height:'150px',width:'95%'}}  />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <h5 style={{fontFamily:'inherit'}}>From ₹ {item.price}</h5>
      </Card.Body>
    </Card>
        </Col>))
        :<div style={{justifyContent:'center', alignItems:'center',display:'flex', width:'100%',height:'200px'}}>
          <figure>
            <img  className='figure-img img-fluid rounded' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png" alt="" />
          <figcaption className='figure-caption text-center text-dark'>Sorry No Result Found </figcaption>
            </figure>
            </div>
          
}
</Row>
  )
}

export default Home
