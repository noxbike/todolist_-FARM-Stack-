import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const lists = [
    { name: "Work", color: "green", icon: <MenuBookIcon/> },
    { name: "Personal", color: "red", icon: <PersonIcon/>},
    { name: "Grocery", color: "purple", icon: <LocalGroceryStoreIcon/>}
];

export const todo = [
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: [21, 5, 2024] },
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: [21, 5, 2024] },
    {task: "Apprendre c++", description: "je dois devenir un dieu du code", lists: "Work", tag: "", when: [21, 5, 2024] },
    {task: "laver la voiture", description: "je dois laver l'exterieur de la voiture", lists: "Personal", tag: "", when: [21, 5, 2024] },
    {task: "Faire les courses", description: "je dois faire les course chez carrefour", lists: "Grocery", tag: "", when: [21, 5, 2024] }
]