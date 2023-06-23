import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const collections = [
    { name: "Work", color: "green", icon: <MenuBookIcon/>, favorite: false },
    { name: "Personal", color: "red", icon: <PersonIcon/>, favorite:true},
    { name: "Grocery", color: "purple", icon: <LocalGroceryStoreIcon/>, favorite:false},
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
            id: i,
            task: `Task #${i}`,
            description: `lorem ipsum dolor sit amet, consectetur adipiscing`,
            lists: `${collections[Math.floor(Math.random() * 3)].name}`,
            tags: `Task#${Math.floor(Math.random()*10)}`,
            when: `${new Date(2023, month, jour, Math.floor(Math.random() * (20-7) + 7))}`,
            complete: jour < day - 1 ? true:false,
            dateCompletion: null,
        }
        data.push(obj)
    }
    return data
}

export const user = {
    name: 'John Smith',
    email: 'john@example.com', 
    password: 'fakepassword', 
    profile:"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
}

export const settings = {
    numberOfGoal: 20,
    week: [0, 4]
}