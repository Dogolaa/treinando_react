const Events = () => {

    const hadleMyEvent = (e) => {
        console.log(e);
        console.log('Cliquei no botão');
    };

    return (
        <div>
            <div> <button onClick={hadleMyEvent}> Clique Aqui </button>  </div>
        </div>
    )
}

export default Events;