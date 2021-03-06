import { Component } from "react"
import {Route} from 'react-router-dom'



import Home from './Home'
import Login from "./Login"
import Register from "./Register"
import Bike from "./Bike"
import Car from "./Car"
import AddVehicle from './AddVehicle'
import MyProfile from './MyProfile'
import MyVehicle from './MyVehicle'
import UpdateVehicle from "./UpdateVehicle"
import RentVehicle from './RentVehicle'
import Bill from "./Bill"
import ConfirmationPage from "./ConfirmationPage"

export default class Body extends Component{
    render(){
        return(
            <div>
                <Route path='/' exact component= {Home}/>
                <Route path='/register' exact component= {Register}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/vehicle/bike' exact component={Bike}/>
                <Route path='/vehicle/car' exact component={Car}/>
                <Route path='/vehicle/insert' exact component = {AddVehicle}/>
                <Route path='/customer/myprofile' exact component = {MyProfile}/>
                <Route path='/myvehicle' exact component={MyVehicle}/>
                <Route path= '/myvehicle/update/:id' exact component={UpdateVehicle}/>
                <Route path= '/vehicle/rent/:id' exact component={RentVehicle}/>
                <Route path='/bill' exact component={Bill}/>
                <Route path='/confirmationpage' exact component={ConfirmationPage}/>


            </div>
        )
    }
}