
import PropTypes from "prop-types";
import { IoCheckmarkCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-2 flex-grow">
            <IoCheckmarkCircle className="text-center text-violet-600 ml-24" />
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;