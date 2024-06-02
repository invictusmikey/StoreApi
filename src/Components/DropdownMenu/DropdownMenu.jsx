import React, { useState, useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex';



const DropdownMenu = () => {

    const { filterByCategory,filterProducts } = useContext(ProductContext);

    const handleCategoryClick = (category) => {
      filterByCategory(category);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                type="button"
                onClick={toggleDropdown}
                className='hover:scale-105'
            >
                Categories
            </button>
            {isOpen && (
                <ul
                    className="absolute z-50 bg-[#F59433] rounded-md shadow-sm overflow-hidden mt-1 "
                >
                    <li className="block px-4 py-2 hover:bg-orange-600"><button onClick={filterProducts}>All</button></li>
                        
                    <li className="block px-4 py-2 hover:bg-orange-600"><button onClick={() => handleCategoryClick("men's clothing")}>
                        Men's clothing
                        </button>
                    </li>
                    <li className="block px-4 py-2 hover:bg-orange-600"><button onClick={() => handleCategoryClick("women's clothing")}>
                        Women's clothing
                    </button>
                    </li>
                    <li className="block px-4 py-2 hover:bg-orange-600"><button onClick={() => handleCategoryClick("electronics")}>
                   
                        electronics
                    </button>
                    </li>
                    <li className="block px-4 py-2 hover:bg-orange-600"><button onClick={() => handleCategoryClick("jewelery")}>
                    
                    jewelery
                    </button>
                    </li>

                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;

