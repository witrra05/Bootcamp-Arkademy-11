let person = {
    name : "Wijaya Putra",
    age : 22,
    address: "Nagan Raya Provinsi Aceh",
    hobbies : ["musik","badminton"],
    is_married : false,
    list_school : [
        {
            School_name : "Universitas Teuku Umar",
            year_in : 2014,
            year_out : 2018,
            major : "ekonomi pembangunan"
        }
    ],
    skills : [
        {
            skill_name : "Microsoft Office",
            level : " adavanced"
        }
    ],
       
    interest_in_coding : true

}

console.log(JSON.stringify(person));