
const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel_item" style = {{width : width}}>
            {children}
        </div>
    );
};

export default CarouselItem;