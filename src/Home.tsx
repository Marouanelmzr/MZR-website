import Shopnow from "./Components/Shopnow";
import Shearchbar from "./Components/Searchbar";

function Home() {
return (
    <div className="home">
        <div className="label">
                <h1>A clothing brand created by two cousins specialised in Street wear and apparel design</h1>
                <h1>EST - 2025</h1>
        </div>
        <div className="boutton">
            <Shopnow />
        </div>
    </div>
)    
}

export default Home