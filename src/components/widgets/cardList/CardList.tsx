import { ITourCard } from "@/components/hooks/types";
import "./cardList.scss"
import TourCards from "@/components/ui/tourCards/TourCards";

interface IData{
    data: ITourCard[];
    name: string
}

const CardList = ({data, name}: IData) => {
    return (
        <section id="tour-list">
            <div className="container">
                <div className="tour-list">
                    <h1>{name}</h1>
                    <div className="tour-cards">
                        {
                        data.map((el)=> (
                            <TourCards tour={el}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardList;