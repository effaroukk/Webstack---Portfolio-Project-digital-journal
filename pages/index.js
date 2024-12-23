import CategorySection from "../components/home/category-section";
import Layout from "../components/layout/layout";
import LatestSection from "../components/home/latest-section";
import PopularSection from "../components/home/popular-section";
import TrendingSection from "../components/home/trending-section";

export default function Home() {
	return (
		<Layout>
			<TrendingSection />
			<LatestSection />
			<PopularSection />
			<CategorySection />
		</Layout>
	);
}
