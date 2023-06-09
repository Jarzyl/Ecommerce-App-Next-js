    import { useState } from "react";

    interface ShippingOptionProps {
    title: string;
    duration: string;
    price: string;
    }

export default function ShippingOption({ title, duration, price }: ShippingOptionProps) {
    const [isSelected, setIsSelected] = useState(false);

    const handleDelivery = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className={`flex justify-between w-[280px] md:w-[660px] border-2 border-gray-200 p-2 rounded-lg relative mb-3 ${ isSelected ? "selected" : "" }`}
        onClick={handleDelivery}>
            <div className="grid ml-5">
                <span className={`cursor-pointer checkmark absolute left-[6px] top-1/3 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 transition duration-300 
                ${ isSelected ? "bg-gray-600 border-gray-600" : "border-gray-600 bg-transparent"
                }`}></span>
                <p className="font-bold text-gray-700">{title}</p>
                <p className="text-gray-400">{duration}</p>
            </div>
                <div className="mt-3">
                    <p className="font-bold text-gray-700">{price}</p>
            </div>
        </div>
    );
};
