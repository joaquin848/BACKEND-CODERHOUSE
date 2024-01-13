export default class Basicdao{
    constructor(model) {
        this.model = model;
        this.populateOptions = populateOptions;
    }

    async getAll(){
        return this.model.find().populate(populateOptions);
    }

    async getById(id) {
        return this.model.findById(id).populate(this.populateOptions);
    }

    async createOne(data){
        this.model.create(data);
    }
}