import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const lists = [
    { name: "Work", color: "green", icon: <MenuBookIcon/> },
    { name: "Personal", color: "red", icon: <PersonIcon/>},
    { name: "Grocery", color: "purple", icon: <LocalGroceryStoreIcon/>}
];

export const todo = [
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: 'Sun Jun 04 2023 14:00:00 GMT+0400 (heure du Golfe)', complete: false },
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: "Sat Jun 03 2023 12:00:00 GMT+0400 (heure du Golfe)", complete: false },
    {task: "Apprendre c++", description: "je dois devenir un dieu du code", lists: "Work", tag: "", when: "Sat Jun 03 2023 14:00:00 GMT+0400 (heure du Golfe)", complete: false},
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: "Sat Jun 03 2023 10:00:00 GMT+0400 (heure du Golfe)", complete: false },
    {task: "Faire les courses", description: "je dois faire les course chez carrefour", lists: "Grocery", tag: "", when: "Fri Jun 02 2023 14:45:00 GMT+0400 (heure du Golfe)", complete: true },
    {task: "Faire les courses", description: "Acheter de la viande", lists: "Grocery", tag: "", when: "Fri Jun 07 2023 14:45:00 GMT+0400 (heure du Golfe)", complete: false }
]