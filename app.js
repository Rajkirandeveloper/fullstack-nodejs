const express=require('express');
const app=express()
const path=require('path')
const categoryRoutes=require('./controllers/categoryRoute')
const productRoutes=require('./controllers/productsRoute')


app.use(express.static(path.join(__dirname, 'public/css')));
app.set('views',"./views")
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/category',categoryRoutes)
app.use('/products',productRoutes)
app.get('/products',(req,res)=>{
    res.send("products")
})
app.listen(3000)