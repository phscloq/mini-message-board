const Message = require('../models/message');

const message_post = async (req, res) =>{
    const message = new Message(req.body);
    try{
        const result = await message.save();
    }catch(err){
        console.log(err);
    }
    res.redirect('/');

}

const message_get = async (req, res) =>{
    try{
        const result = await Message.find().sort({createdAt: -1});
        res.render('index', {title:'Mini Messageboard', messages:result})
    }catch(err){
        console.log(err);
    }
}

module.exports={
    message_post,
    message_get
};