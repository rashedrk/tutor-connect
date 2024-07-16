import { selectOptions } from "@/utils/selectOptions";

export const medium = ['Bangla', 'English'];

export const mediumOptions = selectOptions(medium)

export const studentClass = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const studentClassOptions = studentClass.map(value => ({
    label: `Class ${value}`,
    value: value
}));

const subjects = [
    "Bangla",
    "English",
    "Mathematics",
    "General Science",
    "Social Science",
    "Religion and Moral Education",
    "Physical Education",
    "Art and Crafts",
    "ICT",
    "Geography and Environment",
    "History",
    "Civics and Citizenship",
    "Economics",
    "Physics",
    "Chemistry",
    "Biology",
    "Higher Mathematics",
    "Accounting",
    "Business Studies",
    "Finance and Banking",
    "Home Science",
    "Agricultural Studies",
    "Work and Life Oriented Education"
];

export const subjectsOptions = selectOptions(subjects);

export const gender = ['Male', 'Female'];
export const genderOptions = selectOptions(gender);

export const days = ['Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
export const daysOptions = selectOptions(days);