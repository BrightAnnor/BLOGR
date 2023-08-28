const Blog = require('../database/models/blog');



const home = async (req,res)=>{
    const blogs = await Blog.findAll();
    const records = blogs.map(v=> v.dataValues)
    console.log(records)
    res.render('pages/index',{records});
};
const about = (req,res)=>{
    res.render('pages/about');
};
const blog =  (req,res)=>{
    
    res.render('pages/blog');
};
const addBlog = async (req,res)=>{
    const {title,description,author} = req.body
    //insert in database
    await Blog.create({title,description,author})
    // res.send('Blog created successfully')
    res.redirect('/')
}
const contact = (req,res)=>{
    res.render('pages/contact');
};



//export routes
module.exports = {
    home,
    about,
    blog,
    addBlog,
    contact
};