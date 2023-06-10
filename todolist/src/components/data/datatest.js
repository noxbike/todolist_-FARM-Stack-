import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const lists = [
    { name: "Work", color: "green", icon: <MenuBookIcon/> },
    { name: "Personal", color: "red", icon: <PersonIcon/>},
    { name: "Grocery", color: "purple", icon: <LocalGroceryStoreIcon/>}
];

//generate a list of todos
export const datatodo = (max) => {
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDate();
    let data = []
    for( let i = 0; i < max; i++){
        let jour = Math.floor(Math.random() * (31 - 0) + 0);
        let obj = {
            task: `task #${i}`,
            description: `lorem ipsum dolor sit amet, consectetur adipiscing`,
            lists: `${lists[Math.floor(Math.random() * 3)].name}`,
            tags: `task#${Math.floor(Math.random()*10)}`,
            when: new Date(2023, month, jour, Math.floor(Math.random() * (20-7) + 7) ),
            complete: jour < day - 1 ? true:false,
        }
        data.push(obj)
    }
    return data
}