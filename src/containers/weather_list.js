import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chat from '../components/chart';
import Maps from '../components/maps';

export  class WeatherList extends Component {
   renderCity(){
   	return this.props.weather.map((cityData) =>{
   		const temps = cityData.list.map((weather) =>{
             
   			return weather.main.temp

   		});
   		const pressure = cityData.list.map(weather => weather.main.pressure);
   		const humidity = cityData.list.map(weather => weather.main.humidity);
   
   		return(
   		<tr key={cityData.city.id}>
   		<td>
   		<Maps lon={cityData.city.coord.lon} lat={cityData.city.coord.lat}/>
   		
   		</td> 
         <td> 
            <Chat data={temps} color="blue" units="K"/>
            
         </td>
          <td> 
            <Chat data={pressure} color="purple" units="hPa"/>
         </td>
          <td> 
            <Chat data={humidity} color="orange" units="%"/>
         </td>
   		</tr>

   		)
   	});
   }

	render(){
		return (
			<table className="table table-hover">
			<thead>
			<tr>
			<th> City</th>
			<th> Temperature (K)</th>
		    <th> Pressure (hPa)</th>
		    <th> Humidity (%)</th>
			</tr>
			</thead>
			<tbody>
		   {this.renderCity()}
			</tbody>
			</table>
			)
	}
}

function mapStateToProps(state){
	return{
		weather:state.weather

	};

}

export default connect(mapStateToProps)(WeatherList);