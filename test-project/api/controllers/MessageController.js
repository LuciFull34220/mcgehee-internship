/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    friendlyName: 'View messages',




    description: 'Display messages.',




    exits: {


    success: {
      viewTemplatePath: 'pages/MessageView',
      description: 'Display messages.'
    },


  },


  fn: async function () {


    return {};


  },


       
    displayMessages: async function(req, res) {
       
        var messages = await Message.find({where: {emailAdress: 'lucillefuller@gmail.com'}, select: ['message']}).exec(function(err, messages) {
   
            if (err) return res.serverError (err);
           
           
            else return res.view('pages/MessageView');
   
        });    


    }

};

