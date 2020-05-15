const BookModel = require('../model/book.model');

exports.test = function(request, response) {
    response.json({message: 'Test'})
}

exports.create_book = function(request, response) {
    const book = new BookModel({
        name: request.body.name,
        publisher: request.body.publisher,
        description: request.body.description
    });

    book.save(function(err) {
        if(err) {
            return next(err);
        }
        response.json({message: 'Book created'});
    });
}

exports.show_books = function(request, response) {
    BookModel.find({}, function(err, data) {
        if(err) {
            return next(err)
        }

        response.json({data: data});
    });
}

exports.update_books = function(request, response) {
	BookModel.findByIdAndUpdate(request.params.id, {$set: request.body}, function(err, books) {
  	
          if(err) return next(err);
          response.json({message: "Book updated"});
  });
};

exports.delete_books = function(request, response) {
  	BookModel.findByIdAndRemove(request.params.id, function(err) {
   	
	if(err) return next(err);
	response.json({message: "Book deleted"});
  }); 
};
