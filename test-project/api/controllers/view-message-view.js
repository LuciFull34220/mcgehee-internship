module.exports = {


  friendlyName: 'View message view',


  description: 'Display "Message view" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/message-view'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
