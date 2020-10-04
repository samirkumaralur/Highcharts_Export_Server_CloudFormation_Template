const exporter = require('highcharts-export-server');

module.exports.handler = (event, context, callback) => {
console.log(event.body);
    var exportSettings = {
        type: 'png',
        options: event.body
    };

exporter.initPool({maxWorkers: 2});
exporter.export(exportSettings, function (err, res) {
		exporter.killPool();
		if (res) {
			const response = {
    			statusCode: 200,
    			body: JSON.stringify({
      				message: res.data
                        }),
                      };

                     callback(null, response);               
                   }    
        });
};

