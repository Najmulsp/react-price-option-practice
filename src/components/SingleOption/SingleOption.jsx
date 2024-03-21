import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const SingleOption = ({option}) => {
    const {features, option_name, price, image} =option;
    return (
        <div className="text-center text-white bg-violet-300 rounded-2xl flex flex-col">
            <div className="p-6">
            <img className=" rounded-2xl" src={image} alt="" />
            </div>
            <h3  className="text-5xl py-6 font-semibold">{option_name}</h3>
            {
                features.map(feature =><Feature key={option.id} feature={feature}></Feature>)
            }
            <h4 className="text-2xl text-violet-700 mt-2">{price}</h4>
            <button className="btn text-white bg-violet-500 my-6 mx-2 tracking-wider">Confirm</button>
            
        </div>
    );
};

SingleOption.propTypes ={
    option: PropTypes.object
}
export default SingleOption;