


const EventComponent = () => {

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
}

const onDragStart = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
}

    return(
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>
                Drag Me!
            </div>
        </div>
    )
}


export default EventComponent;