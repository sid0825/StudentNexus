import { IPreferences } from "../types/preferences";

export const multiSelectPreferences = {
  rentInclude: [
    "Any",
    "Heat",
    "Hot Water",
    "Gas",
    "Electricity",
    "Internet",
    "Cable",
  ],
  features: [
    "Any",
    "Gym",
    "Pool",
    "Parking",
    "Elevator",
    "Security",
    "Laundry",
    "Balcony",
    "AC",
    "Furnished",
  ],
};

export const singleSelectPreferences = {
  dietary: ["Veg", "NonVeg", "Vegan", "Eggetarian", "Any"],
  spotType: ["Private Room", "Shared Room", "Entire Place", "Hall Spot", "Any"],
  laundry: ["In Unit", "In Building", "None"],
  drinking: ["Yes", "No", "Any"],
  smoking: ["Yes", "No", "Any"],
  pet: ["Yes", "No", "Any"],
};

export const defaultFilters: IPreferences = {
  rent: 1000,
  beds: 0,
  baths: 2,
  distance: 1.5,
  dietary: "Any",
  spotType: "Any",
  laundry: "None",
  drinking: "Any",
  smoking: "Any",
  pet: "Any",
  rentInclude: ["Any"],
  features: ["Any"],
};
