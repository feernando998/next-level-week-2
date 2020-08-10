const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Insert

    proffyValue = {
        name: "Lucas Fernando",
        avatar: "https://avatars0.githubusercontent.com/u/50500006?s=460&u=2871bcc4848acac506c7f0af5062e2024c69d503&v=4",
        whatsapp: "18991491299",
        bio: "Entusiasta das melhores tecnologias avançadas. Apaixonado pelas melhores coisas relacionadas a biologia, buscando sempre se manter atualizado.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        //proffy id vem pelo banco
    }

    classScheduleValues = [
        //class id vem pelo banco
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },
        { 
        weekday: 0,
        time_from: 520,
        time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar classes de um professor e dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)

    //Filtragem dos dados
    //ex: das 8h as 18h
    //time_from (8h) deve ser menor ou igual ao horario solicitado e time_to precima ser acima
    const selectClassesSchedules = await db.all(`
        
    `)

    //console.log(selectClassesSchedules)

})