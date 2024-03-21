import PropTypes from 'prop-types';


const Link = ({route}) => {
    
    return (
        
        <li  className="mr-10 hover:bg-violet-500 rounded-2xl py-2 px-6 text-cyan-100" >
                    <a href={route.path}>{route.title}</a>
                </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;