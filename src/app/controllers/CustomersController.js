class CustomersController {
    constructor(){
        this.costumers = [
            {id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
            {id: 2, name: "Google", site: "http://google.com"},
            {id: 3, name: "UOL", site: "http://uol.com.br"}
        ];
    }
    
    //Listagem dos costumers
    index (req, res) {
        return res.json(this.customers);
    }
    //Mostra costumer
    show (req, res) {
        const id = parseInt(req.params.id);
        const customer = this.customers.find(item => item.id === id); 
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }
    //Cria costumer
    create (req, res){
        const { name, site} = req.body;
        const id = this.customers[this.customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }
    //atualiza costumer
    update (req, res){
        const id = parseInt(req.params.id);
        const { name, site} = req.body;

        const index = this.customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
            this.customers[index] = { id: parseInt(id), name, site }
        }

        return res.status(status).json(this.customers[index]);

    }
    //Exclui costumers
    destroy (req, res){
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >=0){
            this.customers.splice(index, 1);
        }

        return res.status(status).json();
    }
    
}

module.exports = new  CustomersController();