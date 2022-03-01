import express, { application } from 'express';
import   bodyPaser from 'body-parser';

const app = express()
app.use(bodyPaser.json())

app.get('/api/new/a',(req,res)=>{
    res.send('HItherttttthth')
})

app.listen(3000,()=>{
    console.log('NEW SERVICE RUN ON PORT 3000')
})