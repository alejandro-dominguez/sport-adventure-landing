import {
    FirstSection,
    SecondSection,
    ThirdSection,
    LandingFooter
} from '../components/landingComponents/';
import { useState } from 'react';

const LandingPage = () => {
    const [heroCarouselData,] = useState(
        [
            'about-us-1.png',
            'about-us-2.png'
        ]
    )

    const [heroSliderData,] = useState(
        [
            {
                src : 'logo-ktm.svg',
                alt : 'logo Ktm',
                id : 'hero-slider-img-1'
            },
            {
                src : 'logo-canam.svg',
                alt : 'logo Can-Am',
                id : 'hero-slider-img-2'
            },
            {
                src : 'logo-husqvarna.svg',
                alt : 'logo Husqvarna',
                id : 'hero-slider-img-3'
            },
            {
                src : 'logo-vespa.svg',
                alt : 'logo Vespa',
                id : 'hero-slider-img-4'
            },
            {
                src : 'logo-aprilia.svg',
                alt : 'logo Aprilia',
                id : 'hero-slider-img-5'
            },
            {
                src : 'logo-motoguzzi.svg',
                alt : 'logo Moto Guzzi',
                id : 'hero-slider-img-6'
            },
            {
                src : 'logo-motomorini.svg',
                alt : 'logo Moto Morini',
                id : 'hero-slider-img-7'
            },
            {
                src : 'logo-royalenfield.svg',
                alt : 'logo Royal Enfield',
                id : 'hero-slider-img-8'
            },
            {
                src : 'logo-cfmoto.svg',
                alt : 'logo CF Moto',
                id : 'hero-slider-img-9'
            },
            {
                src : 'logo-supersoco.svg',
                alt : 'logo Super Soco',
                id : 'hero-slider-img-10'
            }
        ]
    )
    
    const [productCardsData,] = useState(
        [
            {
                id : 'card-img-1',
                name : '390 Adventure SW',
                brand : 'ktm',
                desc : 'Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam. Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam.',
                src : 'product-1.png',
            },
            {
                id : 'card-img-2',
                name : 'Norden 901',
                brand : 'husqvarna',
                desc : 'Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam. Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam.',
                src : 'product-2.png',
            },
            {
                id : 'card-img-3',
                name : 'Duke 200',
                brand : 'ktm',
                desc : 'Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam. Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam.',
                src : 'product-3.png',
            },
            {
                id : 'card-img-4',
                name : 'X-Cape',
                brand : 'motomorini',
                desc : 'Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam. Sequi tempore magnam blanditis, placeat repellendus facere, eligendi sint omnis provident magnam blanditiis necessitatibus, sint omnis provident odit magnam.',
                src : 'product-4.png',
            }
        ]
    )

	const [aboutSliderData,] = useState(
        [
            'about-us-1.png',
            'about-us-2.png',
            'about-us-3.png',
            'about-us-4.png'
        ]
    )

    const [aboutCardsData,] = useState(
        [
            {
                id : 'about-us-1',
                title1 : 'Estilo sobre',
                title2 : 'el asfalto',
                text : 'Vive la pasión sobre ruedas con nuestra selección de vehículos'
            },
            {
                id : 'about-us-2',
                title1 : 'Excelencia',
                title2 : 'y rendimiento',
                text : 'Trabajamos las motos, ATV, UTV y SSV líderes en el mercado'
            },
            {
                id : 'about-us-3',
                title1 : 'Calidad',
                title2 : 'y oportunidad',
                text : 'Encuentra al nuevo compañero para tus aventuras'
            },
        ]
    )

    const [servicesData,] = useState(
        [
            {
                id : 'services-1',
                title : 'Estilo Sobre el Asfalto',
                text : 'Vive la pasión sobre ruedas con nuestra selección de vehículos'
            },
            {
                id : 'services-2',
                title : 'Excelencia y Rendimiento',
                text : 'Trabajamos las motos, ATV, UTV y SSV líderes en mercado'
            },
            {
                id : 'services-3',
                title : 'Calidad y Oportunidades',
                text : 'Encuentra al nuevo compañero para tus aventuras'
            },
            {
                id : 'services-4',
                title : 'Calidad y Oportunidades',
                text : 'Encuentra al nuevo compañero para tus aventuras'
            },
        ]
    )
    
    return (
        <div className='app-container'>
            <div className='snap-start'>
                <FirstSection
                    heroCarouselImgsData={heroCarouselData}
                    heroSliderImgsData={heroSliderData}
                />
            </div>
            <div className='snap-start'>
                <SecondSection productCardsData={productCardsData} />
            </div>
            <ThirdSection
                aboutSliderImgsData={aboutSliderData}
                aboutCardsData={aboutCardsData}
                servicesData={servicesData}
            />
            <LandingFooter />
        </div>
    )
}

export default LandingPage;
