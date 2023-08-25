const home = (req,res)=>{
    res.render('pages/index');
};
const about = (req,res)=>{
    res.render();
};
const blog = (req,res)=>{
    res.render();
};



//export routes
module.exports = {
    home,
    about,
    blog
};