var moment = require("../../moment-timezone");

exports["Asia/Beirut"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-30T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2013-03-30T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2013-03-30T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2013-03-30T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2013-10-26T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2013-10-26T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2013-10-26T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2013-10-26T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2013-03-30T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2013-03-30T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2013-03-30T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2013-03-30T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2013-10-26T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2013-10-26T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2013-10-26T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2013-10-26T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-29T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2014-03-29T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2014-03-29T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2014-03-29T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2014-10-25T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2014-10-25T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2014-10-25T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2014-10-25T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2014-03-29T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2014-03-29T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2014-03-29T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2014-03-29T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2014-10-25T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2014-10-25T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2014-10-25T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2014-10-25T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-28T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2015-03-28T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2015-03-28T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2015-03-28T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2015-10-24T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2015-10-24T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2015-10-24T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2015-10-24T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2015-03-28T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2015-03-28T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2015-03-28T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2015-03-28T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2015-10-24T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2015-10-24T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2015-10-24T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2015-10-24T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-26T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2016-03-26T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2016-03-26T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2016-03-26T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2016-10-29T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2016-10-29T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2016-10-29T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2016-10-29T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2016-03-26T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2016-03-26T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2016-03-26T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2016-03-26T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2016-10-29T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2016-10-29T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2016-10-29T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2016-10-29T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-25T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2017-03-25T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2017-03-25T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2017-03-25T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2017-10-28T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2017-10-28T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2017-10-28T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2017-10-28T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2017-03-25T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2017-03-25T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2017-03-25T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2017-03-25T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2017-10-28T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2017-10-28T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2017-10-28T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2017-10-28T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-24T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2018-03-24T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2018-03-24T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2018-03-24T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2018-10-27T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2018-10-27T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2018-10-27T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2018-10-27T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2018-03-24T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2018-03-24T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2018-03-24T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2018-03-24T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2018-10-27T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2018-10-27T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2018-10-27T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2018-10-27T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-30T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2019-03-30T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2019-03-30T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2019-03-30T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2019-10-26T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2019-10-26T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2019-10-26T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2019-10-26T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2019-03-30T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2019-03-30T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2019-03-30T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2019-03-30T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2019-10-26T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2019-10-26T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2019-10-26T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2019-10-26T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-28T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2020-03-28T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2020-03-28T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2020-03-28T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2020-10-24T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2020-10-24T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2020-10-24T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2020-10-24T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2020-03-28T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2020-03-28T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2020-03-28T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2020-03-28T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2020-10-24T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2020-10-24T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2020-10-24T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2020-10-24T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-27T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2021-03-27T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2021-03-27T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2021-03-27T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2021-10-30T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2021-10-30T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2021-10-30T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2021-10-30T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2021-03-27T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2021-03-27T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2021-03-27T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2021-03-27T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2021-10-30T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2021-10-30T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2021-10-30T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2021-10-30T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-26T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2022-03-26T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2022-03-26T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2022-03-26T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2022-10-29T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2022-10-29T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2022-10-29T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2022-10-29T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2022-03-26T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2022-03-26T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2022-03-26T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2022-03-26T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2022-10-29T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2022-10-29T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2022-10-29T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2022-10-29T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-25T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2023-03-25T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2023-03-25T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2023-03-25T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2023-10-28T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2023-10-28T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2023-10-28T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2023-10-28T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2023-03-25T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2023-03-25T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2023-03-25T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2023-03-25T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2023-10-28T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2023-10-28T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2023-10-28T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2023-10-28T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-30T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2024-03-30T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2024-03-30T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2024-03-30T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2024-10-26T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2024-10-26T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2024-10-26T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2024-10-26T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2024-03-30T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2024-03-30T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2024-03-30T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2024-03-30T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2024-10-26T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2024-10-26T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2024-10-26T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2024-10-26T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-29T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2025-03-29T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2025-03-29T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2025-03-29T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2025-10-25T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2025-10-25T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2025-10-25T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2025-10-25T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2025-03-29T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2025-03-29T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2025-03-29T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2025-03-29T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2025-10-25T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2025-10-25T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2025-10-25T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2025-10-25T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-28T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2026-03-28T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2026-03-28T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2026-03-28T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2026-10-24T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2026-10-24T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2026-10-24T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2026-10-24T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2026-03-28T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2026-03-28T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2026-03-28T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2026-03-28T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2026-10-24T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2026-10-24T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2026-10-24T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2026-10-24T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-27T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2027-03-27T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2027-03-27T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2027-03-27T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2027-10-30T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2027-10-30T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2027-10-30T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2027-10-30T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2027-03-27T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2027-03-27T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2027-03-27T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2027-03-27T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2027-10-30T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2027-10-30T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2027-10-30T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2027-10-30T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-25T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2028-03-25T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2028-03-25T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2028-03-25T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2028-10-28T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2028-10-28T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2028-10-28T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2028-10-28T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2028-03-25T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2028-03-25T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2028-03-25T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2028-03-25T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2028-10-28T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2028-10-28T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2028-10-28T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2028-10-28T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-24T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2029-03-24T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2029-03-24T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2029-03-24T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2029-10-27T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2029-10-27T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2029-10-27T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2029-10-27T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2029-03-24T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2029-03-24T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2029-03-24T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2029-03-24T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2029-10-27T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2029-10-27T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2029-10-27T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2029-10-27T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-30T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2030-03-30T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2030-03-30T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2030-03-30T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2030-10-26T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2030-10-26T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2030-10-26T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2030-10-26T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2030-03-30T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2030-03-30T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2030-03-30T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2030-03-30T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2030-10-26T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2030-10-26T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2030-10-26T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2030-10-26T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-29T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2031-03-29T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2031-03-29T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2031-03-29T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2031-10-25T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2031-10-25T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2031-10-25T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2031-10-25T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2031-03-29T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2031-03-29T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2031-03-29T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2031-03-29T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2031-10-25T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2031-10-25T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2031-10-25T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2031-10-25T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-27T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2032-03-27T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2032-03-27T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2032-03-27T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2032-10-30T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2032-10-30T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2032-10-30T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2032-10-30T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2032-03-27T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2032-03-27T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2032-03-27T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2032-03-27T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2032-10-30T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2032-10-30T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2032-10-30T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2032-10-30T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-26T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2033-03-26T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2033-03-26T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2033-03-26T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2033-10-29T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2033-10-29T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2033-10-29T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2033-10-29T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2033-03-26T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2033-03-26T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2033-03-26T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2033-03-26T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2033-10-29T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2033-10-29T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2033-10-29T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2033-10-29T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-25T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2034-03-25T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2034-03-25T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2034-03-25T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2034-10-28T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2034-10-28T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2034-10-28T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2034-10-28T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2034-03-25T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2034-03-25T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2034-03-25T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2034-03-25T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2034-10-28T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2034-10-28T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2034-10-28T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2034-10-28T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-24T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2035-03-24T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2035-03-24T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2035-03-24T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2035-10-27T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2035-10-27T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2035-10-27T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2035-10-27T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2035-03-24T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2035-03-24T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2035-03-24T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2035-03-24T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2035-10-27T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2035-10-27T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2035-10-27T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2035-10-27T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-29T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2036-03-29T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2036-03-29T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2036-03-29T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2036-10-25T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2036-10-25T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2036-10-25T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2036-10-25T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2036-03-29T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2036-03-29T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2036-03-29T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2036-03-29T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2036-10-25T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2036-10-25T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2036-10-25T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2036-10-25T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-28T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2037-03-28T21:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2037-03-28T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "01:00:00", "2037-03-28T22:00:00+00:00 should be 01:00:00 in Asia/Beirut");
		t.equal(moment("2037-10-24T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:59:59", "2037-10-24T20:59:59+00:00 should be 23:59:59 in Asia/Beirut");
		t.equal(moment("2037-10-24T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm:ss"), "23:00:00", "2037-10-24T21:00:00+00:00 should be 23:00:00 in Asia/Beirut");

		t.equal(moment("2037-03-28T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2037-03-28T21:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2037-03-28T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2037-03-28T22:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2037-10-24T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2037-10-24T20:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2037-10-24T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2037-10-24T21:00:00+00:00 should be -120 minutes offset");

		t.done();
	}
};