import React from 'react'
import { GoCheckCircleFill } from 'react-icons/go'
const PriceCard = () => {
    const initialState =
        [
            {
                id: 1,
                name: "FREE",
                price: "0",
                feautures: [
                    "Panel",
                    "Carga de Ingresos y gastos",
                    "Manejo de cuentas",
                    "1GB espacio en la nube",
                    "Soporte"
                ]
            },
            {
                id: 2,
                name: "Standard",
                price: "3",
                feautures: [
                    "Paquete Free",
                    "Declaración de impuestos",
                    "Manejo de metas",
                    "4GB espacio en la nube",
                    "Soporte"
                ]
            },
            {
                id: 3,
                name: "Full",
                price: "9",
                feautures: [
                    "Paquete Standard",
                    "Multiples usuarios",
                    "Conexión directa con tus bancos",
                    "Espacio en la nube ilimitado",
                    "Soporte"
                ]
            },
        ];
    return (
        <section id='section-card' className='w-full flex flex-col justify-center items-center gap-14 p-5 flex-wrap text-mBlack md:flex-row'>
            {initialState.map(item => (
                <div id='container-card' className='grid w-[320px] h-[500px] bg-mWhite border border-solid border-mBlue rounded-xl text-center p-8 gap-4' key={item.id}>
                    <h2 className='font-bold'>{item.name}</h2>
                    <div>
                        <h3 className='text-mBlue text-4xl font-bold'>{item.price}$</h3>
                        <p className='text-mBlue text-sm'>por mes</p>
                    </div>
                    <ul className='grid gap-3 text-left'>
                        {item.feautures.map(feature => (
                            <div className='flex gap-2'>
                                <GoCheckCircleFill className='text-green-500 rounded-full text-2xl' />
                                <li key={feature}>{feature}</li>
                            </div>
                        ))}
                    </ul>
                    <button className='p-2 bg-mBlue text-mWhite rounded-md'>Try for free</button>
                </div>
            ))}
        </section>
    )
}

export default PriceCard