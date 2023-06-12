const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// show tomorrow, today, or yesterday under todolist if it's almost reaching the deadline
export const day = (date) => {
    const today = new Date();
    let data = new Date(date);
    if(today.getFullYear() === data.getFullYear() && today.getMonth() === data.getMonth()){
        if(today.getDate() === data.getDate()){
            return(`Today ${data.getHours() < 10 ? `0${data.getHours()}`: data.getHours()}:${data.getMinutes() < 10 ? `0${data.getMinutes()}`: data.getMinutes()}`)
        }
        if(data.getDate() === (today.getDate()+1)){
            return(`Tomorrow`)
        }
        if(data.getDate() === (today.getDate()-1)){
            return(`Yesterday`)
        }
       
        if(data.getDate() > today.getDate()+1 && data.getDate() < today.getDate()+7){
            return weekday[data.getDay()];
        }
    }
    if(data.getDate() < today.getDate()-1 || data.getMonth()!== today.getMonth())
    {
        return ("")
    }
    return `${weekday[data.getDay()]} ${data.getDate()} ${month[data.getMonth()]}`;
}

// color date under todolist
export const colorDate = (date) => {
    const today = new Date();
    let data = new Date(date);
    if(today.getFullYear() === data.getFullYear() && today.getMonth() === data.getMonth()){
        if(data.getDate() === (today.getDate()-1)){
            return("gray")
        }
        if(data.getDate() > (today.getDate()-1) && data.getDate() < (today.getDate()+7)){
            return("orange")
        }
        if(data.getDate() >= (today.getDate()+7)){
            return("green")
        }
    }
}

// condition to show todolist who should be done today
export const onlyTodayTodo = (data, collection) => {
    let currentTodo = new Date(data.when)
    let date = new Date();
    if(date.getFullYear() === currentTodo.getFullYear() && date.getMonth() === currentTodo.getMonth() && date.getDate() === currentTodo.getDate()){
        return data.lists === collection.name && data.complete === false
    }
    return false
}