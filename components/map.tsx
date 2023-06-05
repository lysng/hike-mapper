'use client';

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'

import 'leaflet/dist/leaflet.css'


const Map = () => {

    const places =
    {
        "properties": [
            {
                "id": 1,
                "name": "Sydney",
                "geometry": {
                    "type": "point",
                    "coordinates": [
                        -33.86,
                        151.2092
                    ]
                }
            },
            {
                "id": 2,
                "name": "Six Foot Track",
                "geometry": {
                    "type": "point",
                    "coordinates": [
                        -33.737,
                        150.188
                    ]
                }
            },
            {
                "id": 3,
                "name": "Cotter Catchment Lookout Track",
                "geometry": {
                    "type": "point",
                    "coordinates": [
                        -35.324,
                        148.940
                    ]
                }
            },
        ]
    }

    return (
        <MapContainer style={{ height: '100vh' }} center={[-33.7507, 150.6877]} zoom={10} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.properties.map(place => (<Marker icon={
                new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41],
                })
            } position={[place.geometry.coordinates[0], place.geometry.coordinates[1]]}>
                <Popup>
                    {place.name}
                </Popup>
            </Marker>))}

        </MapContainer >
    )
}

export default Map;

