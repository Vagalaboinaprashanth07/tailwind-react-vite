import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../compoments/Button";


const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full"/>
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                     <span className="text-coral-red"> Special </span>
                    Offer
                    
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero recusandae sit itaque sequi, eius veritatis, nemo illo ullam dolorem facilis unde saepe eveniet maxime vitae? Rerum cum excepturi nesciunt?</p>
                <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto voluptate quia dolore qui sequi ea! Doloremque soluta sed totam!</p>
                <div className="mt-11 flex flex-wrap gap-4">
                <Button label="View Details" iconURL={arrowRight} />
                <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;