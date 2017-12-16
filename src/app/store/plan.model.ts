export class Plan {
    id:Number;
    name:String;
    description:String;
    ownerId:Number;
    listDate:DateTimeFormat;
    img01:Blob;
    img01Descript:String;
    img02:Blob;
    img02Descript:String;
    img03:Blob;
    img03Descript:String;

    constructor(id:Number, name:String, description:String, ownerId:Number, listDate:DateTimeFormat, 
        img01:Blob, img01Descript:String, img02:Blob, img02Descript:String, img03:Blob, img03Descript:String){
            this.id = id;
            this.name = name;
            this.description = description;
            this.ownerId = ownerId;
            this.listDate = listDate;
            this.img01 = img01;
            this.img01Descript = img01Descript;
            this.img02 = img02;
            this.img02Descript = img02Descript;
            this.img03 = img03;
            this.img03Descript = img03Descript;
    }
}