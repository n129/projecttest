export class Plan {
    id:Number;
    name:String;
    description:String;
    ownerUsername:String;
    listDate:DateTimeFormat;
    img01:String;
    img01Descript:String;
    img02:String;
    img02Descript:String;
    img03:String;
    img03Descript:String;
    //Image Loaded
    showImg01:String;
    showImg02:String;
    showImg03:String;

    constructor(){
    // constructor(id:Number, name:String, description:String, ownerUsername:String, listDate:DateTimeFormat, 
    //     img01:String, img01Descript:String, img02:String, img02Descript:String, img03:String, img03Descript:String){
            this.name = "";
            this.description = "";
            this.ownerUsername = "";
            this.img01 = "";
            this.img01Descript = "";
            this.img02 = "";
            this.img02Descript = "";
            this.img03 = "";
            this.img03Descript = "";
    }
}