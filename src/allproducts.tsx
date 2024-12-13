import SearchBar from "./Components/Searchbar";
import Card from "./Components/Card";
import { useState } from "react";
import Items from "./Components/Items";
import {products} from "./Products/Productsdata";

function Allproducts() {

const [selectedCategory,setSelectedcategory] = useState(null);
const [query,setQuery] = useState("");

//--------InputFilter----------
const handleInputChange = (event) => {
    setQuery(event.target.value);
};

const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1)
);

//--------RadioFilter----------
const handleChange = (event) => {
    setSelectedcategory(event.target.value);
};

//--------ButtonsFilter---------
const handleClick = (event) => {
    setSelectedcategory(event.target.value);
};


function  filteredData(products,selected,query){
    let filteredProducts = products;

    //Filtering Input Items
    if(query){
        filteredProducts = filteredItems;
    }

    // Selected Filter
    if(selected){
        filteredProducts = filteredProducts.filter(
            ({title,price})=>
                price === selected ||
                title === selected
        );
    }

    return filteredProducts.map(({id,title,price,categorie,size,color})=>(
        <Card
        key={id}
        title={title}
        price={price}
        categorie={categorie}
        size={size}
        color={color}
        />
    )
    );
}

const result = filteredData(products,selectedCategory,query);

    
return (
    <section className="allproducts">
        <section className="Searchbar">
        <SearchBar />
        </section>
        <Items />
    </section>
);  
}

export default Allproducts;