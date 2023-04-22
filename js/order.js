const Order = () => { 
    const form = document.querySelector(".from__order")
    
    
    form.addEventListener("submit", (e) => {
        let name = document.querySelector('#name').value,
            list = document.querySelector('#list').value,
            comment = document.querySelector('#comment').value
            
        if (name && list) {
            e.preventDefault()
            window.open(
                `mailto:ommedia@gmail.com?subject=Order&body=Имя:${name};
                Заказ:${list};
                ${comment ? `Коментарий:${comment}` : '' }`
            )
            
        }
    })
    

}
export default Order