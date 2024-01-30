'use client'
import Navbar from '@/components/navBar/page';
import Hero from '@/components/HeroSection/page';
import Footer from '@/components/footer/page';
import { useSelector } from "react-redux";

const page = () => {
	const z = useSelector(state=>state)
	console.log(z)
	return (
		<div>
			<Navbar />
			<Hero />
			<Footer />
		</div>
		
	)
}

export default page