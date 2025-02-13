import express,{json} from "express"
import httpStatus from "http-status";

const port = 5000 
const app = express()
app.use(express.json())

let shoppingList = []

app.post('/items', (req,res) =>{
    
    const name = req.body.name;
    const quantity = req.body.quantity;
    const type = req.body.type;
    
    if (!name || !quantity || !type){
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
       return
    }else if(shoppingList.some(item => item.name === name)){
        res.sendStatus(httpStatus.CONFLICT);
        return
    }else{

    const listLength = shoppingList.length +1 
    
    const item ={
        "id": listLength,
        "name": name,
        "quantity":quantity,
        "type": type
    }

    shoppingList.push(item)
    res.sendStatus(httpStatus.CREATED);
    return}
    
    
})

app.get('/items', (req,res)=> {
    const type = req.query.type
    
    if (type){
        const filteredList = shoppingList.filter(itemList =>  itemList.type == type)
       
        
        res.status(httpStatus.OK).send(filteredList);

        return
    }
    res.status(httpStatus.OK).send(shoppingList);
    return

})

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.sendStatus(httpStatus.BAD_REQUEST);
        return;
    }

    const item = shoppingList.find(itemList => itemList.id === id);

    if (!item) {
        res.sendStatus(httpStatus.NOT_FOUND);
        return;
    }

    res.status(httpStatus.OK).send(item);
});





app.listen(port, console.log(`Rodando na porta ${port}`))