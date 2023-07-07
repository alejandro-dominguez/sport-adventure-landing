const HeroSlider = ({ heroSliderImgsData }) => {
	return (
		<div className='relative mt-[23rem]'>
			<div className='w-max grid place-items-center'>
				<div className='w-full flex items-center justify-center'>
					<div className='h-full w-full flex items-center justify-center animate-slide'>
						{heroSliderImgsData.map(data => {
							return (
								<img
									src={require(`../../../assets/${data.src}`)}
									alt={data.alt}
									key={data.id}
									className='block w-[8.5rem] mx-7'
								/>
							) 
						})}
					</div>
					<div className='h-full w-full flex items-center justify-center animate-slide'>
						{heroSliderImgsData.map(data => {
							return (
								<img
									src={require(`../../../assets/${data.src}`)}
									alt={data.alt}
									key={`${data.id}#2`}
									className='block w-[8.5rem] mx-7'
								/>
							) 
						})}
					</div>
				</div>
			</div>
			<div className='hero-logos-shadow left' />
			<div className='hero-logos-shadow right' />
		</div>
	)
}

export default HeroSlider;
