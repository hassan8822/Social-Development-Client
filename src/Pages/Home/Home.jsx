import Feature from "../../Components/Feature/Feature";
import Gallery from "../../Components/Gallery/Gallery";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
       
            <Banner></Banner>
            <Feature></Feature>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;