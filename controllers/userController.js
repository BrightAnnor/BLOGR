const home = (req,res)=>{
    res.render('pages/index');
};
const about = (req,res)=>{
    res.render('pages/about');
};
const blog = (req,res)=>{
    res.render('pages/blog');
};
const contact = (req,res)=>{
    res.render('pages/contact');
};



//export routes
module.exports = {
    home,
    about,
    blog,
    contact
};