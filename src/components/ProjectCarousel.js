import Carousel from "react-multi-carousel";
import styles from '../styles/components/ProjectCarousel.module.css';

const ProjectCarousel = ({ images, carouselWidth }) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div style={{ paddingBottom: '30px', position: 'relative', width: carouselWidth  }}>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                responsive={responsive}
            >
                {
                    images.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            className={styles["carousel-image"]} 
                        />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;