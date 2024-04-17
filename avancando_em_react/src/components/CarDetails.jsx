const CarDetails = ({ name,brand,year }) => {
    return (
        <div>
            <ul> 
                <li>Nome: {name}</li>
                <li>Marca: {brand}</li>
                <li>Ano: {year}</li>
        
            </ul>        
            
        </div>
    );
}

export default CarDetails;