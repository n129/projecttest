export class Item {

    id:Number;
    name:String;
    description:String;
    price:number;
    ownerId:Number;
    listDate:DateTimeFormat;
    status:String;
	isTool:Boolean;
    soldTo:Number;
    soldToDate:DateTimeFormat;
	rentStartDate:DateTimeFormat;
	rentReturnDate: DateTimeFormat;
	rentTo:Number;
    img01:String;
    img01Descript:String;
    img02:String;
    img02Descript:String;
    img03:String;
    img03Descript:String;
    showImg01:String;
    showImg02:String;
    showImg03:String;

    constructor(id:Number, name:String, description:String, price:number, ownerId:Number, listDate:DateTimeFormat, 
        status:String, isTool:Boolean, soldTo:Number, soldToDate:DateTimeFormat, rentStartDate:DateTimeFormat, 
        rentReturnDate:DateTimeFormat, rentTo:Number, img01:String, img01Descript:String, img02:String, img02Descript:String,
        img03:String, img03Descript:String){
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.ownerId = ownerId;
            this.listDate = listDate;
            this.status = status;
            this.isTool = isTool;
            this.soldTo = soldTo;
            this.soldToDate = soldToDate;
            this.rentStartDate = rentStartDate;
            this.rentReturnDate = rentReturnDate;
            this.rentTo = rentTo;
            this.img01 = img01;
            this.img01Descript = img01Descript;
            this.img02 = img02;
            this.img02Descript = img02Descript;
            this.img03 = img03;
            this.img03Descript = img03Descript;
    }
}  