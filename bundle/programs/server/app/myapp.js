(function(){Facts = new Mongo.Collection('facts');


if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function () {
      //return 'name';

      number =  Facts.find({counter: {$exists:true}}).fetch()[0]
      //Session.set('counter', number.counter);
      return number.counter;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      counterDoc = Facts.find({counter: {$exists:true}}).fetch()[0];
      counterDoc.counter = counterDoc.counter + 1;
      Meteor.call('update',counterDoc.counter);
    
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  
  Meteor.methods({
  	update: function(a){
  	 console.log('test');
  	 //Facts.insert({ counter: "test"});
  	 //Facts.remove({});
  	 //Facts.insert({counter:0});
  	 Facts.update({counter: {$exists:true}},{counter:a},{upsert:true});
  	 }
  	 });
  	
  
}

})();
