import { useState } from "react";
import Link from "../Link/Link";

import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {"id":1, "path":"/","title":"Home","requiresAuth":false},
        {"id":2, "path":"/about","title":"About Us","requiresAuth":false},
        {"id":3, "path":"/contact","title":"Contact","requiresAuth":false},
        {"id":4, "path":"/dashboard","title":"Dashboard","requiresAuth":true},
        {"id":5, "path":"/settings","title":"Settings","requiresAuth":true}
      ]
      
    
    return (
    <nav>
      <div className="md:hidden pl-20 pt-6" onClick={() => setOpen(!open)}>
{
  open === true ? <RxCross1 className=" text-3xl" /> :
   <MdMenu className=" text-3xl" />
}
      
      

      </div>
        <ul className={`md:flex duration-1000 absolute md:static py-6
        ${ open ? 'top-16' : '-top-64'}
        px-20 shadow-2xl bg-gray-500 rounded-2xl`}>
        
            {
                routes.map(route => <Link
                     key={route.id}
                     route ={route}
                ></Link>)
            }
        </ul>


    </nav>
  );
};

export default Header;
