interface Listing {
    _id: string;
    imageUrl: string[];
    location: {
        latitude: string;
        longitude: string;
    };
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft?: number;

    tenants?: [{}];
    distance?: string;

    propertyGenderPreference?: {
        type: String;
        enum: ["Mixed", "Male", "Female"];
    };
    spotsAvailable?: [
        {
            spotType?: { type: String }; // "Private Room", "Shared Room", "Hall Spot",
            lease?: { type: String }; //"Onlease","Temporary"
            gender?: { type: String; enum: ["Male", "Female"] };
            rent?: { type: Number }; // per month
            utilities?: { type: Number }; // per month
        }
    ];
}

export const listings: Listing[] = [
    //   {
    //   _id:"1",
    //   imageUrl:["https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8="],
    //   location:{
    //     longitude:"-71.0899",
    //     latitude:"42.3399",
    //   }
    // },
    {
        _id: "9",
        imageUrl: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vZGVybiUyMGhvdXNlfGVufDB8fHx8MTY5MTk4NDg0OA&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1597096554383-cd4cbe20ddeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGVybiUyMGhvdXNlfGVufDB8fHx8MTY5MTk4NDg0OA&ixlib=rb-4.0.3&q=80&w=1080"
        ],
        location: {
            latitude: "42.3736",
            longitude: "-71.1056",
        },
        price: 3000,
        address: "98765, Maple St. - Somerville",
        beds: 4,
        baths: 2.5,
        sqft: 1500,
        tenants: [
            { name: "John Doe", age: 30 }
        ],
        distance: "2.5",
        spotsAvailable: [
            {
                spotType: { type: "Private Room" },
                lease: { type: "Onlease" },
                rent: { type: 1000 },
                utilities: { type: 200 },
            }
        ]
    },
    {
        _id: "21",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "3247, Washington St. - Jamaica Plain",
        beds: 4,
        baths: 2,
        sqft: 1200,
        price: 3950,
        distance: "5",
        location: {
            longitude: "-71.0899",
            latitude: "45.3399",
        },
    },
    {
        _id: "23",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "1234, Main St. - Boston",
        location: {
            longitude: "-71.0899",
            latitude: "42.3399",
        },
        beds: 2,
        baths: 1,
        sqft: 800,
        price: 2500,
        distance: "6",
    },
    {
        _id: "24",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "5678, Elm St. - Cambridge",
        location: {
            longitude: "-71.0899",
            latitude: "42.3899",
        },
        beds: 1,
        baths: 1,
        sqft: 600,
        price: 1800,
        distance: "13",
    },
    {
        _id: "25",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "9876, Oak St. - Somerville",
        location: {
            longitude: "-71.0899",
            latitude: "42.3199",
        },
        beds: 3,
        baths: 2,
        sqft: 1000,
        price: 2800,
        distance: "8",
    },
    {
        _id: "26",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "4321, Maple St. - Brookline",
        location: {
            longitude: "-71.0899",
            latitude: "42.3499",
        },
        beds: 4,
        baths: 2.5,
        sqft: 1500,
        price: 3500,
        distance: "0.5",
    },
    {
        _id: "27",
        imageUrl: [
            "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?b=1&s=612x612&w=0&k=20&c=m-J46TzUaPGkgkSEEplcVdt1x9-e-fZ31Faqo-HxGj8=",
        ],
        address: "7890, Pine St. - Newton",
        location: {
            longitude: "-71.0899",
            latitude: "42.3699",
        },
        beds: 2,
        baths: 1.5,
        sqft: 900,
        price: 2200,
        distance: "3.2",
    },
];

export default Listing;
