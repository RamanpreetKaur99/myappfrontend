import react from 'react'
import CarouselHome from './carousel'
import Card from 'react-bootstrap/Card'

function Home(){
    return(
        <div className='container-fluid' style={{backgroundColor:'#fcda8c'}}>
            <div className='row' style={{height:'85vh'}}>
                <CarouselHome />     
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%' , marginTop:'7%'}}>
                        <a href="/location"><Card.Img variant="top" src="data:image/jpeg;base64,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" /></a>
                        <Card.Body>
                            <Card.Title>Check Location</Card.Title>
                            <Card.Text>
                             Want to check where are your friends and cousins ??? <br /> Check it here in an instance :)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%' , marginTop:'7%'}}>
                        < a href="/groceries"><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTzFOi4eX9keESeKvgo7RVRbwQHLdfD9hXw&usqp=CAU" /></a>
                        <Card.Body>
                            <Card.Title>Manage Grocery</Card.Title>
                            <Card.Text>
                             What to buy this week ??<br /> Write it down here :)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%', marginTop:'7%' }}>
                        <a href="/todos"><Card.Img variant="top" src="https://i2.wp.com/timemanagementninja.com/wp-content/uploads/2013/02/Todos-Non-negotiable.jpg" />   </a>                   
                        <Card.Body>
                            <Card.Title>Pending Tasks</Card.Title>
                            <Card.Text>
                             Want to check what tasks are pending ??? <br /> Open this link :)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%' , marginTop:'7%'}}>
                        <a href="/events"><Card.Img variant="top" src="https://www.lifewire.com/thmb/PPeDX3Dy5gufFGz1MFeUdUhQhyw=/1500x1000/filters:fill(auto,1)/free-online-calendars-1357935-41eafe4b4d484e6f8f7593cd5514e071.png" />    </a>                  
                        <Card.Body>
                            <Card.Title>Mark Events</Card.Title>
                            <Card.Text>
                             Problem in Remembring ??? <br /> No issues... Our calendar will take care of that:)
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%' , marginTop:'7%'}}>
                        <a href="/bills">
                        <Card.Img variant="top" src="https://mumbaimirror.indiatimes.com/photo/76804619.cms" />     </a>                 
                        <Card.Body>
                            <Card.Title>Mark the Bills</Card.Title>
                            <Card.Text>
                             Want to check which payments are pending ??? <br /> Do it immediately :)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem', marginLeft: '8%' , marginTop:'7%'}}>
                        <a href="/events"><Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ydb2Ci0eV81JLXEb-I36aHoWQ7V8S4p4vQ&usqp=CAU" /></a>
                        <Card.Body>
                            <Card.Title>Gaming Zone</Card.Title>
                            <Card.Text>
                              Feeling Bored? <br />Chill out with your family and friends ;)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                    
            </div>
            <div className='row' style={{height:'5rem',marginTop:'5%',textAlign:'center', backgroundColor:'#fcda8c'}}>
               
            </div>
            
        </div>
    )
}

export default Home