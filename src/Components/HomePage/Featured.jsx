import SectionTitle from "../title/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import moment from "moment";
import './Featured.css'

const Featured = () => {
    return (
        <section className="md:py-20 md:px-36 featured-bg bg-fixed mb-10 text-white">
            <div className="bg-gray-950 bg-opacity-40 rounded">
            <SectionTitle heading='Featured Items' subHeading="Check it Out">
            </SectionTitle>
            <div className="md:flex justify-center items-center gap-10">
                <div>
                    <img src={featuredImg} alt="featured_image" />
                </div>
                <div>
                    <p className="text-2xl">{moment().format("dddd, MMM Do YYYY")}</p>
                    <p className="text-2xl">Where can get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quaerat tempora laborum molestiae porro assumenda laboriosam vel esse ducimus. Totam rem pariatur, necessitatibus velit nostrum similique facilis fugit unde repellat sed consectetur. Ullam adipisci, incidunt dolore voluptatum corrupti, accusamus perspiciatis omnis architecto iusto quidem delectus totam! Accusamus sapiente dignissimos consequuntur.</p>
                    <button className="btn btn-error btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Featured;