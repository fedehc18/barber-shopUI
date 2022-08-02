import React from 'react'
import Page from '../components/Page'
import '../css/style-reservation.css'
import Barber1 from '../images/barber 1.jpg'
import Barber2 from '../images/barber 2.jpg'
import Barber3 from '../images/barber 3.jpg'
import Barber from '../components/Barber'

const fakeReservations = [
    {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    }
    , {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    },
    {
        name: "Victor",
        lastName: "Valdés",
        date: "29/08/2022",
        time: "15:00"
    },
    {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    }
]

const fakeBarbers = [
    {
        name: "Jesus",
        lastName: "Valle",
        image: Barber1,
        description: 'Experto en cortes de cabello modernos, diseño de cejas y barba para dar un look sutil y moderno a sus clientes'
    },
    {
        name: "Victor",
        lastName: "valdés",
        image: Barber2,
        description: 'Especializado en cortes de barba clásicos, tintes y peinados para toda tipo de ocasiones.'
    },
    {
        name: "Joaquin",
        lastName: "Guzmán",
        image: Barber3,
        description: 'Profesional en cortes, tinturas y mascarillas para la cara, brindando así un servicio completo a sus clientes.'
    }
]

function Reservation() {
    return (
        <Page>
            <main>
                <div class="reservas-lista">
                    <h1>Reservas:</h1>
                    <ul>
                        {fakeReservations.map(reservation =>
                            <li>
                                {`${reservation.name} ${reservation.lastName},${reservation.date}, ${reservation.time}hs`}
                                <button class="boton-lista">Cancelar</button>
                            </li>
                        )}
                    </ul>
                </div>
                <h1 class="crear-reserva">Crea tu reserva</h1>
                <ul class="reserva">
                    {fakeBarbers.map(barber =>
                        <Barber name={barber.name}
                            lastName={barber.lastName}
                            image={barber.image}
                            description={barber.description} />
                    )}
                </ul>
            </main>
        </Page>
    )
}

export default Reservation