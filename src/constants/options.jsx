export const SelectTravelesList = [
    {
        id:1,
        title:'Solo',
        desc:'A Sole traveles in exploration',
        icon:'🚶',
        people:'1 People'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'💑',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'👨‍👩‍👧‍👦',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'🤝',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions = [
    {
        id:1,
        title:'Budget',
        desc:'Economy Stay, Travel & Food',
        icon:'💰',
    },
    {
        id:2,
        title:'Standard',
        desc:'Keep cost on the average side',
        icon:'💵',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about the cost',
        icon:'💎',
    },
]


export const AI_PROMPT = 'Create an optimal trip itinerary based on the specified location, duration, budget, and number of persons. Generate Travel Plan for Location: {location} for no of days: {noOfDays} Days with no of People or group: {People} with Budget: {Budget}; give me list of hotels with hotel name, description, address, rating, price, location in map, coordinates, image url; also for the same create the itinerary for {noOfDays} days, suggest places, give name, details, pricing, timings, place images urls, location (coordinate or in map); Remember all have to cover in the {Budget} level budget. Important: give the result in JSON Format'