import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
//Hero component, hero prop, pass  permission defaultHero {hero:defaultHero}
export default function Home() {
	return (
		<Hero>
			<Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
				<Link to="/rooms" className="btn-primary">
					our rooms
				</Link>
			</Banner>
		</Hero>
	);
}
