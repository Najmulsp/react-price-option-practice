import SingleOption from "../SingleOption/SingleOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,          
          "image": "https://i.ibb.co/P43SJNK/gym-room2.jpg",
          "option_name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to gym equipment",
            "1 fitness assessment per month",
            "Locker room access",
            "Free gym induction"
          ]
        },
        {
          "id": 2,        
          "image": "https://i.ibb.co/qRQjx68/gym-room4.jpg",
          "option_name": "Premium Member",
          "price": "$50/month",
          "features": [
            "Access to gym equipment",
            "Unlimited fitness assessments",
            "Locker room access",
            "Free gym induction",
            "Group fitness classes",
            "1 personal training session per month",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 3,
          "image": "https://i.ibb.co/wW98sXf/gym-room3.jpg",
          "option_name": "Elite Membership",
          "price": "$70/month",
          "features": [
            "Access to gym equipment",
            "Unlimited fitness assessments",
            "Premium locker room access",
            "Priority gym induction",
            "All group fitness classes",
            "4 personal training sessions per month",
            "Access to sauna and steam room",
            "Nutrition counseling",
            "Massage therapy discounts",
            "Guest passes for friends and family"
          ]
        }
      ]
      ;
      
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-6">Best options in the town</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  m-10">
           {
                priceOptions.map(option => <SingleOption
                option={option}
                key={option.id}
                ></SingleOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;