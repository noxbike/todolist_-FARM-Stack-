export const day = (date) => {
    const today = new Date();
    let data = new Date(date);
    if(today.getFullYear() === data.getFullYear() && today.getMonth() === data.getMonth()){
        if(today.getDate() === data.getDate()){
            return(`Today ${data.getHours()}:${data.getMinutes() < 10 && '0'}${data.getMinutes()}`)
        }
        if(data.getDate() === (today.getDate()+1)){
            return(`Tomorrow`)
        }
        if(data.getDate() === (today.getDate()-1)){
            return(`Yesterday`)
        }
    }
    return data.toUTCString();
  }

export const onlyTodayTodo = (data, collection) => {
    let currentTodo = new Date(data.when)
    let date = new Date();
    if(date.getFullYear() === currentTodo.getFullYear() && date.getMonth() === currentTodo.getMonth() && date.getDate() === currentTodo.getDate()){
        return data.lists === collection.name && data.complete === false
    }
    return false
}